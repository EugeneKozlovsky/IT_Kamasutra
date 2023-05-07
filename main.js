// Codewars, 'Calculate BMI'

function bmi(weight, height) {
    let bmi = weight / Math.pow(height, 2);
    console.log(bmi)
    console.log(bmi <= 25);
    switch (true) {
        case (bmi <= 18.0): return 'Underweight';
            break;
        case (bmi <= 25.0): return 'Normal';
            break;
        case (bmi <= 30.0): return 'Overweight';
            break;
        default: return 'Obese';
            break;
    } 
}

// Codewars, 'Function 1 - hello world'

function greet() {
    return "hello world!";
    }

/* Codewars, 'Count by X'
Create a function with two arguments that will 
return an array of the first n multiples of x.
Assume both the given number and the number of times
to count will be positive numbers greater than 0. */

function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++) {
      z.push(i * x)
    };
    return z;
  }