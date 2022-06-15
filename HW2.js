console.log("\n---------Variables-Calculate area of a rectangle---------------------");

let length = 5;
let width = 6;
let areaOfRectangle = length * width;
console.log(areaOfRectangle);

/*================================================================*/

console.log("\n---------Variables-The Temperature Convertere---------------------");

let c = 30;
let cTf = (c*9)/5 + 32;
console.log(c + '°C is ' + cTf + '°F');
let f = 20;
let fTc = ((f - 32)*5)/9;
console.log(f + '°F is ' + fTc + '°C');

/*================================================================*/

console.log("\n---------For loop-Numbers' summations---------------------");

let num = [23,54,32,87,47]
let res = 0;
for (i=0; i < num.length; i++) {
     res += num[i]
}
console.log(res);

/*================================================================*/

console.log("\n---------For loop-Maximum number---------------------");

let array = [16,4,2,0,19,6];
let max = array[0];
for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
        max = array;
    }    
}
console.log(max);

// let array = [16,4,2,0,19,6];
// console.log(Math.max(...array))
/*================================================================*/

console.log("\n---------For loop-Reverse Array---------------------");

let arr = [1,2,3,4,5,6,7,8,9,10];
let rev=[];
for (let i = arr.length - 1; i >= 0; i--) {
    rev += arr[i]+" ";
}
console.log(rev);

/*================================================================*/

console.log("\n---------Nested for loop-stars pattern---------------------");

let start = " ";
for (let i=0; i<=5; i++){
    for (let j=0; j<i; j++){
        start +='* '
    }
    start +='\n'
}
console.log(start);
