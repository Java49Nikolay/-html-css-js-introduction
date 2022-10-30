console.log("Hello sumDigits.js");
function sumDigits(number) {
   if(isNaN(number)) {
      return "NaN";
   }
if(number < 0) {
   number =- number;
}
let sum = 0;
while(!(number == 0)) {
   sum += number % 10;
   number = Math.floor(number/10);
}
return sum;
}
console.log("returns=", sumDigits(123));
console.log("returns=", sumDigits(-623));
