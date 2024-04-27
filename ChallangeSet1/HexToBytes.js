
exports.hexToBytes = (hexString) =>
{
    let bytes = [];
    for(let i = 0; i < hexString.length; i+=2){
        bytes.push(parseInt(hexString.substr(i, 2), 16));
    }
    return bytes;
}

exports.bytesToHexString = (bytes) => {
    return Array.from(bytes, (byte) => {
        return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('');
}