
function even(numbers) {
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i]);
        }
    }

    return result;
}


let originalArray = [2, 7, 4, 9, 12, 15, 20];

let evenArray = even(originalArray);

console.log("Original Array:", originalArray);
console.log("Even Numbers Array:", evenArray);
