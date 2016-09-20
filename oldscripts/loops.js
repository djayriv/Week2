// for (var i = 1; i <= 5; i = i + 1){
//   console.log(i);
// }

// for (var i = 0; i <= 10; i = i + 5){
//   console.log(i);
// }

// for (var i = 10; i >= 1; i = i - 1){
//   console.log("Lift off in: " + i);
// }

// for (var i = 1; i <= 3; i++){
//   console.log("Have a great day");
// }

// for (var i = 100; i >= 10; i = i - 10){
//   console.log(i);
// }

// for (var i = 100; i >= 5; i = i - 5){
//   console.log(i);
// }

// for (var i = 0; i <= 100; i = i + 25){
//  if (i == 50){
//   console.log("Halfway there")
// } 

//example:
// for (var funnelCakes = 0; funnelCakes <= 100; funnelCakes = funnelCakes + 25){
//   if (funnelCakes == 50){
//     console.log("Halfway There");
//   } else {
//   console.log(funnelCakes);
//   } 
// }

//example:
// var funnelSaddness = "Funnel cakes have to go";

// for (var fire = 0; fire <= funnelSaddness.length; fire++){
//   console.log(funnelSaddness[fire]);
// }

//example of for each:
// for (var letters in funnelSaddness){
//   console.log(funnelSaddness[letters])
// }

// for (var i = 0 ; i <= 3; i = i + 1){
//     console.log("It's Friday!!");
// }

// var i = 0;

// while (i < 100){
//   i = i + 1;
//   console.log(i);
// }

// for (var i = 0 ; i <= 50 ; i = i +1){
//   if(i == 45){
//     console.log("man it's been a short week");
//   } else {
//     console.log(i);
//   }
// }

// for (var i = 0 ; i <= 50 ; i = i +1){
//   if(i == 45){
//     var x = 0;
//     while (x <= 5){
//       x++;
//       console.log("Wut?");
//     }
//   } else {
//     console.log(i);
//   }
// }

//arrays: the program understand that i is referring back to the numbers in the brackets
//        because of the statement myNumbers[i]. So you can change anything in the brackets
//        and it will still refer back to the numbers listed in the brackets with the variables.
var myNumbers = [3,2,3,4,5,6,7,8,9,10];
var total = 0;
for (var i = 0; i < myNumbers.length; i++){
  total = total + myNumbers[i];
  console.log(total);
}

