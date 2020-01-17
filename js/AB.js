
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