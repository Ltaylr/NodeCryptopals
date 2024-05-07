const fs = require('fs');
const bts = require('./ConvertToBytes');
const frb = require('./FindReapeatingBlocks');


exports.challenge8 = () => {
    const aesEcbBytes = fs.readFileSync('./files/detectAesEcb.txt', 'ascii').split('\n').map((str) => bts.hexToBytes(str));
    let arrayOfRepeats = []
    let lineNum = 1;
    for(let bytes of aesEcbBytes){
        let repeats = frb.findRepeatingBlocks(bytes);
        if(repeats.length > 0){
            arrayOfRepeats.push([lineNum, repeats]);
        }
        lineNum++;
    }
    const sorted = arrayOfRepeats.sort(function(a,b) {return b.length - a.length});
    console.log(sorted);
}