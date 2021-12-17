// задача 1

let city1 = {
    name:"ГородN",
    population: 10000000
}
console.log(city1);

// задача 2

let city2 = {
    name: "ГородМ",
    population: 1e6
}
console.log(city2);

// задача 3

city1.getName = function(){
    console.log(city1.name);
};
city1.getName();
city2.getName = function(){
    console.log(city2.name);
}
city2.getName();

// задача 4

delete city1.getName;
delete city2.getName;

city1.exportStr = function(key){
    for (key in city1){
        console.log(key,city1[key]);
        delete city1.exportStr
    }
}

city2.exportStr = function(key){
    for (key in city2){
        console.log(key,city2[key]);
        delete city2.exportStr
    }
}

city1.exportStr()
city2.exportStr()

// задача 5

function getObj () { return this }
 
city1.getCity = getObj;
city2.getCity = getObj;
 
console.log(city1.getCity().name + ' ' + city1.getCity().population);
console.log(city2.getCity().name + ' ' + city2.getCity().population);

// Задача 6

let obj = {
   method1: function(){
        return this;
   },
   method2: function(){
        return this;
   },
   method3: function(){
       return "метод3";
   }
};
console.log(obj.method1().method2().method3());

// задача 7

d1 = [45, 78, 10, 3]
d1[7] = (100)
console.log(d1)
console.log(d1[6], d1[7])

// задача 8
let sum2 = 0
d2 = [45, 78, 10, 3]
for(let i = 0; i < d2.length; i++){
    sum2 = d2[i] + sum2;
}
console.log(sum2)

// задача 9

d3 = [45, 78, 10, 3]
d3[7] = (100)
let sum3 = 0
for(let elem in d3){
    sum3 = elem + sum3;
}
console.log(sum3)

// задача 10

d4 = [45, 78, 10, 3]
my = (function(a, b){
    return a - b;
});
console.log(d4.sort(my))

// задача 11

let n = 3
let m = 4
d5 = [];
for(let i = 0; i < n; i++){
    d5[i] = [];
    for(let j = 0; j < m; j++){
        d5[i].push(5);
    }
}
console.log(d5)

// задача 12 

function Vector(x, y){
    this.x = x;
    this.y = y;
    this.plus = function (vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }
    this.minus = function (vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }
    this.length = function () {
        return Math.sqrt(x*x + y*y);
    }
}

console.log("Сумма векторов: ",new Vector(1,2).plus(new Vector(2,3)));
console.log("Разность векторов: ", new Vector(1,2).minus(new Vector(2,3)));
console.log("Длина вектора: ", new Vector(3,4).length());

// задача 13

function StretchCell(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
    this.minWidth=function(){
        return(this.width)
    }
    this.minHeight=function(){
        return(this.height)
    }
  }
  StretchCell.prototype.draw = function (otherVector) {
    let yach=[];
    let inne;
    if (typeof this.inner == 'object'){
        //dlina=this.inner.length;
        for (let i in this.inner) {
            inne=this.inner[i];
            while (inne.length < this.width){
                inne=inne+" "
            }
            yach.push(inne);
        } 
    } else {
            inne=this.inner;
            while (inne.length < this.width){
                inne=inne+" "
            }
            yach.push(inne);
    }
    inne="";
    while (inne.length < this.width){
        inne=inne+" "
    }
    while (yach.length < this.height){
        yach.push(inne);
    }
    return (yach);
};
var sc = new StretchCell("abc", 1, 2);


console.log(sc.minWidth());
// - 3
console.log(sc.minHeight());
// - 2
console.log(sc.draw(3, 2));
// - ["abc", "   "]

// задача 14

function logFive (posled){
    dlina=posled.length;
    if (dlina>5){
        dlina =5;
    }
    for (var i = 0; i < dlina; i++) {
        console.log(posled[i]);
    }
}

function RangeSeq(from, to){
    this.from = from;
    this.to = to;
    self.mass=[];
    for (var i = from; i < to; i++){
        self.mass.push(i);
    }
    return(self.mass)

}

function ArSeq(arr){
    self.mass=[];
    for (let i in arr){
        self.mass.push(arr[i]);
        }
    return(self.mass)

}
logFive(new ArSeq([1, 2]));

logFive(new RangeSeq(100, 1000));

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

// задача 21

function calendar(year, month){
    let date = new Date(year, month-1, 0);
    empty_cells = (date.getDay() - 7) % 7 + 7;
    parent = document.createElement("div");
    parent.style.display = "grid";
    parent.style.gridTemplateColumns = "repeat(7, 40px)";
    parent.style.textAlign = "right";

    days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    days.forEach(element => {
        label = document.createElement("div");
        label.innerHTML = element;
        parent.appendChild(label);
    });

    for (let i = 0; i < empty_cells; i++){
        parent.appendChild(document.createElement("div"));
    }

    for (let i = 0; i < date.getDate(); i++){
        day = document.createElement("div");
        day.innerHTML = `${i+1}`;
        parent.appendChild(day);
    }

    document.body.append(parent);
}

calendar(2021, 10);

// задача 22

Number.prototype.isOdd = function(){
    return this % 2 != 0;
}

a = new Number(5);
b = new Number(6);
console.log(a.isOdd());
console.log(b.isOdd());

// задача 23

function Chain(val){
    this.val = val,
    this.add = function(a){
        this.val += a;
        return this;
    },
    this.substract = function(a){
        this.val -= a;
        return this;
    },
    this.multiply = function(a){
        this.val *= a;
        return this;
    },
    this.div = function(a){
        this.val /= a;
        return this;
    }
}

example = new Chain(7).add(2).substract(1).multiply(3).div(8);
console.log(example.val);

// задача 24

function Unit(x, y){
    this.x = x;
    this.y = y;
}

Unit.prototype = {
    get X() {return this.x;},
    get Y() {return this.y;},
    set X(val) {this.x=val;},
    set Y(val) {this.y=val;}
}

function Fighter(power){
    this.power = power;
}

Fighter.prototype = Unit.prototype;
Fighter.prototype += {
    get power() {return power;},
    set power(val) {this.power = val;}
}

f = new Fighter(8);
f.X = 8;
f.Y = 10;
console.log(f.Y);