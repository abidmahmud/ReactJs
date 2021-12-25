// function mostOuter() {
//     var y = 50;
//     var m = 50;
//     var n = 50;

//     function outer() {
//         var a = 10;

//         function inner() {
//             var b = 100;
//             console.log(b);
//             console.log(a);
//             console.log(y);
//         }
//         return inner;
//     }
//     return outer;
// }
// var z = mostOuter();
// var x = z();
// x();

//function along with its lexical environment forms closure

/* scope scope chain lexical environment */


// closure

function mostOuter() {
    var y = 50;

    function outer() {
        var a = 10;
        var c = 50;

        function inner() {
            var b = 100;
            console.log(b);
            console.log(a);
            console.log(y);
        }
        return inner;
    }
    return outer;
}


var z = outer();

var x = z();

x();

//closure : function along with it's lexical environment froms closure 

