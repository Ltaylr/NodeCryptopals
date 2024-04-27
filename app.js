
exports.fixedXor = (bytes, key) => {

    let xor = [];

    for(let i = 0; i < bytes.length; i++)
    {
        xor.push(bytes[i] ^ key[i]);
    }

    return xor;
}