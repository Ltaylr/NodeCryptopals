
exports.padText = (text, blockSize) =>{
    const remainder = text.length % blockSize;

    text += new Array(blockSize - remainder + 1).join(String.fromCharCode(4));
    return text;
}