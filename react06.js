/*
-------------------topics--------------------
1. basic javascript
    a. variable, if...else, loop,function,list primitive vs non-primitive
2. execution context
    a. parts:
        i. memory component or variable environment
        ii. code component or thread of execution
    b. phases:
        i. creation phase or memory creation phase
        ii. executuon phase or code execution phase
3. Hoistiong
4. Function(Describely)
5. Scope, scope chain, lexical environemnt
6. let,const, temporal dead zone, block scope
7. closure 
8. break the browser

*/
//closure

// function mostOuter() {
//     var c = 100;
//     var d = 50;

//     function outer() {
//         var a = 10;

//         function inner() {
//             console.log(a);
//             console.log(c);
//         }
//         return inner;
//     }
//     return outer;
// }

// var b = mostOuter();// closure(mostOuter) outer function + lexical environment of 
// // outer function c+d; 
// var z = b();// closure(outer) inner fucntion + a
// z();// 




// function outer() {
//     var a = 10;
//     var c = 150;

//     return inner;
//     function inner() {
//         console.log(a);
//         console.log(c);
//     }
//     //in this case inner wont be returned  
// }

// var b = outer();

// var z = b();

/* -----------browser------------
hdl -> hardware descriptive language
1. the first task of browser is to compile javaScript

Resources of Browser ->
    1. Timer
    2. Geo Location
    3. Url
    4. Console
    5. Local Storage etc

Web Api's ->

    1. setTimeout()
    2. Dom Api's
    3. fetch()
    4. localStorage
    5. console
    6. location




*/
// localStorage.setItem("abid", "hasan");



let abid = () => {
    console.log("amar name abid");
}

console.log("start");
setTimeout(abid, 5000);
console.log("end");


// javaScript run time environment consists of three things 

//1. javaScript Engine -> call stack -> execution context
//2. heap -> (micro task queue + call back queue )
//3. event loop