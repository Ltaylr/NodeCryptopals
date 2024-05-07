const fs = require('fs');

const c7 = require('./ChallengeSet1/AES-ECB');
const c6 = require('./ChallengeSet1/Challenge6');
c6.challenge6();
const msg = c7.decryptAES_ECB(fs.readFileSync('./files/aesEcbTest.txt', 'utf-8'), 'YELLOW SUBMARINE', 'aes-128-ecb');
console.log(msg);
