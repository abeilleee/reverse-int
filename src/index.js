module.exports = function reverse (n) {
    let res = parseInt(String(n).split('').reverse().join(''));
    return Math.abs(res);
}
