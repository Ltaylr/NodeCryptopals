
const fs = require('fs');
const ctb = require('./ConvertToBytes');
const fqa = require('./FrequencyAnalysis');

const decode  = (bytes, key) =>
{
    console.log(key + ": " + fqa.decodeSingleKey(bytes, key));
    console.log("------------------------------------------------------------------");
}

const decodeTopThree = (byteArray, scores) =>
{
    decode(byteArray, scores[0][1]);
    decode(byteArray, scores[1][1]);
    decode(byteArray, scores[2][1]);
    
}
const byteArray = fs.readFileSync('./files/haystack.txt', 'utf8').split('\n').map((str) => ctb.hexToBytes(str));

const res = fqa.findEncodedString(byteArray);

decodeTopThree(byteArray[res[0][1]], res[0][0]);
decodeTopThree(byteArray[res[1][1]], res[1][0]);
decodeTopThree(byteArray[res[2][1]], res[2][0]);