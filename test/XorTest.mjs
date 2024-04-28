//const assert = require('assert');
import { expect } from 'chai';
import { fixedXor } from '../ChallangeSet1/FixedXor.js';
import { hexToBytes, bytesToHexString } from  '../ChallangeSet1/ConvertToBytes.js';

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