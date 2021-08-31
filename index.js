function plus() {
    let a = Number(document.getElementById('number1').value);
    let b = Number(document.getElementById('number2').value);
    let c = null;
    
    c = a + b;
    document.getElementById('result').innerHTML = c;   
}

function minus() {
    let a = Number(document.getElementById('number1').value);
    let b = Number(document.getElementById('number2').value);
    let c = null;
    
    c = a - b;    
    document.getElementById('result').innerHTML = c;
}

function divide() {
    let a = Number(document.getElementById('number1').value);
    let b = Number(document.getElementById('number2').value);
    let c = null;
    
    c = a / b;    
    document.getElementById('result').innerHTML = c;
}

function multiply() {
    let a = Number(document.getElementById('number1').value);
    let b = Number(document.getElementById('number2').value);
    let c = null;
    
    c = a * b;    
    document.getElementById('result').innerHTML = c;
}