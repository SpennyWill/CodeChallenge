/*Step 1 DONE
Create a variable named input that is equal to any phrase you’d like. This variable will contain the text you want to translate into “whale talk”.
Step 2 Done
Whales only speak with the vowels, “a”, “e”, “i”, “o”, and “u”. Using these lowercase letters, create an array named vowels. This array will not be updated so be sure to choose the appropriate declaration keyword.
Note: The use of this array will be more apparent within the following steps.
Step 3 done
Create a variable named resultArray and set it equal to an empty array: []. This will serve as a place to store the vowels from the input string.
Step 4 done 
Create a loop to iterate through each letter of the input variable text. In a later step, we will compare each letter with our vowels array.
Step 5 done 
To check your work, log the iterator numbered position inside the for loop and run your code. This should count the number of characters in your input string.
Comment out this code when you’re ready to move on.
Step 6 done
Create a nested for loop inside of the for loop you just wrote. Make the inner loop iterate through the vowels array each time the outer loop runs.
This will enable you to check each letter of input against all the vowels elements during each iteration.
Step 7 done 
To check your work, log the iterator number positions inside the inner for loop and run your code. You should see 0 through 4 repeatedly because vowels is 5 elements long.
Step 8 done
Inside the second for loop, write a code block that compares the input letter to every letter in the vowels array.
Note: To check that everything is working properly, log letter matches to the console.
Step 9 Done
Now instead of just logging the letters, add them to the results array.
Note: To check your work use console.log() to print your resultArray. The letters you logged to the console in step 8 should be now included in your resultArray.
Step 10 Done
Whales double their e‘s and the u‘s in their language.
Write an if statement that checks if each letter in the input string is equal to 'e'. If so, use the .push() method to add input[i] to the resultArray.
Note: This statement belongs before the inner for loop block inside the outer for loop. This is because you only want to perform this check once for every letter in the input.
Step 11 Done
Next, you want to double the letter u.
Step 12 Done
At the bottom of the program, log the resultsArray to the console.
Step 13 Done
Currently, resultsArray outputs an array of characters. To produce proper whale language, we want to capitalize the array elements and put them together as one string.
Declare a variable resultString that joins our resultsArray into a single string and capitalizes all of it’s letters.
Step 14 Done
Run the program and sing the output out loud — you officially speak whale!
Note: To confirm, if you change the value of input to ‘turpentine and turtles’, the whale version would read: 'UUEEIEEAUUEE'.*/

let input = "turpentine and turtles";

const vowels = ['a', 'e', 'i', 'o', 'u']; 

let resultArray = []; 

for (let i = 0; i < input.length; i++) {
   const element = input[i];
   if (element === 'e') {
    resultArray.push(input[i]); 
   }
   if (element === 'u') {
    resultArray.push(input[i]); 
   }
      // console.log(i);
// this step is counting the number of characters in my input variable. This phrase is throwing me of "iterator numbered position", what does it mean?
   for (let j = 0; j < vowels.length; j++) {
      const whaleTranslation = vowels[j];
      //  console.log(j);
      if (element === whaleTranslation) {
      resultArray.push(vowels[j]);
      }
   }
}
let resultString = resultArray.join('').toUpperCase();
console.log(resultString);