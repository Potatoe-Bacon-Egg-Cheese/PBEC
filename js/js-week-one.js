'use strict';



//sources
//https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
//https://www.codewars.com/kata/550498447451fbbd7600041c
//https://www.codewars.com/kata/523a86aa4230ebb5420001e1

//Exercise 1
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
//
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
//
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
//
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

function anagrams(word, words) {
    return words.filter(function(x){
        if (x.length === word.length) {
            if (x.split("").sort().join("").toLowerCase().includes(word.split("").sort().join("").toLowerCase())) {
                return x;
            }
        }
    });
    //return another list with all of the matching words
    //or return an empty list if there are none
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));


// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
//
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
//
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []


//Exercise 2
// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
//
//     Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

// comp(a, b) returns true because in b 121 is the square of 11,
// 14641 is the square of 121, 20736 the square of 144,
// 361 the square of 19, 25921 the square of 161, and so on.
// It gets obvious if we write b's elements in terms of squares:
//
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

// Invalid arrays
// If we change the first number to something else, comp may not return true anymore:
//
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.
//
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.



const comp = (array1, array2) => {
    if (!array1 || !array2 || array1.length !== array2.length) return false;
    return array1.map(x => x * x).sort().toString() === array2.sort().toString();
};


console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]), true);
console.log(comp());
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[132, 14641, 20736, 361, 25921, 361, 20736, 361]))
