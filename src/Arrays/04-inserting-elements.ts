let numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers);
console.log(numbers.length);

numbers[numbers.length] = 10;

console.log(numbers);
console.log(numbers.length);

// inserting elements using push method

numbers.push(11);
numbers.push(12, 13);

// inserting an element in the first position

/*

Array.prototype.insertFirstPosition = function (value: number): void {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};

numbers.insertFirstPosition(-1);

console.log(numbers);

*/

// unshift method has the same behavior as the logic above
// it adds elements to beginning of the array

numbers.unshift(-2);
numbers.unshift(-4, -3);

console.log(numbers);
console.log(numbers.length);

// removes the value in the final of the array
numbers.pop();

console.log(numbers);
console.log(numbers.length);

// retake at page 85, consider rewriting the unshift and pop logic in js, let's stop for today

