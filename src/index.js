module.exports = function check(str, bracketsConfig) {
    const bracketsArray = [];
    bracketsConfig.forEach(el => {
        bracketsArray.push(el.join(''));
    });
    for (let i = 0; i < bracketsArray.length; i++) {
        if (str.includes(bracketsArray[i])) {
            str = str.replace(bracketsArray[i], '');
            i = -1;
        }
    }
    return str.length === 0;
}
