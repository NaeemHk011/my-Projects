"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
var n1 = parseInt(prompt("Add your First Number: "));
var n2 = parseInt(prompt("Add your second Number: "));
var operator = prompt("Please select your operator: ");
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
