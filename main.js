/* Codewars, 'Calculate BMI'
Option 1: */
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

/*' Calculate BMI'
Option 2: */
function bmi2(weight, height) {
    return (bmi2 <= 18) ? 'Underweight':
    (bmi2 <= 25.0) ? 'Normal':
    (bmi2 <= 30.0) ? 'Overweight' : 'Obese'
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

// Freecodecamp " Golf Code" (75)

const names = ['Hole-in-one', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey', 'Go Home!'];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes == par - 1) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if (strokes == par + 1) {
        return names[4]
    } else if (strokes == par + 2) {
        return names[5]
    } else {
        return names[6]
    }
}
//CodeWars "Find Multipless of a Number"
function findMultiples(integer, limit) {
    let resaultArray = [];
    for (let i = integer; i <= limit; i++) {
    if (i % integer == 0) {
        resaultArray.push(i);
    }
    }
    return resaultArray;
}
// CodeWars "Reversed strings"
function solution(str) {
    var revers = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revers += str[i];
    }
    return revers;
}

// CodeWars "Convert a String to a Number!"
const stringToNumber = function(str){
    // put your code here
    return +str;
}

/* CodeWars "Find the smallest integer in the array"
For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345 */
class SmallestIntegerFinder {
    findSmallestInt(args) {
    let min = args[0];
    for (let number of args) {
        if (number >= min) continue;
        min = number;
    }
    return min;
    }
}

// FreeCodeCamp Basic JS-133
//'Use recursion to create a range of numbers'
function rangeOfNumbers(startNum, endNum) {
    if (startNum == endNum) {
        return [endNum];
    } else {
        let countArray = rangeOfNumbers(startNum, endNum - 1);
        countArray.push(endNum)
        return countArray
    }
}