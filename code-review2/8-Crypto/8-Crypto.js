const crypto = 'password';
function getCrypto(crypto) {
    const decrypted = crypto.split('').reverse().join('');
    return decrypted; 
};

function checkCrypto(decrypted, crypto) {
    if(decrypted === 'drowssap' && crypto === 'password') {
        return true;
    } else {
        return false;
    }
}

console.log(getCrypto(crypto));
console.log(checkCrypto('drowssap', 'password'));