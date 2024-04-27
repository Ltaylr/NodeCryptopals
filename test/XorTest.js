const assert = require('assert');
import('chai').expect;
const fixedXor = require('../ChallangeSet1/FixedXor');
const hexToBytes = require('../ChallangeSet1/HexToBytes');

describe("test for fixed xor section", () => {
    const str1 = '1c0111001f010100061a024b53535009181c';
    const str2 = '686974207468652062756c6c277320657965';

    const bytes1 = hexToBytes.hexToBytes(str1);
    const bytes2 = hexToBytes.hexToBytes(str2);

    const resultHexString = hexToBytes.bytesToHexString(fixedXor.fixedXor(bytes1, bytes2));

    console.log(`str1: ${str1}`);
    console.log(`str2: ${str2}`);
    console.log(`result: ${resultHexString}`);
    it('when str1 xor\'d against str2', () =>{
        expect(resultHexString)
        .to
        .equal('746865206b696420646f6e277420706c6179');
    })
})