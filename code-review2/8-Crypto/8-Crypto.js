const crypto = 'password';
function getCrypto(crypto) {
    const toSplit = crypto.split('');
    const cryptedPartOne = toSplit.slice(0, 4).reverse().join('');
    const [cryptedPartTwo] = toSplit.slice(0, 8).reverse();
    const [cryptedPartThree] = toSplit.slice(0, 6).reverse();
    const [cryptedPartFour] = toSplit.slice(0, 7).reverse();
    const [cryptedPartFive] = toSplit.slice(0, 5).reverse();
    const crypted = cryptedPartOne.concat(cryptedPartTwo, cryptedPartThree, cryptedPartFour, cryptedPartFive);
        return crypted;
};

const checkCrypto = (crypted, crypto) => {
    return getCrypto(crypto) === crypted;
}

console.log(getCrypto('password'));
console.log(checkCrypto('ssapdorw', 'password'));