//function keyword

function greet(name) {
    console.log(`Hello, ${name}!`);
    }   
    
greet("Seth");
//greet(12);
//greet(false);
//greet();

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

console.log(multiply(5, 5));
//console.log(multiply(true, 5));
//console.log(multiply(true, false));
//console.log(multiply("hey", false));
//console.log(multiply("hey", "hey"));

//function keyword stored in a variable

let add = function(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

let addedNumbers = add(2, 2);

console.log(addedNumbers);


//anon function // arrow notation

let subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;

let subtractedNumbers = subtract(10, 5);

console.log(subtractedNumbers);
