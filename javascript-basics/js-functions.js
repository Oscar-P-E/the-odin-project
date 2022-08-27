// Write a function called add7 that takes one number and
// returns that number + 7.

// function add7() {
//     let number1 = prompt("Enter a number");
//     return (Number(number1) + 7);
// }
//
// alert(add7());



// Write a function called multiply that takes
// 2 numbers and returns their product.

// function multiply() {
//     let number1 = prompt("Enter number 1");
//     let number2 = prompt("Enter number 2");
//
//     return (Number(number1) * Number(number2));
// }
//
// alert(multiply());



// Write a function called capitalize that takes a string and returns
// that string with only the first letter capitalized. Make sure that
// it can take strings that are lowercase, UPPERCASE or BoTh.

// let userString = prompt("Write a few words here");
// let anotherString = "some more words";
//
// function capitalize(str) {
//     return str
//         .split(" ")
//         .map(element => {
//             return element.charAt(0).toUpperCase() +
//                    element.slice(1).toLowerCase();
//         })
//         .join(" ");
// }
//
// alert(capitalize(userString));
// alert(capitalize(anotherString));
//


// Write a function called lastLetter that takes a string and returns
// the very last letter of that string:
// - lastLetter("abcd") should return "d"

let userString = prompt("Write a few words here");

function lastLetter(str) {
    return str.charAt(str.length - 1);
}

alert(lastLetter(userString));
