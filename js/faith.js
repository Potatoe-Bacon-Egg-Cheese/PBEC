let d = new Date();
document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"
//
// alert("Hello, World!");

/**Make a program that filters a list of strings and returns a list with only your friends name in it.*/
const friends = ["Ryan", "Kieran", "Jason", "Yous"]
function friend(friends){
    return friends.filter(function (name){
        return name.length == 4;
    });
}
console.log(friend(friends));

/**Create a function that takes an object and returns the keys and values as separate arrays*/
// let obj = [
//     {
//         name: 'zach',
//         email: 'zach@codeup.com',
//         languages: ['javascript', 'bash']
//     },
//     {
//         name: 'ryan',
//         email: 'ryan@codeup.com',
//         languages: ['clojure', 'javascript']
//     },
//     {
//         name: 'luis',
//         email: 'luis@codeup.com',
//         languages: ['java', 'scala', 'php']
//     },
//     {
//         name: 'fernando',
//         email: 'fernando@codeup.com',
//         languages: ['java', 'php', 'sql']
//     },
//     {
//         name: 'justin',
//         email: 'justin@codeup.com',
//         languages: ['html', 'css', 'javascript', 'php']
//     }
// ];
// function keysAndValues(obj) {
//     return [Object.keys(obj), Object.values(obj)];
// }
// console.log(keysAndValues);

// function isTruthy(input) {
//     if(input){
//         return 1;
//     } else {
//         return 0;
//     }
// }

/**Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:*/

function getTotalPrice(g) {
    return eval(g.reduce((total,product)=>{
        return total + (product.quantity * product.price)
    },0).toFixed(1))

}


var g =[
 { product: "Milk", quantity: 1, price: 1.50 },
 { product: "Cereals", quantity: 1, price: 2.50 }
 ];

console.log(getTotalPrice(g));
