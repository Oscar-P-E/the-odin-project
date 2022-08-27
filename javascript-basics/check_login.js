// Write the code which asks for a login with prompt.
//
// If the visitor enters "Admin", then prompt for a password, if the input is
// an empty line or Esc – show “Canceled”, if it’s another string – then show
// “I don’t know you”.
//
// The password is checked as follows:
//
//     If it equals “TheMaster”, then show “Welcome!”,
//     Another string – show “Wrong password”,
//     For an empty string or cancelled input, show “Canceled”

function loginPrompt() {
    let user = prompt("Who's there?");
    if (user === null || user === "") {
        return "Canceled";
    }
    if (user !== "Admin") {
        return "I don't know you";
    }
    let password = prompt("Password?");
    if (password === null || password === "") {
        return "Canceled";
    }
    if (password !== "TheMaster") {
        return "Wrong password";
    }
    return "Welcome!";
}

alert(loginPrompt());

