function plus() {
    let firstNumber = Number(document.getElementById('number1').value);
    let secondNumber = Number(document.getElementById('number2').value);
    let resultNumber = null;
    
    resultNumber = firstNumber + secondNumber;
    document.getElementById('result').innerHTML = resultNumber   
}

function minus() {
    let firstNumber = Number(document.getElementById('number1').value);
    let secondNumber = Number(document.getElementById('number2').value);
    let resultNumber = null;
    
    resultNumber = firstNumber - secondNumber;    
    document.getElementById('result').innerHTML = resultNumber;
}

function divide() {
    let firstNumber = Number(document.getElementById('number1').value);
    let secondNumber = Number(document.getElementById('number2').value);
    let resultNumber = null;
    
    resultNumber = firstNumber / secondNumber;    
    document.getElementById('result').innerHTML = resultNumber;
}

function multiply() {
    let firstNumber = Number(document.getElementById('number1').value);
    let secondNumber = Number(document.getElementById('number2').value);
    let resultNumber = null;
    
    resultNumber = firstNumber * secondNumber;    
    document.getElementById('result').innerHTML = resultNumber;
}