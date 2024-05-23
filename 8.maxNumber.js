var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

function maxNum(arr) {
    let maxNumber=arr[0];
    for(let i=1;i<arr.length;i++)
        {
            if(maxNumber<arr[i])
                {
                    maxNumber=arr[i];
                }
        }
    console.log(maxNumber);
}

maxNum(numbers);