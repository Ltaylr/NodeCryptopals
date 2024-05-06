
exports.fixedXor = (bytes, key) => {
    let xor = [];
    for(let i = 0; i < bytes.length; i++)
    {
        xor.push(bytes[i] ^ key[i]);
    }
    return xor;
}

exports.repeatingXor = (bytes, key) => {

    let xor = [];
    for(let i = 0; i < bytes.length;)
    {
        for(let j = 0; j < key.length && i < bytes.length; j++)
        {
            xor.push(bytes[i] ^ key[j]);
            i++;
        }
    }
    return xor;
}