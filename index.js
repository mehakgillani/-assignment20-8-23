"use strict";
//Question number=1*/
//Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
function insertValue(arr, index, value) {
    arr.splice(index, 0, value);
    return arr;
}
let arr = [1, 2, 3, 4, 5];
console.log(insertValue(arr, 2, 10));
/Question number=2/
    / Implement;
a;
simple;
shopping;
cart;
program;
using;
an;
array.Create;
functions;
to;
add;
items, remove;
items, and;
update;
quantities;
using;
the;
splice;
method.Print;
the;
cart;
's contents after each operation/;
let cart = ["mango", "apple", "banana", "grapes"];
function sum1(cart) {
    cart.splice(3, 0, "dates");
    return cart;
}
function sum2(cart) {
    cart.splice(2, 1);
    return cart;
}
function sum3(cart) {
    cart.splice(1, 0, "peach");
    return cart;
}
console.log("fruits", cart);
console.log(sum1(cart));
console.log(sum2(cart));
console.log(sum3(cart));
/Question number=/
    / Write;
a;
program;
that;
uses;
a;
while (loop)
    to;
print;
the;
first;
25;
integers /
;
var i = 1;
while (i <= 25) {
    console.log(i);
    i++;
}
/Write a program that uses a while loop to print the first 10 even numbers./;
var i = 2;
var count = 0;
while (count < 10) {
    console.log(i);
    i += 2;
    count++;
}
