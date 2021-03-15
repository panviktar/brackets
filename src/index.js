module.exports = function check(str, bracketsConfig) {
    let bracketsArr = [];
    bracketsConfig.forEach(el => {
        bracketsArr.push(el.join(''));
    });
    for (let i = 0; i < bracketsArr.length; i++) {
        if (str.includes(bracketsArr[i])) {
            str = str.replace(bracketsArr[i], '');
            i = -1;
        }
    }
    return str.length === 0;
}
