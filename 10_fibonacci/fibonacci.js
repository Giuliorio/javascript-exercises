const fibonacci = function(n) {
    n = Number(n)
    if (n === 0) return 0
    if (n < 0) return 'OOPS'
    const sequence = [1, 1]
    if (sequence.len === n - 1) return sequence[n - 1]
    for (let i = 0; i < n - 1; i++) {
        const len = sequence.length
        sequence.push(sequence[len - 1] + sequence[len - 2])
    }
    return sequence[n - 1]
};

// Do not edit below this line
module.exports = fibonacci;
