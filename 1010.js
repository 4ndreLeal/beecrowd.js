var input = require("fs").readFileSync("/dev/stdin", "utf-8");
var lines = input.split('\n');
var lines1 = lines.shift();
var lines2 = lines.shift();
var space1 = lines1.split(' ');
var space2 = lines2.split(' ');
var code1 = parseInt(space1.shift());
var pieces_number1 = parseInt(space1.shift());
var unitary_value1 = parseFloat(space1.shift());
var code2 = parseInt(espace2.shift());
var pieces_number2 = parseInt(space2.shift());
var unitary_value2 = parseFloat(space2.shift());
var total_value = pieces_number1 * unitary_value1 + pieces_number2 * unitary_value2;
console.log("VALOR A PAGAR: R$ " + total_value.toFixed(2));
