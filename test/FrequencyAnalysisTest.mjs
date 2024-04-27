import {analyzeLetterFrequency, decodeSingleKey} from '../ChallangeSet1/FrequencyAnalysis.js'
import { expect } from 'chai';
import { hexToBytes, stringToBytes } from '../ChallangeSet1/ConvertToBytes.js';

describe('frequency analysis tests', () => {
    const hexString = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736';
    const byteArray = hexToBytes(hexString);
    const decoded = 'Cooking MC\'s like a pound of bacon';

    it('freqAnalysis, single byte', () =>{
        
        const scores = analyzeLetterFrequency(byteArray);
        //console.log(scores);
        const str1 = decodeSingleKey(byteArray, scores[0][1]);
        const str2 = decodeSingleKey(byteArray, scores[2][1]);
        const str3 = decodeSingleKey(byteArray, scores[4][1]);
        expect(decoded === str1 || decoded === str2 || decoded === str3)
        .to.be.true;
    })
});