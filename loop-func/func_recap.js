// function mete(x,y){
//     return x*y
// }

// console.log(mete(5,7));

// let area = function (x,y) {return x*y}

// let areax = area(10,85);

// console.log(areax);

// let square = new Function ("number", "return number*number");

// console.log(square(3));

// let multi = (x,y) => x*y*5.5;

// console.log(multi(98,5));

// var num = [7, 12, 143, 54, 37]
// num.sort(function (a,b){
// return b - a});
// console.log(num);

// let user ="Mesut"

// function sayHi(){
//     console.log("Hello")
// }

// console.log(sayHi(), user);

// let user = "Mesut";

// function sayHi(user) {
//     console.log("hello", user)
// }

// sayHi(user);

// sayHi("MESUT");

// function sayHello(name="New user"){
//     name && console.log(`Hello ${name}`)
// }

// sayHello("mesut")
// sayHello()

// function square(num1){
//     return num1 *= num1
// }

// console.log(square(5));

// let student ={}

// student.name = "mesut"

// let opt = prompt("Which operator would you like to use? ('+' '-' '*' '/')");
// let num1 = +prompt( "enter the first number :");
// let num2 = +prompt( "enter the second number :" );
// switch (opt) {
//     case "+":
//         process = num1 + num2
//         break;
//     case "-":
//         process = num1 - num2
//         break;
//     case "*":
//         process = num1 * num2
//         break;
//     case "/":
//         process = num1 / num2
//         break;
//     default:
//         process = "You entered a wrong operator. Please try again"
//         break;
// }
//     console.log(process);


let x = +prompt("Enter first number");
let calcu = prompt("which of the math action do you('+'  '-' '*' '/')");
let y = +prompt("Enter the second number")

switch (calcu){
    case "+" :
        output = x+y;
        break;
    case "-" :
        output = x-y;
        break;
    case "*" :
        output =x*y;
        break;
    case "/" :
        output = x/y;
        break;
    default:
        output = "wrong value try again!";
        break;               
}

console.log(output);