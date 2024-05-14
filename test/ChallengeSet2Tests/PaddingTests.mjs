import { padText } from "../../ChallangeSet2/PKCS7Padding.js";
import { expect } from 'chai';
describe('test padding function', () => {
    it('pad test block size 8', () => {
        const str1 = 'This is a test string of length 34';

        expect(padText(str1, 8).length).to.equal(40);
        expect(padText(str1, 8)).to.equal( str1 + new Array(6+1).join(String.fromCharCode(4)));
    });
})