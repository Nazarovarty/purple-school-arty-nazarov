arr = [1, 40, -5, 10, 0];

function sortArray(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length;j++) {
            if(arr[i] < arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}

console.log(sortArray(arr));