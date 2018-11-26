// npm i --save bs58

const bs58 = require('bs58')

// Encode
let context = Buffer.from('Hello World')
let base58 = bs58.encode(context).toString('hex');
console.log("computeBase58Encoding : " + base58);

// Decode
let decodeContext = bs58.decode(base58)
console.log("computeBase58Decoding : " + decodeContext);