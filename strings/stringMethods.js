var one = "Lovely professional university";
var two = "frontend and backend development";

var a = one.charAt(17);
// console.log(a);

a = one.charCodeAt(17); // return unicode of the letter
// console.log(a);

a = one.concat(' ', two, ' ', 'a');
// console.log(a);

a = one.endsWith('ty'); // accepts a string and return true or false
// console.log(a);

a = one.startsWith('Lo');
console.log(a);

a = String.fromCharCode(97);
// console.log(a);

a = one.includes('Love'); // returns true of false
// console.log(a);

a = two.indexOf('end'); //return the index of first occurance of string passed in argument
// console.log(a);

a = two.lastIndexOf('end');
// console.log(a)

a = two.match(/end/g); // returns array of matched string, if nothing is matched then it will return null
// console.log(a)

a = one.repeat(2);
// console.log(a);

a = two.replace(/end/g, "END");
// console.log(a);

a = two.search('end');
// console.log(a);

a = two.slice(2, 4);
// console.log(a);

a = two.split(" ");
// console.log(a);

a = two.substr(2, 4);
// console.log(a);

a = two.substring(2, 4);
// console.log(a);

a = two.toUpperCase();
console.log(a);

a = two.toLowerCase();
console.log(a);

const three = "   Hello world " 
a = three.trim();
console.log(a);