
exports.checkIfBytesMatch = (a, b) => {

    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true; 
}
exports.checkBlockSizeForRepeats = (bytes, blockSize) =>
{
    const blocks = [];
    for(let i = 0; i < bytes.length; i+=blockSize){
        let block1 = bytes.slice(i, i+blockSize);
        let block = [block1];
        for(let j = i+blockSize; j < bytes.length; j+=blockSize){
            let block2 = bytes.slice(j, j+blockSize);
            if(this.checkIfBytesMatch(block1, block2)){
                block.push(j);
            }
        }
        if(block.length > 1){
            blocks.push(block);
        }
    }
    return blocks
}
exports.findRepeatingBlocks = (bytes) =>{

    let repeats = [];
    for(let blockSize = 4; blockSize < bytes.length / 2; blockSize++){
        let blocks = this.checkBlockSizeForRepeats(bytes, blockSize);
        if(blocks.length > 0){
            repeats.push(blocks);
        }
    }
    return repeats;
}