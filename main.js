//Game 'Виселица':
/*
const words = ['world','paralect','google','javascript'];

let word = words[Math.floor(Math.random() * words.length)];

let anserArray = [];
for (let i = 0; i< word.length; i++) {
    anserArray[i] = '_';
} 

let remeiningLetters = word.length;

while (remeiningLetters > 0) {
    alert('Мы загадали слово: ' + anserArray.join(' '));
    let guess = prompt('Угадайте букву или нажмите Отмена для выхода из игры.')
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert('Пожалуйста, введите только одну букву.');
    } else {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                anserArray[i] = guess;
                --remeiningLetters;
            }
        }
    }
}
alert(anserArray.join(' '));
alert('Отлично! Было загадано слово ' + word);
*/