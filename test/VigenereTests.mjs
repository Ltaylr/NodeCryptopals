
import { readFileSync } from 'fs';
import { expect } from 'chai'
import {findKey} from '../ChallengeSet1/breakVigenereCipher.js';


describe('breaking Vigenere cipher', () =>{
    const b64text = readFileSync('./files/base64.txt', 'ascii');
    const text = atob(b64text);
    const keys = findKey(text);
    it('Finding correct key', () => {
        expect(Buffer.from(keys[0], 'utf-8').toString()).to.be.equal('Terminator X: Bring the noise');
    });
});
    
    
