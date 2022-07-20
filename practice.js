// Problem 1

// for (let i = 1; i < 101; i++) {
//   console.log(i);
// }

// function oneToAHundred() {
//   var number = 0;
//   while (number < 100) {
//     number += 1;
//     console.log(number);
//   }
// }
// oneToAHundred();

// Problem 2

// for (let i = 1; i < 101; i += 2) {
//   console.log(i);
// }

// function everyOtherNumber() {
//   var number = 0;
//   while (number < 100) {
//     if (number % 2 !== 0) {
//       console.log(number);
//     }
//     number += 1;
//   }
// }
// everyOtherNumber();

// Problem 3

// var array = [11, 22, 33, 44, 55, 55, 55];
// var filtered = array.filter(function (x) {
//   return x === 55;
// });
// console.log(filtered.length);

// function numberOf55(numbers) {
//   var count = 0;
//   numbers.forEach(function (number) {
//     if (number === 55) {
//       count += 1;
//     }
//   });
//   console.log(count);
// }
// numberOf55([11, 22, 33, 44, 55, 55, 55]);

// Problem 4

// var array = ["a", "b", "c", "d", "e"];
// var awesome = array.flatMap((x) => [x, "awesomesauce"]);
// awesome.pop();
// console.log(awesome);

// function awesomesauced(strings) {
//   var lengthOfArray = strings.length;
//   var newArray = [];
//   var index = 0;
//   while (index < lengthOfArray) {
//     newArray.push(strings[index]);
//     if (index !== lengthOfArray - 1) {
//       newArray.push("awesomesauce");
//     }
//     index += 1;
//   }
//   console.log(newArray);
// }
// awesomesauced(["a", "b", "c", "d", "e"]);

// Problem 5

var item_amounts = { chair: 5, table: 2 };
var chair = item_amounts.hashfunc;
