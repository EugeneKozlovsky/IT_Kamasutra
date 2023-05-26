// 1.'Calculate BMI' Option 1:
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

// 2.'Calculate BMI' Option 2:
function bmi2(weight, height) {
    return (bmi2 <= 18) ? 'Underweight' :
        (bmi2 <= 25.0) ? 'Normal' :
        (bmi2 <= 30.0) ? 'Overweight' : 'Obese'
}

// 3.'hello world'
function greet() {
    return "hello world!";
}

// 4.'Count by X'
function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++) {
        z.push(i * x)
    };
    return z;
}

//' 5.Find Multipless of a Number'
function findMultiples(integer, limit) {
    let resaultArray = [];
    for (let i = integer; i <= limit; i++) {
        if (i % integer == 0) {
            resaultArray.push(i);
        }
    }
    return resaultArray;
}

// 6.'Reversed strings'
function solution(str) {
    var revers = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revers += str[i];
    }
    return revers;
}

// 7.'Convert a String to a Number!'
const stringToNumber = function (str) {
    // put your code here
    return +str;
}

//' 8.Find the smallest integer in the array'
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

//' 9.Did she say hallo?'
function validateHello(greetings) {
    let res = /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings)
    return res;
}

// 10.'Keep Hydrated!'
let litres = (time) => {
    return Math.trunc(time * 0.5);
}

// 11.'Total amount of points'
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

// 12.'Unfinished Loop - Bug Fixing #1'
function createArray(number) {
    var newArray = [];

    for (var counter = 1; counter <= number;) {
        newArray.push(counter);
        counter++;
    }

    return newArray;
}

//' 13.Thinkful - Logic Drills: Traffic light'
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

// 14.'Is he gonna survive?'
function hero(bullets, dragons) {
    return bullets / 2 >= dragons;
}

// 15.'Twice as old'
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

// 16.'Expressions Matter'
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

// 17.'DNA to RNA Conversion'
function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
}

// 18.'Wilson primes'
function amIWilson(p) {
    p = BigInt(p);
    return ((factorial(p - 1n)) + 1n) % (p * p) == 0n;
}

// 19.
function factorial(x) {
    if (x <= 1n) {
        return 1n;
    }
    return x * factorial(x - 1n);
}

// 20.'Is it a palindrome?'
function isPalindrome(x) {
    return x.toLowerCase() == x.split('').reverse().join('').toLowerCase();
}

// 21.'Opposites Attract'
function lovefunc(flower1, flower2) {
    return (flower1 + flower2) % 2 == 1;
}

// 22.'Get the mean of an array'
let getAverage = marks => Math.floor(marks.reduce((sum, x) => (sum + x)) / marks.length);

// 23.'Abbreviate a Two Word Name'
let abbrevName = name => name.split(" ").reduce((x, y) => x[0].toUpperCase() + "." + y[0].toUpperCase());

// 24.'Is the string uppercase?'
String.prototype.isUpperCase = function () {
    return this.toString() === this.toUpperCase()
}

// 25.'Count Odd Numbers below n'
let oddCount = n => Math.floor(n / 2)

// 26.'Quadratic Coefficients Solver'
let quadratic = (x1, x2) => [1, -(x1 + x2), (x1 * x2)];

// 27.'Calculate average'
let findAverage = array => array.length === 0 ? 0 : array.reduce((a, b) => a + b) / array.length;

// 28.'Powers of 2'
let powersOfTwo = n => [...Array(n + 1)].map((_, i) => Math.pow(2, i));

// 29.'Reversed Words'
let reverseWords = str => str.split(" ").reverse().join(" ");

// 30.'Is n divisible by x and y?'
let isDivisible = (n, x, y) => n % x == 0 && n % y == 0;

// 31.'Removing Elements'
let removeEveryOther = arr => arr.filter((_, i) => !(i % 2));

// 32.'Gravity Flip'
const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);

// 33.'Remove First and Last Character Part Two'
let array = string => string.split(",").slice(1, -1).join(" ") || null