'use strict';

//sources
//https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript for Exercise 1
//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript for Exercise 2



//Exercise 1;
// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
//
// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
//
//     Example:
// solution('XXI'); // should return 21
// Help:
//
//     Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
function solution(roman){
    let conversion = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1};

    return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + conversion[roman], 0);
}

console.log(solution('XXI'));//Should return 21
console.log(solution('I'));//Should return 1
console.log(solution('IV'));//Should return 4
console.log(solution('MMVIII'));//Should return 2008
console.log(solution('MDCLXVI'));//Should return 1666


//Exercise 2
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// example
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
    // TODO: Program me
    if (arr.length <= 1) { return arr; }

    let moved = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i-moved] === 0) {
            arr.splice(i - moved, 1); // if this operation is O(N), then full implementation has O(N^2)
            arr.push(0);
            moved++;
        }
    }

    return arr;
};

    console.log(moveZeros([1,2,0,1,0,1,0,3,0,1])); //Should display [1,2,1,1,3,1,0,0,0,0]


//Exercise 3
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//
//Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"


function spinWords(str){
    var arr = str.split(" ");
    var finalStr = "";


    for (var i = 0; i < arr.length; i++) {
        var word = arr[i];
        if (word.length < 5) {
            finalStr += word + " ";
        } else {
            for (var letter = word.length-1; letter >= 0; letter--) {
                finalStr += word[letter];
            }
            finalStr += " ";
        }
    }
    return finalStr.slice(0, finalStr.length-1);
}

console.log(spinWords("Welcome")); // Should return 'emocleW'
console.log(spinWords("Hey fellow warriors")) ;// Should return "Hey wollef sroirraw";