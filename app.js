import isEven from './is-even.js';

function testNumber() {
    const numberInput = document.getElementById('number-input');
    const resultParagraph = document.getElementById('result');

    const number = parseInt(numberInput.value);

    const result = isEven(number);

    return result ? resultParagraph.textContent = 'Even' : resultParagraph.textContent = 'Odd';
}

window.testNumber = testNumber;