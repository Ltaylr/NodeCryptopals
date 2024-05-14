
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



