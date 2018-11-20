const Unixfs = require('ipfs-unixfs')
const crypto = require('crypto')
const multihashes = require('multihashes')
const bs58 = require('bs58')

let filePath = '/Users/archer/Desktop/IPFS/code/test-file.txt'

let fs  = require('fs');
let buffer = fs.readFileSync(filePath);
const unixFs = new Unixfs('file', buffer).marshal();
let tag = Buffer.from([10])
let size = Buffer.from([unixFs.length]);
let newBuffer = Buffer.concat([tag, size, unixFs]);

// SHA2-256
let sha256 = crypto.createHash('sha256').update(newBuffer).digest();

// Multihash
let multihash = multihashes.encode(sha256, 'sha2-256');

// Base58
let base58 = bs58.encode(multihash).toString('hex');

console.log("SHA2-256 : 0x" + sha256.toString('hex'));
console.log("Multihash: 0x" + multihash.toString('hex'));
console.log("Address  : " + base58);
