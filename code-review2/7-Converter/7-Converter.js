const sumMoney = 1000;
const currency = '$';
const targetCurrency = 'руб';

function convertCurrency(sumMoney, currency, targetCurrency) {
    const from$ToRub = (sumMoney, rateUSD = 96) => sumMoney * rateUSD;
    const fromRubTo$ = (sumMoney, rateUSD = 96) => sumMoney / rateUSD;
    const fromEuroToRub = (sumMoney, rateEuro = 104) => sumMoney * rateEuro;
    const fromRubToEuro = (sumMoney, rateEuro = 104) => sumMoney / rateEuro;
    const fromYenToRub = (sumMoney, rateYen = 0.66) => sumMoney * rateYen;
    const fromRubToYen = (sumMoney, rateYen = 0.66) => sumMoney / rateYen;

    switch(true) {
        case(currency === 'руб' && targetCurrency === '$') : 
            return fromRubTo$(sumMoney);
        case(currency === '$' && targetCurrency === 'руб') : 
            return from$ToRub(sumMoney);
        case(currency === 'руб' && targetCurrency === 'eur') : 
            return fromRubToEuro(sumMoney);
        case(currency === 'eur' && targetCurrency === 'руб') : 
            return fromEuroToRub(sumMoney);
        case(currency === 'yen' && targetCurrency === 'руб') : 
            return fromYenToRub(sumMoney);
        case(currency === 'руб' && targetCurrency === 'yen') : 
            return fromRubToYen(sumMoney);
        default: 
            return null;
    }
}

console.log(convertCurrency(1000, '$', 'руб'));