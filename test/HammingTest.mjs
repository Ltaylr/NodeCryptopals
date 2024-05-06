import { getHammingDistance, getHammingDistanceOfByteArray } from "../ChallengeSet1/HammingDistance.js";
import { stringToBytes } from '../ChallengeSet1/ConvertToBytes.js';
import { expect } from 'chai';

describe('hamming distance tests, single byte', () =>
{
    it('hamming distance of 4 and 7', () => {
        expect(getHammingDistance(4, 7))
        .to
        .equal(2)
    })

    it('hamming distance of 212 and 70', () => {
        expect(getHammingDistance(212, 70))
        .to
        .equal(3)
    })

    it('hamming distance of 212 and 70', () => {
        expect(getHammingDistance(217, 173))
        .to
        .equal(4)
    })
})

describe('hamming distance of two strings', ()=>{
    const str1 = 'this is a test';
    const str2 = 'wokka wokka!!!';

    const b1 = stringToBytes(str1);
    const b2 = stringToBytes(str2);

    it("hamming distance of str1 equals str2", () => {
        expect(getHammingDistanceOfByteArray(b1, b2))
        .to.equal(37);
    })

})