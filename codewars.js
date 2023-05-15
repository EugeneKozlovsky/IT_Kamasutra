//'Calculate BMI' Option 1:
function bmi(weight, height) {
    let bmi = weight / Math.pow(height, 2);
    console.log(bmi)
    console.log(bmi <= 25);
    switch (true) {
        case (bmi <= 18.0):
            return 'Underweight';
            break;
        case (bmi <= 25.0):
            return 'Normal';
            break;
        case (bmi <= 30.0):
            return 'Overweight';
            break;
        default:
            return 'Obese';
            break;
    }
}
//'Calculate BMI' Option 2:
function bmi2(weight, height) {
    return (bmi2 <= 18) ? 'Underweight' :
        (bmi2 <= 25.0) ? 'Normal' :
        (bmi2 <= 30.0) ? 'Overweight' : 'Obese'
}
//'hello world'
function greet() {
    return "hello world!";
}
/* 'Count by X'
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
//"Find Multipless of a Number"
function findMultiples(integer, limit) {
    let resaultArray = [];
    for (let i = integer; i <= limit; i++) {
        if (i % integer == 0) {
            resaultArray.push(i);
        }
    }
    return resaultArray;
}
//"Reversed strings"
function solution(str) {
    var revers = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revers += str[i];
    }
    return revers;
}
//"Convert a String to a Number!"
const stringToNumber = function (str) {
    // put your code here
    return +str;
}
/*"Find the smallest integer in the array"
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

/* You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?
Write a simple function to check if the string contains the word hallo in different languages.
These are the languages of the possible people you met the night before:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish
Notes
you can assume the input is a string.
to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
function should be case insensitive to pass the tests
*/

function validateHello(greetings) {
    let res =  /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings) 
    return res;
}
alert(validateHello('ahoj'))