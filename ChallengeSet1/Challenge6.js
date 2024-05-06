const fs = require('fs');
const vgc = require('./breakVigenereCipher');
const b64 = require('./Base64');

exports.challenge6 = () => {
    const b64text = fs.readFileSync('../files/base64.txt', 'utf8');
    const text = b64.decodeBase64(b64text);
    const keys = vgc.findKey(text);
    return keys
}
console.log(keys);