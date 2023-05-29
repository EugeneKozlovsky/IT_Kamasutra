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