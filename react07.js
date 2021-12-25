// function print() {
//     console.log('abid');
// }

// console.log("start");

// setTimeout(print, 5000);

// console.log(`log`);

/* 
------------------Topics----------
1. javaScript Basics
2. execution context
3. hoisting -> jeta age memory component e place hold kore rakhe
4. scope, scope chain, lexical environment
5. closure
6. break the browser
7. forEach, map, Filter, reduce
8. promise
9. template literals

*/

var arr = [1, 2, 3, 4, 5];

function print(number, index) {
    console.log(`the number: ${number} is at ${index}`);
}
arr.forEach(print);

// for each er vitor ekta function pass kora lage

var arr2 = [5, 6, 7, 8, 9];


let a = arr2.forEach(number => console.log(number));

// map kokhn use kori amra jokhn mone hoy je array ta ache seta amra modify kore arekta array banaite chai tokhn amra
// map use kori, map r for each onk use hoy javaScript e

function double(number) {
    return number * 2;
}

var b = arr.map(double);
console.log(b);

//filter er kaj filter kora basically array er sob element er upor filter hobe and milay dekhbe condition thik ache kina

function doFilter(number) {
    if (number < 3) return true;
    return false;
}

var c = arr.filter(doFilter);

console.log(c);

arr.filter(doFilter).map(double).forEach(print);


class Animal {
    constructor(name, eyes_number, color) {
        this.name = name;
        this.eyes = eyes_number;
        this.color = color;
    }
    print() {
        console.log('the name of the animal is: ', this.name);
    }
    talk() {
        console.log(`the animal ${this.name} can talk`);
    }
}

var animal1 = new Animal(`sagol`, 3, `red`);

var animal2 = new Animal(`goru`, 2, `sada`);

console.log(animal1);
console.log(animal2);

animal2.print();
animal1.print();
animal2.talk();
animal1.talk();


//promise

function callBackFn(resolve, reject) {
    // setTimeout(function () {
    //     resolve(5000);
    // }, 3000);

    setTimeout(function () {
        reject(`you won't get bail`);
    }, 3000);

}

console.log(`start`);

var promise1 = new Promise(callBackFn);

console.log(promise1);

function resolveFn(result) {
    console.log(`the case is dismissed with ${result} bdt fine`);
}

function rejectFn(err) {
    console.log(`Case is will go on,`, err);
}

promise1
    .then(resolveFn)
    .catch(rejectFn)

console.log(`end`);