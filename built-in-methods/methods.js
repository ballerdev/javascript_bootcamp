// console.log('Hello Built-in Methods')


// let arr = ["grapefruit", 4, "hello", 5.6, true];

// function printStuff(e, i) {
//     console.log(`Printing stuff: ${e} on array
//      position: ${i}`);
// }
// arr.forEach(printStuff);

// arr.forEach((e, i) => {
//     console.log(`Best way of printing Element: ${e} & Index:${i}`)
// })
//FILTER

// let arr = ["squirrel", 5, "Tjed", new Date(), true];

// function checkString(element, index) {
//     return typeof e === "string";
// }
// (e, i) => typeof e === 'string'

// let filterArr = arr.filter((e, i) => typeof e === 'string');
// console.log(filterArr);

// console.log(arr.every(checkString))

// //COPYWITHIN
// arr = ["grapefruit", 4, "hello", 5.6, true]

// // ar.copyWithin(0,2,4)

// arr.copyWithin(0,2,4)
// console.log(arr)

//MAP
let arr = [1000,2000,3000,4000];
let mapped_arr = arr.map(x => `$${x}`);
console.log(mapped_arr)

