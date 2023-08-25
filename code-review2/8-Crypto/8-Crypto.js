const crypto = 'password';
function getCrypto(crypto) {
    const cryptedPartOne = crypto.split('').slice(0, 4).reverse().join('');
    const [cryptedPartTwo] = crypto.split('').slice(0, 8).reverse();
    const [cryptedPartThree] = crypto.split('').slice(0, 6).reverse();
    const [cryptedPartFour] = crypto.split('').slice(0, 7).reverse();
    const [cryptedPartFive] = crypto.split('').slice(0, 5).reverse();
    const crypted = cryptedPartOne.concat(cryptedPartTwo, cryptedPartThree, cryptedPartFour, cryptedPartFive);
        return crypted;
};

function checkCrypto(crypted, crypto) {
    const decrypted = getCrypto(crypted);
    if (decrypted === crypto) {
        return true;
    } else {
        return false;
    }
}

console.log(getCrypto('password'));
console.log(checkCrypto('ssapdorw', 'password'));