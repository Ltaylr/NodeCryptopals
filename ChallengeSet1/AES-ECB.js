
const aesjs = require('aes-js');
const fs = require('fs');
const b64 = require('./Base64');
const crypto = require('crypto');
const stringToBytes = require('./ConvertToBytes');

exports.decryptAES_ECB = (ciphertext, key, alg) => {
    var decipher = crypto.createDecipheriv(alg, key, null)
    var out = decipher.update(ciphertext, 'base64', 'utf-8')
    out += decipher.final('utf-8');
    return out;
}
// const encrypted = stringToBytes.stringToBytes(b64.decodeBase64(fs.readFileSync(
//     './files/aesEcbtest.txt', 'utf-8'
// )))
// console.log(encrypted.length);
// const key = Buffer.from("YELLOW SUBMARINE", "utf-8");
// const aesEcb = new aesjs.ModeOfOperation.ecb(key);
// const decryptedBytes = aesEcb.decrypt(encrypted);
// console.log(aesjs.utils.utf8.fromBytes(decryptedBytes));


