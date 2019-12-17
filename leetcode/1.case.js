function getCommon(arr) {
    let res = '';
    for (let j = 0; j < arr[0].length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].slice(j, j + 1) != arr[0].slice(j, j + 1)) {
                return res;
            }
            if (i == arr.length - 1) {
                res += arr[0].slice(j, j + 1)
            }
        }
    }
    return res;
}

console.log(getCommon(['flower', 'flow', 'flight']));
console.log(getCommon(['dog', 'car', 'racecar']));