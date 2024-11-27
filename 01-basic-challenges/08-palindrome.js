// function isPalindrome(str) {
//     const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     const reversedStr = formattedStr.split('').reverse().join('');
//     return formattedStr === reversedStr
// }

// const reverseString = require("./01-basic-challenges/07-reverse-string");

function isPalindrome(str) {
    const formattedStr = removeNoneAlphaNumeric(str.toLowerCase());
    const reversedStr = reverseString(str);
    return formattedStr === reversedStr;
 }

function removeNoneAlphaNumeric(str) {
    let formattedStr = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if(isAlphaNumeric(char)){
            formattedStr += char
        }
    }
    return formattedStr
 }

function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);
    return (
        (code >= 48 && code <= 57) || // Number 0-9
        (code >= 97 && code <= 122) // Lowercase a-z
    )
}

function reverseString(str) {
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

isPalindrome('racecar');