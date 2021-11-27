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

