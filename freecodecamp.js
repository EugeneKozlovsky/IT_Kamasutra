//" Golf Code" (75)
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
//Basic JS-133 'Use recursion to create a range of numbers'
function rangeOfNumbers(startNum, endNum) {
    if (startNum == endNum) {
        return [endNum];
    } else {
        let countArray = rangeOfNumbers(startNum, endNum - 1);
        countArray.push(endNum)
        return countArray
    }
}
//Basic JS 'Record Collection'
function lookUpProfile(name, prop) {
    for (let contact of contacts) {
        switch (true) {
            case (contact.firstName === name && contact.hasOwnProperty(prop)):
                return contact[prop];
                break;
            case (contact.firstName === name && !(contact.hasOwnProperty(prop))):
                return 'No such property';
                break;
        }
    }
    return 'No such contact'
}
//ES6 "Use getter and setter to Control Access to an Object"
class Thermostat {
    constructor(farenheit) {
        this._celsius = (5 / 9) * (farenheit - 32);
    }

    get temperature() {
        return this._celsius;
    }

    set temperature(celsius) {
        return this._celsius = celsius
    }
}