arr = [1, 40, -5, 10, 0];
const arrCopy = [...arr];

function sortArray(arrCopy) {
    for(let i = 2; i < arrCopy.length; i++) {
        for(let j = 0; j < i; j++) {
            if(arrCopy[i] < arrCopy[j]) {
                [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
            }
        }
    }
    return arrCopy;
}

console.log(sortArray(arrCopy));
