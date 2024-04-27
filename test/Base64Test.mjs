import { expect } from 'chai';
import { encodeBase64 } from '../ChallangeSet1/Base64.js';
import { hexToBytes, stringToBytes } from '../ChallangeSet1/ConvertToBytes.js';



describe('Base 64 encoding tests', () => {

    const hex = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d';
    const result = 'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t';
    
    const str2 = 'This is a test string for one = in the padding.'
    const str3 = 'This is a test string for two = in the padding'

    const res1 = encodeBase64(hexToBytes(hex));
    const res2 = encodeBase64(stringToBytes(str2));
    const res3 = encodeBase64(stringToBytes(str3));

    it('base64 test cpals string', () => {
        expect(res1)
        .to.equal(result);
    });

    it('base64 padding test 1', () => {
        expect(res2)
        .to.equal('VGhpcyBpcyBhIHRlc3Qgc3RyaW5nIGZvciBvbmUgPSBpbiB0aGUgcGFkZGluZy4=');
    });

    it('base64 padding test 2', () => {
        expect(res3)
        .to.equal('VGhpcyBpcyBhIHRlc3Qgc3RyaW5nIGZvciB0d28gPSBpbiB0aGUgcGFkZGluZw==');
    });
})

