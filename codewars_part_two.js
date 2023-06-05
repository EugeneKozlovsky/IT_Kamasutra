// 34.'Grasshopper - Summation'
const summation = num => [...Array(num + 1)].map((_, i) => i).reduce((a, b) => a + b);

// 35. 'Remove the time'
let shortenToDate = longDate => longDate.split(",").slice(0, -1).join();

// 36. 'Kata Example Twist'
let websites = [...Array(1000)].map(value => value = "codewars");

// 37. 'Remove First and Last Character'
let removeChar = str => Array.from(str).slice(1, -1).join("");

// 38. 'Miles per gallon to killometers per liter'
let converter = mpg => +(mpg * 1.609344 / 4.54609188).toFixed(2);

// 39. 'Basic: Making Six Toast'
let sixToast = num => Math.abs(6 - num);

// 40. 'Cat years, Dog years'
let humanYearsCatYearsDogYears = x => x == 1 ? [1, 15, 15] : x == 2 ? [2, 24, 24] : [x, 24 + (4 * (x - 2)), 24 + (5 * (x - 2))];

// 41. 'How much water do I need?'
function howMuchWater(water, load, clothes) {
    return (2 * load < clothes) ? "Too much clothes" : (load > clothes) ? "Not enough clothes" : +(water * Math.pow(1.1, (clothes - load))).toFixed(2);
}

// 42. 'Determine offspring sex based on genes XX and XY chromosomes'
let chromosomeCheck = sperm => /XY/i.test(sperm) ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter."
