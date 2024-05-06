//import { decodeBase64 } from "./Base64";
//import { hexToBytes  } from "./ConvertToBytes";
//import { hammingDistanceOfStrings } from "./HammingDistance";
//import { analyzeLetterFrequency } from "./FrequencyAnalysis";

const stringToBytes = require('./ConvertToBytes').stringToBytes;
const analyzeLetterFrequency = require('./FrequencyAnalysis').analyzeLetterFrequency;
const hammingDistanceOfStrings = require('./HammingDistance').hammingDistanceOfStrings;


exports.guessKeySize = (fromSize, toSize, text) =>
{
    let minDistance =  Number.MAX_SAFE_INTEGER;
    let KeySizeArray = []

    for(let KEYSIZE = fromSize; KEYSIZE <= toSize; KEYSIZE++){
        let str1 = text.substr(0, KEYSIZE);
        let str2 = text.substr(KEYSIZE, KEYSIZE);
        let dis = hammingDistanceOfStrings(str1, str2);
        
        KeySizeArray.push([dis, KEYSIZE]);
    }
    const sorted = KeySizeArray.sort(function(a,b) {return b[0] - a[0]})
    return sorted.slice(0,3)
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

    const keySizes = this.guessKeySize(text);
    const keys = []
    for(let keySize in keySizes){
        let blocks = this.breakTextIntoBlocks(text);
        let transposedBlocks = this.transposeBlocks(blocks);
        let key = '';
        for(let block in transposedBlocks){
            key += analyzeLetterFrequency(stringToBytes(block))[1];
        }
        keys.push(key);
    }
    return keys;
}