"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
let n1 = parseInt(prompt("Add your First Value: "));
let n2 = parseInt(prompt("Add your second Value: "));
let operator = prompt("Please select your operator: ");
if (operator == "+") {
    console.log(n1 + n2);
}
if (operator == "-") {
    console.log(n1 - n2);
}
if (operator == "+*") {
    console.log(n1 * n2);
}
if (operator == "/") {
    console.log(n1 / n2);
}
