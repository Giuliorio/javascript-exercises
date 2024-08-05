const palindromes = function (word) {
    const alphabet = 'qwertyuiopasdfghjklzxcvbnm1234567890'
    const cleanedString = [...word.toLowerCase()]
        .filter(char => alphabet.includes(char))
        .join('')
    const reversed = [...cleanedString].reverse().join('')

    return cleanedString === reversed
}
// Do not edit below this line
module.exports = palindromes;
