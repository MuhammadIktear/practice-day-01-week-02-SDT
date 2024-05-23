const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter Numbers: ", function (input) {
    const number = input.trim().split(/\s+/);
    const Numbers = number.map(Number);

    Numbers.sort((a, b) => a - b);
    console.log("Numbers in ascending order:", Numbers);

    Numbers.sort((a, b) => b - a);
    console.log("Numbers in descending order:", Numbers);

    rl.close();
});