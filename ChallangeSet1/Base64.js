
/**
 * 
 * function to turn raw bytes into a base64 string; takes an array of bytes. 
 */
exports.encodeBase64 = (bytes) => { 

    const table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let base64String = '';
    let remainder = bytes.length % 3;
    let i = 0;
    for(i = 0; i < bytes.length - remainder; i+=3){

        let byte1 = bytes[i];
        let byte2 = (bytes.length > i+1) ? bytes[i+1] : 0; 
        let byte3 = (bytes.length > i+2) ? bytes[i+2] : 0;
        base64String += table[(byte1 >> 2) & 63];
        base64String += table[((byte1 & 3) << 4) | (byte2 >> 4)];
        base64String += table[((byte2 << 2) & 60) | (byte3 >> 6)];
        base64String += table[byte3 & 63];

    }

    if(remainder > 0)
    {
        //add padding
        if(remainder == 1)
        {
            let byte1 = bytes[i];
            base64String += table[(byte1 >> 2) & 63];
            base64String += table[((byte1 & 3) << 4)];
            base64String += "==";
        }
        else{
            let byte1 = bytes[i];
            let byte2 = bytes[i+1];
            base64String += table[(byte1 >> 2) & 63];
            base64String += table[((byte1 & 3) << 4) | (byte2 >> 4)];
            base64String += table[((byte2 << 2) & 60)];
            base64String += "=";
        }

    }

    return base64String;
}

exports.decodeBase64 = (bytes) => {

}

