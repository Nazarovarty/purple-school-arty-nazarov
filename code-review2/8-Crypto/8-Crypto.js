const crypto = 'password';
const getCrypto = (crypto) => {
    const cryptoCopy = [...crypto];
    const midCrypto = Math.floor(cryptoCopy.length/2);
    const firstPartCrypto = cryptoCopy.slice(0, midCrypto).reverse();
    const secondPartCrypto = cryptoCopy.slice(midCrypto);
    const secondPartLength = secondPartCrypto.length;
    [secondPartCrypto[0], secondPartCrypto[secondPartLength - 1]] = [secondPartCrypto[secondPartLength - 1], secondPartCrypto[0]];

    return [...firstPartCrypto, ...secondPartCrypto].join('');
}

const checkCrypto = (crypted, crypto) => {
    return getCrypto(crypto) === crypted;
}

console.log(getCrypto('password'));
console.log(checkCrypto('ssapdorw', 'password'));

