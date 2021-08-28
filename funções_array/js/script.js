// length

var arr = [1,2,3,4,5];

console.log(arr.length);

// push

arr.push(6);
arr.push('Qualquer coisa');

console.log(arr);

// pop
arr.pop();

console.log(arr);

// unshift

arr.unshift(0);
arr.unshift('teste');

console.log(arr);

// shift

arr.shift();

console.log(arr);

// acessar o último elemento

console.log(arr[arr.length - 1]);

// isArray

console.log(Array.isArray(5));

console.log(Array.isArray(arr));

/****** PARTE 2 *****/

// splice

var arr = [1,2,3,4,5];

arr.splice(2, 0, 999);

console.log(arr);

arr.splice(4, 1);

console.log(arr);

// indexOf

console.log(arr.indexOf(5));

// join

var arr2 = ["o", "rato", "roeu", "a", "roupa"];

console.log(arr2.join(" "));

// reverse

console.log(arr2.reverse());