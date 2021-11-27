// задача 15

function Card(from, to){
    this.from = from;
    this.to = to;
    this.show = function(){
        return `${this.from},${this.to}`;
    }
}

c1 = new Card('Екатеринбург','Москва');
console.log(c1.show());

// задача 16

class Human {
    constructor (name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    }

    getInfo() {
        return `${this.name},${this.age},${this.height}`
    }

    get firstName(){
        return this.name;
    }
}

// задача 17 

humans =[
    new Human('Коля',23,180),
    new Human('Даша',19,170),
    new Human('Ваня',18,192),
    new Human('Петя',45,178),
    new Human('Вася',34,197),
    new Human('Джони',37,160),
    new Human('Катя',37,160),
    new Human('Петя',37,160),
    new Human('Соня', 21,172),
    new Human('Женя',25,175)
]

function sortByName(array) {
    return array.sort(function comparator(o1, o2){ return (o1.name > o2.name) ? 1 : -1});
}

function sortByHeight(array) {
    return array.sort(function comparator(o1, o2){return(o1.height < o2.height) ? 1 : -1});
}

console.log(humans);
console.log(humans[3].getInfo());
console.log(humans[7].firstname);
console.log(sortByHeight(humans));

// задача 18

dt1 = new Date(2045, 0, 1, 0, 0, 0);

console.log(dt1);

// задача 19

dt2 = Date.now() / 1000;

console.log(dt2 + ' s');

// задача 20

function getDays(y, m) {
    return new Date(y,m,0).getDate();
}


console.log(getDays(2002, 01) + ' days in month'); 
console.log(getDays(2102, 02) + ' days in month'); 
console.log(getDays(2008, 02) + ' days in month'); 
console.log(getDays(2023, 02) + ' days in month'); 