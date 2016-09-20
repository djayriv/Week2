//  function greetings(name) {
//    console.log("Weekend is near o.O" , name);
//  } 

//  greetings("Jay")

//  function helloWorld(name) {
//    console.log("Hello" , name);
//  }

//  helloWorld("it is Jay")

// function myFunction(a, b) {
//     console.log(a+b);
// }

// myFunction(3, 4);
// myFunction(6, 8);

function add(num1 , num2){
  return num1 + num2 ;
}

// console.log(add(78 , 50));

//Write a function that returns true if  
//the number passed in is even, false otherwise

// function isEven(num) {
//   return num % 2 == 0; 
// }
// var result = isEven(46);
// console.log(result ? "Even" : "Odd");

// Write a minimum function that takes two numbers and returns the smaller of the two.

// function lessThan(num1 , num2) {
//   if(num1 < num2){
//     console.log(num1);
//   } else {
//     console.log(num2);
//   }
// }

// lessThan(2 , 5);

//another solution:

// function lessThan(num1 , num2) {
//   if(num1 < num2){
//     return num1;
//   } else {
//     return num2;
//   }
// }

// var minProblem = lessThan(4 , 5);
// console.log(minProblem);

//write an function that takes in an array of numbers
//have it return the avearage array:[10,20,30,40]

function send(numList) {
  console.log(numList);
}

var numbers = send([10,20,30,40]);

function average(array){
  var totalArray = 0;
  for(var i = 0; i < array.length; i++){
    totalArray = totalArray + array[i];
  }
  return totalArray / array.length;
}
var arrayNumbers = [10,20,40,66];

var bob = average(arrayNumbers);


//using a function, reverse the string "kentucky" then
//write out the solution. SILVER CHALLENGE
var h = "hello";
var reverse = ""
for(var i = h.length - 1; i >= 0; i--){
  reverse = reverse + h[i];
}

console.log(reverse);

