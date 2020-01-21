//Challenge age in days
//take age and multiply by 365(days in a year)

function ageInDays(){
let birthYear = prompt("What year were you born....Good friend?");//here you prompt on click
let ageInDays = (2020 - birthYear) * 365;//here the formula to figure out age in days
let h1 = document.createElement("h1");//creating an h1 element
let textAnswer = document.createTextNode('You are ' + ageInDays + ' days');//creating the text node
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove()

}







//Challenge 2

function generateCat() {
    let image = document.createElement('img');
    let div = document.getElementById("flex-cat-gen");
    image.src = "http://thecatapi.com/api/images/get?format";
    div.appendChild(image);
}







//Challenge 3
function rpsGame(yourChoice) {

    console.log(yourChoice);

    // let humanChoice, botChoice;

 let humanChoice = yourChoice.id;

   let  botChoice = numberToChoice(randToRpsInt());

    console.log('Computer choice:', botChoice);


    results = decideWinner(humanChoice, botChoice);// [0, 1] human          lost | bot won
    console.log(results);

     message = finalMessage(results);// {'message': 'You won', 'color':      'green'}
     console.log(message);


rpsFrontEnd =(yourChoice.id, botChoice, message);

}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {

    let rpsDatabase = {

        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}

    };



    let yourScore = rpsDatabase[yourChoice][computerChoice];

    let computerScore = rpsDatabase[computerChoice] [yourChoice];

    return [yourScore, computerScore];
}

        function finalMessage([yourScore, computerScore]) {

    if (yourScore === 0) {

        return {'message': 'Sorry, better luck next time', 'color':
                'red'};

    } else if (yourScore === 0.5) {

        return {'message': 'Tied!', 'color': 'yellow'};

    } else {

        return {'message': 'Congrats, you are the winner', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {

    let imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //removing images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('dic');
}

//    humanDiv.innerHTML = "<img src ='" + imagesDatabase[humanImageChoice] + " ' height=150 width=150 ">"
//         document.getElementById('flex-box-rps-div').appendChild(humanDiv);
//
// }




