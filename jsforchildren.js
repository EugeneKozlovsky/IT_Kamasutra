/* Создание объектов, добавление в него свойств и изменение знаений этих свойств:

let owedMoney = {};
owedMoney['Jimmy'] = 5;
owedMoney.Katty = 7;
owedMoney.Jimmy += 3;
owedMoney;

let scores = {};
scores.Eugene = 5;
scores.Artem = 0;
scores.Nina = 9;
scores.Artem += 7;
scores;
*/

/* Полечение доступа к атрибуту со значением '123':

let myCrazyObject = {
"name": "Нелепый объект",
"some array": [7, 9, {purpose: "путаница", number: 123}, 3.3],
"random animal": "Банановая акула"
};
console.log(myCrazyObject["some array"][2].number);
*/

/* Возведение 3 в степень циклами for и while:

for (let x = 3; x < 10_000; x *= 3) {
    console.log(x);
}

let y = 3;
while (y < 10_000) {
    y *= 3;
    console.log(y);
}
*/

/*'Прекрасные животные':
let animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
for (let i = 0; i < animals.length; i++) {
    animals[i] = animals[i] + " - прекрасное животное"
};
console.log(animals);
*/

/*Генератор случайных строк:
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomstring = '';
while (randomstring.length < 6) {
    let index = Math.floor(Math.random() * alphabet.length);
    randomstring += alphabet[index];
}
console.log(randomstring);
*/

/*h4ck3r sp34k:

let input = 'javascript is awesome';
let output = '';

for (let i = 0; i < input.length; i++) {
if (input[i] == 'a') {
    output += '4';
} else if (input[i] == 'e') {
    output += '3';
} else if (input[i] == 'i') {
    output += '1';
} else if (input[i] == 'o') {
    output += '0';
} else {
output += input[i];
}
}
console.log(output);
*/

