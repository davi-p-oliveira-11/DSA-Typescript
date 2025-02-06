const fibonacci: number[] = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

// prints the 20 first numbers of fibonacci

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

// printing the sequence
for (let i = 1; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
}

// prints the length of the fibpnaci array
console.log(fibonacci.length);
