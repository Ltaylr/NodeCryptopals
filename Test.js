const b64Conv = require('./ChallangeSet1/Base64');
const hexToBytes = require('./ChallangeSet1/HexToBytes');

const hex = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d';
const str1 = 'This is a test string';

console.log(b64Conv.encodeBase64(hexToBytes.hexToBytes(hex)));

