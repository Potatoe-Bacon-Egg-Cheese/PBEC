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
