const crypto = 'password';
function getCrypto(crypto) {
    const decryptedPartOne = crypto.split('').slice(0, 4).reverse().join('');
    const decryptedPartTwo = crypto.split('').slice(4, 8).reverse().join('');
    const decrypted = decryptedPartOne.concat(decryptedPartTwo);
        return decrypted; 
};

const checkCrypto = (decrypted, crypto) => (decrypted === 'ssapdrow' && crypto === 'password') ?? false;

console.log(getCrypto(crypto));
console.log(checkCrypto('ssapdrow', 'password'));