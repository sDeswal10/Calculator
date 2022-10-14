
let number1 =20;
let number2 = 2; 

document.getElementById("num1").textContent = number1;
document.getElementById("num2").textContent = number2;

let result = document.getElementById("result");
function addition(){
    let add = number1 + number2;
    result.textContent = "Sum: " + add;
}
function subtraction(){
    let sub = number1 - number2;
    result.textContent = "Subtraction: " + sub;
}
function multiplication(){
    let mul = number1*number2;
    result.textContent = "Multiplication: " + mul;
}
function divison(){
    let div = number1/number2;
    result.textContent = "Divison: " + div;
}