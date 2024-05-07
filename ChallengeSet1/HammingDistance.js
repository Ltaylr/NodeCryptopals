const bytes = require('./ConvertToBytes');

exports.getHammingDistance = (byte1, byte2) =>
{
    let dis = 0;
    for(let i = 0; i < 8; i++)
    {
        dis += (byte1 & 1) ^ (byte2 & 1);
        byte1 >>= 1;
        byte2 >>= 1;
    }
    return dis;
}

exports.getHammingDistanceOfByteArray = (bytes1, bytes2) => {

    //assume they are the same length
    let dis = 0;

    for(let i = 0; i < bytes1.length; i++)
    {
        dis += this.getHammingDistance(bytes1[i], bytes2[i]);
    }

    return dis;
}

exports.getHammingDistanceOfStrings = (str1, str2) =>
{
    return this.getHammingDistanceOfByteArray(bytes.stringToBytes(str1), bytes.stringToBytes(str2));
}