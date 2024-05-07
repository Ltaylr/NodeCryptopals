

const frequencyTable = (c) => {
    switch(c){
    case 'E' : return 12.02;
    case 'T': return 9.10;
    case 'A': return 8.12;
    case 'O': return 7.68;
    case 'I': return 7.31;
    case 'N': return 6.95;
    case 'S': return 6.28;
    case 'R': return 6.02;
    case 'H': return 5.92;
    case 'D': return 4.32;
    case 'L': return 3.98;
    case 'U': return 2.88;
    case 'C': return 2.71;
    case 'M': return 2.61;
    case 'F': return 2.30;
    case 'Y': return 2.11;
    case 'W': return 2.09;
    case 'G': return 2.03;
    case 'P': return 1.82;
    case 'B': return 1.49;
    case 'V': return 1.11;
    case 'K': return 0.69;
    case 'X': return 0.17;
    case 'Q': return 0.11;
    case 'J': return 0.10;
    case 'Z': return 0.07;
    case 'e': return 12.02;
    case 't': return 9.10;
    case 'a': return 8.12;
    case 'o': return 7.68;
    case 'i': return 7.31;
    case 'n': return 6.95;
    case 's': return 6.28;
    case 'r': return 6.02;
    case 'h': return 5.92;
    case 'd': return 4.32;
    case 'l': return 3.98;
    case 'u': return 2.88;
    case 'c': return 2.71;
    case 'm': return 2.61;
    case 'f': return 2.30;
    case 'y': return 2.11;
    case 'w': return 2.09;
    case 'g': return 2.03;
    case 'p': return 1.82;
    case 'b': return 1.49;
    case 'v': return 1.11;
    case 'k': return 0.69;
    case 'x': return 0.17;
    case 'q': return 0.11;
    case 'j': return 0.10;
    case 'z': return 0.07;
    case ' ': return 20.0;
    default: return 0;
    }
    }

const scoreKey = (bytes, key) => {
    let sum = 0;

    for(let i = 0; i < bytes.length; i++)
    {
        const c = (bytes[i] ^ key);
        const k = String.fromCharCode(c);
        const score = frequencyTable(k);
        sum += score;
    }

    return sum;
}
exports.decodeSingleKey = (bytes, key) =>
{
    let decodedString = '';
    for(let i = 0; i < bytes.length; i++)
    {
        const c = (bytes[i] ^ key);
        const k = String.fromCharCode(c);
        decodedString += k;
    }
    return decodedString;
}

exports.analyzeLetterFrequency = (bytes) =>
{
    //let table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';//abcdefghijklmnopqrstuvwxyz0123456789';
    let scores = [];
    for(let i = 0; i < 256; i++)
    {
        scores.push([scoreKey(bytes, i), i]);
    }
    const sorted = scores.sort(function(a,b) {return b[0] - a[0]})
    return sorted;
}

exports.findEncodedString = (byteArray) => {

    const scoreList = []
    for(let i = 0; i < byteArray.length; i++)
    {
        let scores = this.analyzeLetterFrequency(byteArray[i]);
        scoreList.push([scores, i]);
    }
    const sorted = scoreList.sort(function(a,b) {return b[0][0][0] - a[0][0][0]});
    return sorted;
}

