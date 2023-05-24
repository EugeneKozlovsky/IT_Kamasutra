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

/* 'Did she say hallo?'
You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?
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
    let res = /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings)
    return res;
}

/* 'Keep Hydrated!'
Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5
*/
let litres = (time) => {
    return Math.trunc(time * 0.5);
}

/* 'Total amount of points'
Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
For example: ["3:1", "2:2", "0:1", ...]
Points are awarded for each match as follows:
if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
*/

let points = (games) => {
    let count = 0;
    for (i of games) {
        let x = +i[0];
        let y = +i[2];
        count += (x > y) ? 3 : (x < y) ? 0 : 1;
    }
    return count;
};
let pointsTwo = games => games.reduce((total, current) => {
    return total += current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0;
}, 0)
let games = ["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"];

/* Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
*/
function createArray(number) {
    var newArray = [];

    for (var counter = 1; counter <= number;) {
        newArray.push(counter);
        counter++;
    }

    return newArray;
}

/* Thinkful - Logic Drills: Traffic light
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
For example, when the input is green, output should be yellow.
*/

function updateLight(current) {
    switch (true) {
        case (current == "green"):
            return "yellow";
            break;
        case (current == "yellow"):
            return "red";
            break;
        case (current == "red"):
            return "green";
            break;
    }
}

/* Is he gonna survive?
A hero is on his way to the castle to complete his mission. However,
he's been told that the castle is surrounded with a couple of powerful dragons!
each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry..
Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
Return true if yes, false otherwise :)
*/

function hero(bullets, dragons) {
    return bullets / 2 >= dragons;
}

/* Twice as old
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son
(or in how many years he will be twice as old). The answer is always greater or equal to 0,
no matter if it was in the past or it is in the future.
*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

/* Expressions Matter
Task
Given three integers a ,b ,c, return the largest number obtained after inserting the following operators
and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
*/
function expressionMatter(a, b, c) {
    return Math.max(
        a + b + c,
        a * b * c,
        a * (b + c),
        (a + b) * c,
        a + b * c,
        a * b + c,
    );
}

/* DNA to RNA Conversion
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
Create a function which translates a given DNA string into RNA.
For example:
"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
*/

function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
}

/* Wilson primes

Wilson primes satisfy the following condition. Let P represent a prime number.
Then,
((P-1)! + 1) / (P * P)
should give a whole number.
Your task is to create a function that returns true if the given number is a Wilson prime.
*/

function amIWilson(p) {
    p = BigInt(p);
    return ((factorial(p - 1n)) + 1n) % (p * p) == 0n;
}

function factorial(x) {
    if (x <= 1n) {
        return 1n;
    }
    return x * factorial(x - 1n);
}

/* Is it a palindrome?
Write a function that checks if a given string (case insensitive) is a palindrome.
A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards
as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence:
"A man, a plan, a canal – Panama".
*/

function isPalindrome(x) {
    return x.toLowerCase() == x.split('').reverse().join('').toLowerCase();
}

/* Opposites Attract
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick
a flower each. If one of the flowers has an even number of petals and the other has an odd number of
petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love
and false if they aren't.
*/

function lovefunc(flower1, flower2) {
    return (flower1 + flower2) % 2 == 1;
}

/* Get the mean of an array
It's the academic year's end, fateful moment of your school report. The averages must be calculated.
All the students come to you and entreat you to calculate their average for them. Easy !
You just need to write a script.
Return the average of the given array rounded down to its nearest integer.
The array will never be empty.
*/

let getAverage = marks => Math.floor(marks.reduce((sum, x) => (sum + x)) / marks.length);

/* Abbreviate a Two Word Name
Write a function to convert a name into initials. This kata strictly takes two words with one space
in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
patrick feeney => P.F
*/

let abbrevName = name => name.split(" ").reduce((x, y) => x[0].toUpperCase() + "." + y[0].toUpperCase());

/* Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.
Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase
letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
*/

String.prototype.isUpperCase = function () {
    return this.toString() === this.toUpperCase()
}

/* Count Odd Numbers below n

Given a number n, return the number of positive odd numbers below n, EASY!
Examples (Input -> Output)
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
Expect large Inputs!
*/

function oddCount(n) {
    return Math.floor(n / 2);
}

/* Quadratic Coefficients Solver
In this Kata you are expected to find the coefficients of quadratic equation of the given two roots
(x1 and x2).
Equation will be the form of ax^2 + bx + c = 0
Return type is a Vector (tuple in Rust, Array in Ruby) containing coefficients of the equations in
the order (a, b, c).
Since there are infinitely many solutions to this problem, we fix a = 1.
Remember, the roots can be written like (x-x1) * (x-x2) = 0
Example
quadratic(1,2) = (1, -3, 2)
This means (x-1) * (x-2) = 0; when we do the multiplication this becomes x^2 - 3x + 2 = 0
Example 2
quadratic(0,1) = (1, -1, 0)
This means (x-0) * (x-1) = 0; when we do the multiplication this becomes x^2 - x + 0 = 0
Notes
Inputs will be integers.
When x1 == x2, this means the root has the multiplicity of two
*/

let quadratic = (x1, x2) => [1, -(x1 + x2), (x1 * x2)];

/* Calculate average

Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.
*/

let findAverage = array => array.length === 0 ? 0 : array.reduce((a,b) => a + b)/array.length; 

/* Powers of 2
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers
of 2 with the exponent ranging from 0 to n ( inclusive ).
*/

let powersOfTwo = n => [...Array(n + 1)].map((_, i) => Math.pow(2, i));

/* Reversed Words
Complete the solution so that it reverses all of the words within the string passed in.
Words are separated by exactly one space and there are no leading or trailing spaces.
Example(Input --> Output):
"The greatest victory is that which requires no battle" -->
"battle no requires which that is victory greatest The"
*/

let reverseWords = str => str.split(" ").reverse().join(" ");

/* Is n divisible by x and y?
Create a function that checks if a number n is divisible by two numbers x AND y.
All inputs are positive, non-zero numbers.
Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
*/

let isDivisible = (n, x, y) => n % x == 0 && n % y == 0;

/* Removing Elements
Take an array and remove every second element from the array. Always keep the first element and start
removing with the next element.
Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
None of the arrays will be empty, so you don't have to worry about that!
*/

let removeEveryOther = arr => arr.filter((_, i) => !(i % 2));
