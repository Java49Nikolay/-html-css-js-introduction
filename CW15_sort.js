
function getEvenNumbers(numbers) {
    let res = numbers.filter(n => n % 2 == 0);
    return res;
}
let ar = [ 2, 9, 3, 1999];
ar.sort((a, b)=>a - b);

console.log(ar);
ar = ["abc", "a", "lmn", "y"];
//ar.sort((a, b)=>a < b ? -1 : 1);
ar.sort((a, b)=> a.length - b.length);
console.log(ar);