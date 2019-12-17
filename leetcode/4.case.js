function buddyStrings(a, b) {
    if (a === '' || b === '') { return false }
    let c = a;
    let len = a.length;
    a = a.split('');
    function dispatch(j) {
        if (j === len) return false
        let curj = a[j];
        for (let i = j + 1; i < a.length; i++) {
            let curi = a[i];
            a[i] = curj;
            a[j] = curi;
            if (a.join('') === b) {
                return true
            }
            a = c.split('');
        }
        return dispatch(j + 1)
    }
    return dispatch(0);
}

console.log(buddyStrings('aaaaaaabc', 'aaaaaaacb'));