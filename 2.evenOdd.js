const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(num) {
    const Num = Number(num);
    if (isNaN(Num)) {
        console.log("Invalid input. Please enter a valid number.");
    } else {
        if (Num % 2 == 0) {
            console.log(`${num} = Even Number`);
        } else {
            console.log(`${num} = Odd Number`);
        }
    }
    rl.close();
});
