//1. Show how you would determine the location of the number 27 in the array:
// var numArray = [18, 24, 57, 98, 45 27, 3, 456, 3, 35, 85];
// Store its location in a variable.

// var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];
// var total = 0;

var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];
var a = numArray.indexOf(27);






//2. Using the same array from Problem 1, calculate the sum of all numbers in the array and assign the sum to a variable.

var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];

var total = 0;
for (var i = 0; i < numArray.length; i++){
  total = total + numArray[i];
}
console.log(total);



//3. Initialize a new array and fill it with the numbers 1 through 10. Then, remove the last element of the array. Output the array to the console.

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var removedValue = numbers.pop();
console.log(removedValue);


//4. Create a function with two parameters. This function will be passed two numbers as arguments. Calculate the sum of the parameters. 
//If the sum is less than or equal to 25, the function should return true. If not it should return false. Be sure to use an appropriate function name.

// var addition(num1, num2);
var num1 = 23
var num2 = 4
function addition(num1 , num2){
} if(num1 + num2 <= 25) {
  return "true";
} else (num1 + num2 >= 26)
  return "false";
}




// return num1 + num2 ;


//5. Create a function with two parameters. This function will be passed two strings as arguments. Combine both of these strings and assign the result 
//to a variable. If this new string is longer than 12 characters, return "Error, string too long.". Otherwise, return the variable that stores 
//the new string. Be sure to use an appropriate function name.

// function name(parameter1, parameter2) {
//     code to be executed
// }

//6. Design a while loop that counts from 0 to 20 using the variable num. If num is between 0 and 5 output "Very Low Number" to the console. 
//If it is between 6 and 10 output "Low Number" to the console. If it is between 11-15 output "High Number" to the console. 
//For everything else output "Very High Number" to the console.


for (var i = 0; i <= 20; i = i + 1) {
  if (i <= 5) {
    var x = 0;
    while (x <= 0) {
      x++;
      console.log("Very Low Number");
    }
  } else if (i >= 6 && i <= 10) {
    console.log("Low Number");
  } else if (i >= 11 && i <= 15) {
    console.log("High Number");
  } else if (i >= 16) {
    console.log("Very High Number");
  }
}
