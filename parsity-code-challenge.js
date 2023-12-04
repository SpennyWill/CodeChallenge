const findSum = function(array) {
    const sum = array.reduce((a,b) => {
        return a + b; 
    },0); 
    return sum; 
  };
  
  const findFrequency = function(array) {
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
  
  const isPalindrome = function(str) {
    const lowerCase = word.toLowerCase();
    const reversedWord = lowerCase.split('').reverse().join(''); 
    return (reversedWord === lowerCase); 
  };
  
  const largestPair = function(array) {
    const products = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        products.push(numbers[i] * numbers[i + 1])
    }
   
 
    return Math.max(...products);; 
  };
  
  const removeParenth = function(str) {
    const extract = /\([^)]+\)/;
    const result = target.replace(extract, ''); 
    return result; 
  };
  
  const scoreScrabble = function(str) {
    const values = {
        1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
        2: ['d', 'g'],
        3: ['b', 'c', 'm', 'p'],
        4: ['f', 'h', 'v', 'w', 'y'],
        5: ['k'],
        8: ['j', 'x'],
        10: ['q', 'z']
    };
    let wordScore = 0; 
    
        for (let i = 0; i < str.length; i++) {
            const lowerCase = str[i].toLowerCase(); 
            for (const score in values) {
             if (values[score].includes(lowerCase)) {
               wordScore += parseInt(score);
            }
          }
        }
    return wordScore; 
  };
