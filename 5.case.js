function buddyStrings(a, b) {
    if (a === b) {
        let obj = {};
        for (let i = 0; i < a.length; i++) {
            if (obj[a[i]]) {
                return true
            } else {
                obj[a[i]] = true;
            }
        }
        return false;
    } else {
        let arr = Array.prototype.reduce.call(a, (prev, cur, index) => {
            if (cur != b[index]) {
                prev.push(index);
            }
            return prev
        }, [])
        if (arr.length !== 2) {
            return false
        } else {
            let [fir, sed] = arr;
            let cur = a[fir];
            a = a.split('');
            a[fir] = a[sed];
            a[sed] = cur;
            return a.join('') === b;
        }
    }
}

console.log(buddyStrings('aaaaaaabc', 'aaaaaaacb'));