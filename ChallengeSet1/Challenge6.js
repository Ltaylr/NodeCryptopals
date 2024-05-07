const fs = require('fs');
const vgc = require('./breakVigenereCipher');
const bts = require('./ConvertToBytes');
const rxr = require('./XorCiphers');

exports.challenge6 = () => {
    const b64text = fs.readFileSync('./files/base64.txt', 'ascii');
    const text = atob(b64text);
    const keys = vgc.findKey(text);
    for(let key of keys){

            
            let xor = rxr.repeatingXor(bts.stringToBytes(text), key);
            //console.log(Buffer.from(key, 'utf-16').toString())
            console.log(Buffer.from(key, 'utf-8').toString() + ":\n" + Buffer.from(xor, 'utf-8').toString());
            console.log('---------------------------------------------------------------------------------------');
    }
    return keys
}
