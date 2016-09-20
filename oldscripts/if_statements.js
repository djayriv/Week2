

// &&
// ||

//Challenge:
//Set up a var with bankAccount and a var with debt.
//Also set up a difference var.
//Do some logic to show whether or not you will pay off your debt or prints out a message if you have extra money.

var bankAccount = 80
var debt = 90
var difference = bankAccount - debt;

console.log("I have $ " + bankAccount + " in my account, and the bar tender wants: $" + debt);

if (bankAccount > debt){
    console.log("Money Ahead");
} else {
    console.log("Owe Money");
}

