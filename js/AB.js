
//https://edabit.com/challenge/CCAEMfHcmrvSwA4KR
//A spoonerism is when the first letters / sounds of two words are transposed onto one another. Create a function that takes a two-word string and performs a spoonerism on the phrase.
const spoonerise = p => p
    .replace(/([^aeiou]*)(\w+ )([^aeiou]*)/, '$3$2$1')
console.log(spoonerise("Lanky Tank"));

//https://edabit.com/challenge/ACeSvyhYe7Qrtsk5R
//Create a function that takes in a sentence and returns the average length of each word in that sentence. Round your result to two decimal places.
function averageWordLength(str) {
    let arr = str.split(' ').map(x=>x.match(/\w/g).join('').length)
    return parseFloat((arr.reduce((a,b)=>a+b,0)/arr.length).toFixed(2))
}
console.log(averageWordLength("Dude, this is so awesome!"));

//https://edabit.com/challenge/FC36gN8o9ZMtsqgMu
//Four friends are playing a simple dice game (players are denoted p1, p2, p3 and p4). In each round, all players roll a pair of six-sided dice. The player with the lowest total score is removed. If the lowest score is shared by two or more players, the player in that group with the lowest score from their first die is removed. If the lowest score is still shared (i.e. two or more players have the same rolls in the same order), then all players roll again. This process continues until one player remains. Given an array of scores only (given in player order for each round), return the winning player.

function diceGame(scores) {
    let players = [1, 2, 3, 4];
    while (players.length >= 2) {
        let total = [];
        for (let i = 0; i < players.length; i++)
            total.push((([f, s]) => f + (f + s) * 100)(scores.shift()));

        const min = Math.min(...total);
        if (total.indexOf(min) === total.lastIndexOf(min))
            players.splice(total.indexOf(min), 1);
    }
    return `p${players[0]}`;
}
console.log(diceGame([[6, 2], [4, 3], [3, 4], [5, 4], [3, 5], [1, 5], [4, 3], [1, 5], [1, 5], [5, 6], [2, 2]]));

//https://edabit.com/challenge/tRx22rECqK4dTJTg8
//Create a function that takes a variable number of groups of items, and returns the number of ways the items can be arranged, with one item from each group. Order does not matter.
function combinations(items) {
    return [...arguments].reduce((acc,v) => v ? acc*v : acc+v, 1)
}
console.log(combinations(2, 3));

//https://edabit.com/challenge/EfC7rRKdAt8ugcCCT
//A word-chain is an array of words, where the next word is formed by changing exactly one letter from the previous word. We do not add or subtract letters from words, only change them.
//
// Create a function that returns true if an array is a word-chain and false otherwise.
function isWordChain(words) {
    return words.every((a, index) => {
        if (a.length !== words[0].length) {return false};
        if (index === 0) {return true};
        return a.split("")
            .filter((char, charIndex) => char !== words[index - 1][charIndex])
            .length === 1;
    })
}
console.log(isWordChain(["meal", "seal", "seat", "beat", "beet"]));
//https://edabit.com/challenge/5S5HBQW6zZp8eH3eL
//Someone has attempted to censor my strings by replacing every vowel with a *, l*k* th*s. Luckily, I've been able to find the vowels that were removed.
//
// Given a censored string and a string of the censored vowels, return the original uncensored string.
const uncensor = (str, vowels) => {
    const arr = vowels.split('');
    return str.replace(/\*/g, () => arr.shift());
};
console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));

