let count = 0;
let error = 1; 
let answerArr = [];
let letter = '';
let flah = 1;
let player = [1,2];
let currPlayer = player[Math.floor(Math.random() * player.length)];
let word = prompt(`игрок ${currPlayer}, введите угадываемое слово`);
word = word.toLowerCase();
let trys = word.length + 4;

for (let i = 0; i < word.length; i++) {
    answerArr[i] = "_";
}

alert(`Длина угадываемого слова: ${word.length}\nСлово: ${answerArr}\nОсталось попыток: ${trys}`);

while(count < word.length) {
    letter = prompt(`Не игрок ${currPlayer}, введите любую букву: `);
    if(letter === null) {
        break;
    }
    else if(letter.length != 1) {
        alert(`Не игрок ${currPlayer}, введите только одну букву!`);
    }
    else {
        for(let i = 0; i < word.length; i++) {
            if(word[i] == letter) {
                answerArr[i] = letter;
                count++;
                error = 0;
            }
        }
    }
    if(error == 1) {
        trys = trys - error;
    }
    if(trys == 0){
        break;
    }
    alert(`Длина угадываемого слова: ${word.length}\nСлово: ${answerArr}\nОсталось попыток: ${trys}`);
    error = 1;
}
alert('игра завершена');
   