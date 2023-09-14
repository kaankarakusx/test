
//test
let username = "kaankarakusx";

const pattern = "kaan";
const flag = "gi";

const regExp = new RegExp(pattern,flag); // => /kaan/gi

console.log(regExp.test(username)); // => true

//match

let comment = "kaan,it's beautiful";

console.log(comment.match(regExp)); // => ['kaan'] if it wasn't => null

//Search

let str= "eating apples is healthly"

console.log(str.search(/is/gi)); // => return index >> 14

str = "javascript is beautiful language";

console.log(str.replace(/javascript|Javascript/,'c#')); // => 'c# is beautiful language';

//A set of characters

str = "i am 20 years old";

console.log(str.match(/[0-9]+/gi));

str = "i am 20 years old";

console.log(str.match(/\d/gi));

str = "20";
console.log(/^[0-9]+$/.test(str));

str = "kaan";

console.log(/\s/.test(str));


