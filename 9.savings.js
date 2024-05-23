const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];
let cost = 0;

rl.question("Enter your all payments: ", function(input) {
    const numberStrings = input.trim().split(/\s+/);
    numbers = numberStrings.map(Number);

    if (numbers.some(isNaN)) {
        console.log("Invalid input.");
        rl.close();
        return;
    }

    rl.question("Enter living cost: ", function(costInput) {
        cost = Number(costInput);

        if (isNaN(cost)) {
            console.log("Invalid input.");
        } else {
            monthySavings(numbers, cost);
        }

        rl.close();
    });
});

function monthySavings(numbers, cost) {
    let sum = 0;
    let tax = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 3000) {
            tax += (20 / 100) * numbers[i];
        }
        
        sum += numbers[i];
    }

    let totalSaving = sum - tax - cost;
    if (totalSaving < 0) {
        console.log("Earn more");
    } else {
        console.log("Total savings: " + totalSaving);
    }
}
