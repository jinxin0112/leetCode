function getCommon(str1, str2) {
    let res = [];
    Array.prototype.forEach.call(str1, (item, index) => {
        if (item === str2.split('')[index] && index === res.length) {
            res.push(item);
        }
    })
    return res;
}
function longestCommonPrefix(arr) {
    if (arr.length===0){
        return '';
    }
    if(arr.length===1){
        return arr[0];
    }
    let res = arr.reduce((pre, cur, index, array) => {
        if (index === array.length - 1) return pre
        if (index === 0 || getCommon(cur, array[index + 1]).length < pre.length) {
            pre = getCommon(cur, array[index + 1])
        }
        return pre
    }, [])
    return res.join('')
}

console.log(longestCommonPrefix(['']));