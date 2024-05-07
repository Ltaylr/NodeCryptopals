//const assert = require('assert');
import { expect } from 'chai';
import { fixedXor, repeatingXor } from '../ChallengeSet1/XorCiphers.js';
import { hexToBytes, bytesToHexString, stringToBytes } from  '../ChallengeSet1/ConvertToBytes.js';

describe("test for fixed xor section", () => {
    const str1 = '1c0111001f010100061a024b53535009181c';
    const str2 = '686974207468652062756c6c277320657965';

    const bytes1 = hexToBytes(str1);
    const bytes2 = hexToBytes(str2);

    const resultHexString = bytesToHexString(fixedXor(bytes1, bytes2));

    it('when str1 xor\'d against str2', () =>{
        expect(resultHexString)
        .to
        .equal('746865206b696420646f6e277420706c6179');
    })
})

describe("test for repeating xor section", () => {
    const msg = 'Burning \'em, if you ain\'t quick and nimble\nI go crazy when I hear a cymbal';
    const key = 'ICE';
    const expectedOutput = '0b3637272a2b2e63622c2e69692a23693a2a3c6324202d623d63343c2a26226324272765272a282b2f20430a652e2c652a3124333a653e2b2027630c692b20283165286326302e27282f';

    const bytes1 = stringToBytes(msg);
    const bytes2 = stringToBytes(key);

    const resultHexString = bytesToHexString(repeatingXor(bytes1, bytes2));

    it(`when msg: ${msg}\n xor\'d against key ${key}`, () =>{
        expect(resultHexString)
        .to
        .equal(expectedOutput);
    })
})