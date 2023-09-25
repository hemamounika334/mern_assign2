function calculateMultiplication() {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
    } else {
        const result = firstNumber * secondNumber;
        document.getElementById('result').innerText = 'Result of multiplication: ' + result;
    }
}

function calculateDivision() {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
    } else if (secondNumber === 0) {
        document.getElementById('result').innerText = 'Division by zero is not allowed.';
    } else {
        const result = firstNumber / secondNumber;
        document.getElementById('result').innerText = 'Result of division: ' + result;
    }
}
