// Rewrite using the ternary operator
// let result;
//
// if (aV + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

let result = (a + b < 4) ? 'Below' : 'Over';

// Rewrite using multiple ternary oeprators:
// let message;
//
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// } 

let message = (login === "Employee") ? "Hello"
    : (login === "Director") ? "Greetings"
    : (login === "") ? "No login"
    : "";



