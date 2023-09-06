arr = [1, 40, -5, 10, 0];
const arrCopy = [...arr];

function sortArray(arrCopy) {
    for(let i = 0; i < arrCopy.length; i++) {
        for(let j = i + 1; j < arrCopy.length; j++) {
            if(arrCopy[i] > arrCopy[j]) {
                [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
            }
        }
    }
    return arrCopy;
}

console.log(sortArray(arrCopy));
