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
        summa = summa + Number(array[i]);
    }
    return console.log(summa)
}
lengthArray = prompt("Введите длину диапазона: ", 0)
lengthArray = Number(lengthArray)
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

// 8 задача

function arrayToList(array){
    let list = null;
    for (let i = 0; i<array.length; i++){
        list = ({value: Number(array[i]), rest: list});
    }
    return list
}

console.log(arrayToList(First_array))

function listToArray(list){
   let f_array = [list.value]
   while(list.rest !== null){
       list = list.rest;
       f_array.push(list.value)
   }
   return f_array
}
console.log(listToArray(arrayToList(First_array)))

function prepend(list, num){
   list = ({value:num, rest: list})
   return list
}

console.log(prepend(arrayToList(First_array),9))

// 9 задача

function deepEqual(num_1, num_2){
    if(typeof(num_1)=="object" & typeof(num_2) == "object"){
        if(JSON.stringify(num_1)=== JSON.stringify(num_2)){
            return console.log(true)
        }
        else{
            return console.log(false)
        }
    }
    else{
        if(num_1 == num_2){
            return console.log(true)
        }
        else{
            return console.log(false)
        }
    }
}

arrayOne = new Array([21,45,61,8,9])
arrayTwo = new Array([2,0,5,7,9])

deepEqual(arrayOne, arrayTwo)

// 10 задача

let mainArray = [First_array, arrayOne, arrayTwo]
let result_array = mainArray.reduce(function(array, sub_array){
    return array.concat(sub_array);
});

console.log(result_array)

// 11 задача

var data = JSON.parse(ANCESTRY_FILE);

let counter = 0;
let counter2 = 0;
let ageDifference = [];

while(counter != data.length){
    while(counter2 != data.length){
        if(data[counter].mother == null){
            break;
        }
        else{
            if(data[counter].mother == data[counter2].name){
                ageDifference.push(data[counter].born - data[counter2].born);
                break;
            }
        }
        counter2++;
    }
    counter++;
    counter2 = 0;
}
counter = 0;

let summ = 0;
let quantity = ageDifference.length;
while(counter != ageDifference.length){
    summ += ageDifference[counter]
    counter++
}
counter = 0;
console.log(summ / ageDifference.length);

// 12 задача

var data = JSON.parse(ANCESTRY_FILE);

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

function groupBy(arr, func){ 
    var groupObj = {};
    arr.forEach(function(p){
        var id = func(p);
        if ( groupObj[id] === undefined ) {
            groupObj[id] = [];
        }
        groupObj[id].push( p )
    });
    return groupObj;
}

function getCentury(p) {
    return Math.ceil(p.died / 100);
}

var byCenturies = groupBy( data, getCentury );

for ( century in byCenturies ) {
    byCenturies[century] = average( byCenturies[century].map(function(p){ return p.died - p.born }) );
    console.log( century + ": " + byCenturies[century] );
}

// 13 задача

function every(array, func){
    let counter = 0;
    while(counter < array.length){
        if (!func(array[counter])) return false;
        counter++;
    }
    return true;
}
function some(array, func){
    let counter = 0;
    while(counter < array.length){
        if (func(array[counter])) return true;
        counter++;
    }
    return false;
}
console.log(every([3,2,NaN],isNaN));
console.log(every([NaN,1,NaN],isNaN));
console.log(some([9,2,NaN,2,5],isNaN));
console.log(some([3,3,3,3,2],isNaN));