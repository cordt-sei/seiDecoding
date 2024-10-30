// source: evm/enums.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.seiprotocol.seichain.evm.PointerType', null, global);
/**
 * @enum {number}
 */
proto.seiprotocol.seichain.evm.PointerType = {
  ERC20: 0,
  ERC721: 1,
  NATIVE: 2,
  CW20: 3,
  CW721: 4
};

goog.object.extend(exports, proto.seiprotocol.seichain.evm);
