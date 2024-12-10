// write block scope examples

function exampleFunction() {
    if (true) {
        let x = 10;
        console.log(x);
    }
}
exampleFunction();

// function scope example


function myFunction() {
    let carName = "volvo";
    let vehicle = "luxury car";
    console.log(carName + vehicle)
}
myFunction()




// global scope examples
var globalVariable = "im in a scope";
function myFunction() {
    console.log(globalVariable)
}

myFunction()