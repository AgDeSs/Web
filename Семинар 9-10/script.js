// 1 задача
let resh = "#";
while (resh.length <= 7) {
    console.log(resh + "\n")
    resh+="#";
}

// 2 задача
let flag = true;
for(let i=1; i<101; i++){
    flag = true;
    if(i % 3 == 0 & i % 5 == 0){
        console.log(`FizzBuzz ${i}`)
        flag = false;
    }
    else if(i % 3 == 0 & flag){
        console.log(`Fizz ${i}`)
    }
    else if(i % 5 == 0 & flag){
        console.log(`Buzz ${i}`)
    }
    else{
        console.log(i)
    }
}

// 3 задача

let resh1 = "# # # #";
for (let i = 1; i <= 8; i++){
    if(i % 2 == 1){
        console.log(resh1 + " ")
    }
    else{
        console.log(" " + resh1)
    }
}

// 4 задача

function mins(a, b){
     x = Math.min(a, b)
     return console.log(x);
}
mins(5, 10)

// 5 задача

function countBs(stroka){
    let count = 0;
    for(let i = 0; i<=stroka.length; i++){
        if(stroka[i] == "B"){
            ++count;
        }
    }    
    return console.log(count);
}
countBs("BRBTTTB")

function countChar(stroka, elem){
    let count = 0;
    for(let i = 0; i <=stroka.length; i++){
        if(stroka[i] == elem){
            ++count;
        }
    }
    return console.log(count)
}
countChar("BRBTTTB", prompt("Введите букву, которую хотите найти: ", 0))

// 6 задача

function range(left, right){
    let arrayRange = new Array();
    for(let i = left; i <= right; i++){
        arrayRange.push(i)
    }
    return console.log(arrayRange);
}
range(prompt("Введите начало диапазона: ", 0), prompt("Введите конец диапазона: ", 0))

function sum(array){
    let summa = 0;
    for(let i = 0; i <= array.length - 1; i++){
        summa = summa + array[i];
    }
    return console.log(summa)
}
lengthArray = prompt("Введите длину диапазона: ", 0)
let array = new Array();
for(let i = 0; i <= lengthArray; i++){
    array.push(prompt(`Введите элемент массива под номером ${i}`, 0))
}
sum(array)

// 7 задача

function reverseArray(array){
    let reversedArray = new Array();
    for(let i = array.length - 1; i > -1; i--){
        reversedArray.push(array[i])
    }
    return console.log(reversedArray)
}
let First_array = new Array(5,6,7,8,9,10)
reverseArray(First_array)

