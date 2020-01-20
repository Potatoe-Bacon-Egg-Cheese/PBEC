let d = new Date();
document.body.innerHTML = "<h1>Today's date is for your purpose" + d + "</h1>";
//
// alert("Hello, World!");

/*Make a program that filters a list of strings and returns a list with only your friends name in it.*/
const friends = ["Ryan", "Kieran", "Jason", "Yous"];
function friend(friends){
    return friends.filter(function (name){
        return name.length === 4;
    });
}
console.log(friend(friends));



/*Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:*/

function getTotalPrice(g) {
    return eval(g.reduce((total,product)=>{
        return total + (product.quantity * product.price)
    },0).toFixed(1))

}


let g =[
 { product: "Milk", quantity: 1, price: 1.50 },
 { product: "Cereals", quantity: 1, price: 2.50 }
 ];

console.log(getTotalPrice(g));

// Beginning of my JS crash course (Woohoo)
//Functions should do multiple things and can also take in arguments. Every function should have some kind of input, this is the first thing that should be give to a function.
//Example this is a simple function going to take in a name and returns hello followed by your name
//Name: "Faith"
//Return: Hello Faith
// function greeting() {
//     let name = prompt("This is your name");
//     let result = "hello" + " " + name; //String Concat
//     console.log(result);
// }
// greeting();

//How do arguments work in functions?

function sumNumbers(num1, num2){
    let result = num1 + num2;
    console.log(result);
}
sumNumbers(10, 10);
sumNumbers("Hello",  " Faith");

//while vs for loop

// let num = 0;
//
//  while(false) {
//     num += 1;
//     console.log(num);
// }

//or

// let num = 0;
// while(num < 100) {
//     num += 1;
//     console.log(num);
// }
//for loop
for (let num = 0; num <= 100; num++) {
    console.log(num);
}
//DataTypes
//Numbers, Boolean, Null, String, undefined let random;
// This is an object with key/value pairs in js Ex: let name = {first:"Jane", last:"Doe"};
// This is an array a list let groceries = ["apple", "banana"];

//Strings and Common methods
let fruit = "banana";
let moreFruits = "banana\napple";
console.log(fruit.length);
console.log(moreFruits);
console.log(fruit.indexOf("an"));
console.log(fruit.slice(2, 5));
//sliced from a up to 5 starting and including 2
console.log(fruit.replace("ban", "123"));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
//Array
let fru = ['banana', 'apple', 'orange'];
fru = ['banana', 'apple', 'orange'];
 console.log(fru[2]); //accessing values

fru[0] = "pear";
console.log(fru); //this changes values therefor banana is replaced it with pear

for(let i = 0; i < fru.length; i++){
    console.log(fru[i]);
}//this went through the array and printed the item out one at a time
//The next line will take an array and convert it to a string
console.log("to string", fru.toString());
//The next line will perform .join takes each item in the array and joins
console.log(fru.join(' * '));
//The next line will pop off the last item
console.log(fru.pop(), fru);
//push an item into the array
console.log(fru.push("blackberries"), fru);
let vegetables = ["asparagus", "tomato", "broccoli"];
let allGroceries =fru.concat(vegetables);//combining arrays expected output (6) ["pear", "apple", "blackberries", "asparagus", "tomato", "broccoli"}
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));//Including one but not up to gour
console.log(allGroceries.reverse());//Reverses the order
console.log(allGroceries.sort());//alphabetically returns an array

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 334, 321, 2];
console.log(someNumbers.sort(function(a,b) {return a-b}));//sort in ascending order
console.log(someNumbers.sort(function(a,b) {return b-a}));//sorted in descending order

let emptyArray = [];//empty array
for (let num = 0; num <= 10; num++) {//loop through and append to the array
    emptyArray.push(num);//the array gets pushed
}
console.log(emptyArray);

//Objects in JavaScript, Objects
let student;
student = {
    last: "Ga",
    firstName: "Faith",
    age: 33,
    height: 55,
    studentInfo: function () {
        return this.firstName + '\n' + "this is getting student info " + this.last + '\n' + this.age;
    }
};


 student.firstName = "New Value";//Change the value
console.log(student.firstName);
console.log(student.last);
// student.age++;//adding one to the age
console.log(student.age);
console.log(student.studentInfo());// added studentInfo function into the object array and simply called the function

//Conditionals, Control flows (if else)
//18-to 35 is my target demographic
//&&
//Or
// /condition1     //condition2
 let age = 33; //prompt("What is your age");
if (( age >= 18 ) && (age <= 35) ){
    status = "target demo";
    console.log(status);
    } else {
    status = "not my audience";
    console.log(status);
    }
//Switch statements make it an easy way to shorten if else statements
//differentiate between weekday vs weekend
//day 0 --> Sunday--->Weekend
//day 1 ---> Monday--->Weekday
//day 2 ---> Tuesday--->Weekday
//day 3 ---> Wednesday--->Weekday
//day 4 ---> Thursday--->Weekday
//day 5 ---> Friday--->Weekday
//day 6 ---> Saturday----Weekend

switch (0) {//whichever case I want to call on ()
    case 0:
        text = "Weekend";
        break;
    case 1:
        text = "Weekday";
        break;
    case 2:
        text = "Weekday";
        break;
    case 3:
        text = "Weekday";
        break;
    case 4:
        text = "Weekday";
        break;
    case 5:
        text = "Weekday";
        break;
    case 6:
        text = "Weekend";
        break;
    default:
        text = "weekday";
}
console.log(text);

//json file notes json is used to represent data javascript object notation it is mostly used for API's to carry information that's lightweight  and configuration it generally an array with objects inside of it.

//Here is where my challenge code starts


