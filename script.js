document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    let secondOperand = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                firstOperand = '';
                secondOperand = '';
                operator = '';
                display.textContent = '0';
            } else if (value === '=') {
                secondOperand = currentInput;
                currentInput = evaluate(firstOperand, secondOperand, operator);
                display.textContent = currentInput;
                firstOperand = currentInput;
                secondOperand = '';
                operator = '';
            } else if (['+', '-', '*', '/'].includes(value)) {
                operator = value;
                firstOperand = currentInput;
                currentInput = '';
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    function evaluate(firstOperand, secondOperand, operator) {
        const num1 = parseFloat(firstOperand);
        const num2 = parseFloat(secondOperand);

        switch (operator) {
            case '+':
                return (num1 + num2).toString();
            case '-':
                return (num1 - num2).toString();
            case '*':
                return (num1 * num2).toString();
            case '/':
                return (num1 / num2).toString();
            default:
                return '0';
        }
    }
});