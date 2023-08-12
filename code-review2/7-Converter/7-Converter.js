const sumMoney = 1000;
const currency = 'eur';
const targetCurrency = 'руб';

function convertCurrency(sumMoney, currency, targetCurrency) {
const from$ToRub = (sumMoney, rateUSD = 92) => sumMoney * rateUSD;
const fromRubTo$ = (sumMoney, rateUSD = 92) => sumMoney / rateUSD;
const fromEuroToRub = (sumMoney, rateEuro = 100) => sumMoney * rateEuro;
const fromRubToEuro = (sumMoney, rateEuro = 100) => sumMoney / rateEuro;
const fromYenToRub = (sumMoney, rateYen = 0.64) => sumMoney * rateYen;
const fromRubToYen = (sumMoney, rateYen = 0.64) => sumMoney / rateYen;
    if(currency === 'руб' && targetCurrency === '$') {
        return fromRubTo$(sumMoney);
    } 
    if(currency === '$' && targetCurrency === 'руб') {
        return from$ToRub(sumMoney);
    } 
    if(currency === 'руб' && targetCurrency === 'eur') {
        return fromEuroToRub(sumMoney);
    }
    if(currency === 'eur' && targetCurrency === 'руб') {
        return fromRubToEuro(sumMoney);
    }
    if(currency === 'yen' && targetCurrency === 'руб') {
        return fromYenToRub(sumMoney);
    }
    if(currency === 'руб' && targetCurrency === 'yen') {
        return fromRubToYen(sumMoney);
    } else {
        return null;
    }
}

console.log(convertCurrency(1000, '$', 'руб'))