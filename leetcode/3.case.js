function buddyStrings(a, b) {
    if (a === '' || b === '') { return false }
    let c = a;
    a = a.split('');
    let len = a.length;
    for (let j = 0; j < len; j++) {
        let curj = a[j];
        for (let i = j + 1; i < len; i++) {
            let curi = a[i];
            a[i] = curj;
            a[j] = curi;
            if (a.join('') === b) {
                return true
            }
            a = c.split('');
        }
    }
    return false
}