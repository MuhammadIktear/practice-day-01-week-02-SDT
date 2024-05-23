var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

function withoutDuplicates(arr) {
    let uniqueNumbers = [];
    let count = {};

    arr.forEach(num => {
        count[num] = (count[num] || 0) + 1;
    });

    for (let num in count) {
        if (count[num] <= 1) {
            uniqueNumbers.push(Number(num));
        }
    }

    console.log("Unique Numbers: ", uniqueNumbers);
}

withoutDuplicates(numbers);

