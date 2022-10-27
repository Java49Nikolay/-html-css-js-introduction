// console.log("Hello world");
// for( i = 0; i < 3; i++) {
//     setTimeout(function(){
//         console.log(i)
//     });
// }
//i = 100;
// for (let i = 0; i < 3; i++) {
//     setTimeout(function () { console.log(i) });
// } => 0 1 2

// for (var i = 0; i < 3; i++) {
//      console.log(i) ;
// }
// function sum(op1, op2) {
//     let res = op1 + op2;
//     return res;
// }
// let op1 = 10;
// let op2 = 20;
// let res = sum(op1, op2);
// console.log(res)
//function sumDigits(number) {
    //TODO
    //function should return sum of a given number digits
//}
//Example
//console.log(sumDigits(123)); //should be printed out 6
function sumDigits(number) {
    if (number < 0)
         number = -number;
          for( sum = 0 ,rem = 0;number > 0;  )   {
 
             rem = number % 10;
             sum = sum + rem;
             number = (number - rem) / 10;
             
          }
        return sum;
 }
 console.log("sum of digits" ,sumDigits(123));