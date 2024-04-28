import {analyzeLetterFrequency, decodeSingleKey, findEncodedString} from '../ChallangeSet1/FrequencyAnalysis.js'
import { expect } from 'chai';
import { hexToBytes, stringToBytes } from '../ChallangeSet1/ConvertToBytes.js';
import fs from 'fs';

describe('frequency analysis tests', () => {
    const hexString = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736';
    const byteArray = hexToBytes(hexString);
    const decoded = 'Cooking MC\'s like a pound of bacon';

    it('freqAnalysis, single byte', () =>{
        
        const scores = analyzeLetterFrequency(byteArray);
        //console.log(scores);

        //frequency analysis is not precise, but we should expect answer to 
        //be in the top three or so. 
        const str1 = decodeSingleKey(byteArray, scores[0][1]);
        const str2 = decodeSingleKey(byteArray, scores[2][1]);
        const str3 = decodeSingleKey(byteArray, scores[4][1]);
        expect(decoded === str1 || decoded === str2 || decoded === str3)
        .to.be.true;
    })

    it('feqAnalysis, haystack', () => {
        
        const str = 'Now that the party is jumping\n5'
        const decode  = (bytes, key) =>
        {
            return decodeSingleKey(bytes, key)
        }

        const decodeTopThree = (byteArray, scores) =>
        {
            return [decode(byteArray, scores[0][1]),
            decode(byteArray, scores[1][1]),
            decode(byteArray, scores[2][1])]

        }
        const byteArray = fs.readFileSync('./files/haystack.txt', 'utf8').split('\n').map((str) => hexToBytes(str));

        const res = findEncodedString(byteArray);

        const a = decodeTopThree(byteArray[res[0][1]], res[0][0]);
        const b = decodeTopThree(byteArray[res[1][1]], res[1][0]);
        const c = decodeTopThree(byteArray[res[2][1]], res[2][0]);

        expect(
            a.includes(str) || b.includes(str) || c.includes(str)
        ).to.be.true;
    })
});