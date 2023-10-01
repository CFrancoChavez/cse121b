/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1,number2){
    return number1 + number2; // returns the sum of two numbers.
}
function addNumbers (){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
// Call function to display result in HTML page when button is clicked:
document.getElementById('addNumbers').addEventListener('click',addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtract1, subtract2);
}
document.querySelector('#subtractNumbers').addEventListener('click',subtractNumbers);
/* Arrow Function - Multiply Numbers */
var multiply = (number1, number2)=>{
    return number1 * number2;}
var multiplyNumbers = ()=>{
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
}
document.querySelector('#multiplyNumbers').addEventListener('click',multiplyNumbers);
/* Open Function Use - Divide Numbers */
var divide = (number1, number2)=>{
    return number1 / number2;}
var divideNumbers = ()=>{
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
const currentDate = new Date();
let currentYear;
currentYear= currentDate.getFullYear() ;
document.getElementById('year').innerHTML = currentYear;

/* ARRAY METHODS - Functional Programming */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Source Array */
document.getElementById("array").innerHTML = numbers;
/* Output Odds Only Array */
const odds = numbers.filter(oddFunction);

function oddFunction (number){
    return number%2 !==0;
}

document.getElementById("odds").innerHTML = odds;    


/* Output Evens Only Array */
const evens = numbers.filter(evenFunction);

function evenFunction (number){
    return number%2 ==0;
}

document.getElementById('evens').innerHTML = evens;   
/* Output Sum of Org. Array */
document.getElementById('sumOfArray').innerHTML=numbers.reduce((sum, number) => sum+ number)
/* Output Multiplied by 2 Array */
var multi2 = document.getElementById('multiplied').innerHTML=numbers.map( number => number*2)
/* Output Sum of Multiplied by 2 Array */

document.getElementById('sumOfMultiplied').innerHTML= multi2.reduce((sum, number) => sum+ number)