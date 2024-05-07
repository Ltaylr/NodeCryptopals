//import { decodeBase64 } from "./Base64";
//import { hexToBytes  } from "./ConvertToBytes";
//import { hammingDistanceOfStrings } from "./HammingDistance";
//import { analyzeLetterFrequency } from "./FrequencyAnalysis";

const { getHammingDistanceOfByteArray } = require('./HammingDistance');

const stringToBytes = require('./ConvertToBytes').stringToBytes;
const analyzeLetterFrequency = require('./FrequencyAnalysis').analyzeLetterFrequency;
const getHammingDistanceOfStrings = require('./HammingDistance').getHammingDistanceOfStrings;


exports.guessKeySize = (fromSize, toSize, text) =>
{
    let minDistance =  Number.MAX_SAFE_INTEGER;
    let KeySizeArray = []

    for(let KEYSIZE = fromSize; KEYSIZE <= toSize; KEYSIZE++){
        let dis = 0;
        for(let i = 0; i < 5; i++){
            let str1 = text.substr(i*KEYSIZE, (i*KEYSIZE)+KEYSIZE);
            let str2 = text.substr((i*KEYSIZE)+KEYSIZE, ((i+1)*KEYSIZE)+KEYSIZE);
            dis+= getHammingDistanceOfStrings(str1, str2);
        }
        
        dis = (dis/(5*KEYSIZE));
        
        KeySizeArray.push([dis, KEYSIZE]);
    }
    const sorted = KeySizeArray.sort(function(a,b) {return a[0] - b[0]})
    return sorted.slice(0,1)
}

exports.breakTextIntoBlocks = (text, blockSize) =>
{
    const blocks = [];
    for(let i = 0; i < text.length; i+=blockSize){
        blocks.push(text.substr(i, blockSize));
    }
    
    return blocks;
}

exports.transposeBlocks = (blocks) =>
{
    const transposedBlocks = [];

    for(let i = 0; i < blocks[0].length; i++){
        let tBlock = '';
        //exclude last block, could be truncated
        for(let j = 0; j < blocks.length - 1; j++){
            tBlock+=blocks[j][i];
        }
        transposedBlocks.push(tBlock);
    }

    return transposedBlocks;
}

exports.findKey = (text) => {

    const keySizes = this.guessKeySize(2,42,text);
    const keys = []
    for(let i = 0; i < keySizes.length; i++){
        let len = keySizes[i][1];
        let blocks = this.breakTextIntoBlocks(text, len);
        let transposedBlocks = this.transposeBlocks(blocks);
        let key = [];
        for(let j = 0; j < transposedBlocks.length; j++){
            let block = transposedBlocks[j];
            const bytes = stringToBytes(block);
            const freqs = analyzeLetterFrequency(bytes);
            key.push(freqs[0][1]);
        }
        keys.push(key);
    }
    return keys;
}