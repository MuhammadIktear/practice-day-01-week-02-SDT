const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please Enter your marks: ", function(marks) {
    const Marks = Number(marks);

    if (isNaN(Marks)) {
        console.log("Invalid marks input");
    } else if (Marks > 100) {
        console.log("Invalid marks input");
    } else if (Marks >= 80 && Marks <= 100) {
        console.log("A+");
    } else if (Marks >= 70 && Marks <= 79) {
        console.log("A");
    } else if (Marks >= 60 && Marks <= 69) {
        console.log("A-");
    } else if (Marks >= 50 && Marks <= 59) {
        console.log("B");
    } else if (Marks >= 40 && Marks <= 49) {
        console.log("C");
    } else if (Marks >= 33 && Marks <= 39) {
        console.log("D");
    } else {
        console.log("F");
    }

    rl.close();
});
