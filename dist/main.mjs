import axios from 'axios';
import { ethers, FunctionFragment } from 'ethers';
import * as protobuf from 'protobufjs';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const abiDirectory = path.join(__dirname, 'abi');
const abis = fs.readdirSync(abiDirectory).reduce((acc, file) => {
    const abiPath = path.join(abiDirectory, file);
    const abi = JSON.parse(fs.readFileSync(abiPath, 'utf8'));
    acc[file.replace('-abi.json', '')] = abi;
    return acc;
}, {});
// Generate selector map from ABIs
function generateSelectorMap(abis) {
    const selectorMap = {};
    for (const [name, abi] of Object.entries(abis)) {
        const iface = new ethers.Interface(abi);
        for (const fragment of iface.fragments) {
            if (fragment instanceof FunctionFragment) {
                const fnSignature = iface.getFunction(fragment.name)?.format();
                if (fnSignature) {
                    const selector = ethers.keccak256(ethers.toUtf8Bytes(fnSignature)).slice(0, 10);
                    selectorMap[selector] = { abi, functionName: fragment.name };
                }
            }
        }
    }
    return selectorMap;
}
const selectorMap = generateSelectorMap(abis);
// Parse command-line arguments
const args = process.argv.slice(2);
const txId = args[0];
const restEndpoint = args[1] || process.env.SEIREST;
if (!txId) {
    console.error('Error: Transaction hash (txId) must be provided as the first argument.');
    process.exit(1);
}
if (!restEndpoint) {
    console.error('Error: REST endpoint must be provided as the second argument or set in the SEIREST environment variable.');
    process.exit(1);
}
const txUrl = `${restEndpoint}/cosmos/tx/v1beta1/txs/${txId}`;
// Load protobuf root for Cosmos SDK from the proto directory
const protoRoot = protobuf.loadSync(path.join(__dirname, 'proto', 'cosmos-sdk', 'tx.proto'));
async function fetchAndDecodeTx(url) {
    try {
        const response = await axios.get(url);
        const txData = response.data;
        const message = txData.tx.body.messages[0];
        const messageType = message['@type'];
        if (isEvmTransaction(messageType)) {
            // Handle EVM transaction decoding
            const data = Buffer.from(message.data.data, 'base64').toString('hex');
            await decodeEvmTransaction(data);
        }
        else {
            // Handle Cosmos SDK transaction decoding
            console.log('Detected Cosmos SDK transaction. Attempting protobuf decoding...');
            await decodeCosmosTransaction(message);
        }
    }
    catch (error) {
        console.error('Error fetching or decoding transaction:', error);
    }
}
function isEvmTransaction(type) {
    return type.startsWith('/seiprotocol.seichain.evm') || type.startsWith('/seiprotocol.seichain.eth');
}
async function decodeEvmTransaction(data) {
    const selector = `0x${data.slice(0, 8)}`;
    const match = selectorMap[selector];
    if (match) {
        const iface = new ethers.Interface(match.abi);
        const decodedData = iface.decodeFunctionData(match.functionName, `0x${data}`);
        console.log('Decoded EVM Data:', decodedData);
        console.log('Function Name:', match.functionName);
    }
    else {
        console.error('No matching ABI found for EVM selector:', selector);
    }
}
async function decodeCosmosTransaction(message) {
    try {
        const messageType = message['@type'];
        const typeName = messageType.replace(/^\/+/, '').replace(/\./g, '_');
        const protoType = protoRoot.lookupType(typeName);
        if (!protoType) {
            console.error(`No matching protobuf type found for message type: ${messageType}`);
            return;
        }
        const messageBuffer = Buffer.from(message.data, 'base64');
        const decodedMessage = protoType.decode(messageBuffer);
        console.log(`Decoded Cosmos SDK Message (${messageType}):`, decodedMessage);
    }
    catch (error) {
        console.error('Error decoding Cosmos SDK transaction:', error);
    }
}
// Execute the function with the provided transaction ID and REST endpoint
fetchAndDecodeTx(txUrl);
