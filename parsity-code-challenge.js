// Problem 1 - Worth 4 Points
// Write a function called findSum that takes an array of numbers as an argument and finds the sum of that array of numbers and returns the sum as a number. For example:

//  findSum([2, 4, 6]);  // 12

const findSum = (array) => {
    const sum = array.reduce((a,b) => {
        return a + b; 
    },0); 
    return sum; 
}; 
findSum([2, 4, 6]); 

// Problem 2 - Worth 4 Points
// Write a function called findFrequency to find the MOST frequent item, and the LEAST frequent item in any given array of strings. It should return an object that looks like this: { most: 'a', least: 'd'}. Note, you can assume that findFrequency will always be called with an array of strings passed in as an argument. For example:

// findFrequency(['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd']); // { most: 'a', least: 'd' }
function findFrequency (array) {
    const duplicates = {}; 
        for (const value of array) {
            duplicates[value] = (duplicates[value] || 0) + 1; 
        }
            let dupValues = Object.keys(duplicates); 
                let mostKey = dupValues.reduce((a,b) => {
                        return duplicates[a] > duplicates[b] ? a : b; 
                } );
                let leastKey = dupValues.reduce((a,b) => {
                    return duplicates[a] < duplicates[b] ? a : b;
                } );

        
    return {most: mostKey, least: leastKey};

}; 
console.log(findFrequency(['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd']));


// Problem 3 - Worth 4 Points
// Write a function called isPalindrome that takes an argument as a string and returns true if that string is a palindrome and false if that string is not a palindrome. You can assume that all strings will be single words with no spaces. For example:

const isPalindrome = (word) => {
    const lowerCase = word.toLowerCase();
    const reversedWord = lowerCase.split('').reverse().join(''); 
    return (reversedWord === lowerCase); 
    };

console.log(isPalindrome('canal')); // false
console.log(isPalindrome('Ana')); // true


// Problem 4 - Worth 3 Points
// Write a function called largestPair that takes an array of integers and finds the pair of adjacent elements that has the largest product and return that product. For example:

largestPair([5, 1, 2, 3, 1, 4]); // 6
largestPair([9, 5, 10, 2, 24, -1, -48]) // 50

const largestPair = (numbers) => {
    const products = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        products.push(numbers[i] * numbers[i + 1])
    }
   
 
    return Math.max(...products);; 
 
 }
 console.log(largestPair([5, 1, 2, 3, 1, 4]));


// Problem 5 - Worth 3 Points
// Write a function called removeParenth that takes one argument (a string) which has parentheses (1 open and 1 close) and returns that same string, but without the parentheses and the text inside the parentheses. You can assume that the string is one word with no spaces and only 1 set of parentheses. For example:

const removeParenth = (target) => {
    const extract = /\([^)]+\)/;
    const result = target.replace(extract, ''); 
    return result; 
 }; 
 console.log(removeParenth('ido(not)liketocode'));  // 'idoliketocode'


// Problem 6 - Worth 2 Points
// Write a function called scoreScrabble which takes a string as an argument (a single word) and returns the word's scrabble score as a number. For reference, the following letters are the worth of the following points:

1 - a, e, i, o, u, l, n, r, s, t
2 - d, g
3 - b, c, m, p
4 - f, h, v, w, y
5 - k
8 - j, x
10 - q, z
Examples:

scoreScrabble('hello'); // 8
scoreScrabble('quiet'); // 14*/