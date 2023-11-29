var prompt = require('prompt-sync')();


const n1 = parseInt(prompt("Add your First Number: "));
const n2 = parseInt(prompt("Add your second Number: "));
let operator = prompt("Please select your operator: ")

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
export { }