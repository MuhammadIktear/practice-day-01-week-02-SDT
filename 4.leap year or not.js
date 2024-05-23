const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a year: ", function(year) {
    const Year = Number(year);

    if (isNaN(Year)) {
        console.log("Invalid input. Please enter a valid year.");
    } else {
        if ((Year % 4 === 0 && Year % 100 !== 0) || (Year % 400 === 0)) {
            console.log(`${Year} is a leap year.`);
        } else {
            console.log(`${Year} is not a leap year.`);
        }
    }

    rl.close();
});
