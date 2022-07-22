class Calculator
{
    constructor(previousScreenText, currentScreenText)
    {
        this.previousScreenText = previousScreenText;
        this.currentScreenText = currentScreenText;
        this.clearScreen();
    }

    clearScreen() // w/ default values
    {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    deleteNumber()
    {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number)
    {
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperator(operator)
    {
        if(this.currentOperand === '') return;
        if(this.previousOperand !== '')
        {
            this.calculate();
        }
        this.operation = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    calculate()
    {
        let result;
        let previousNum = parseFloat(this.previousOperand);
        let currentNum = parseFloat(this.currentOperand);
        let operation = this.operation;

        switch(operation)
        {
            case '+':
                result = previousNum + currentNum
                break
            case '-':
                result = previousNum - currentNum
                break
            case '*':
                result = previousNum * currentNum
                break
            case '÷':
                if(currentNum === 0) // If user attempts to divide by 0:
                {
                    result = 8008135
                    break
                }
                result = previousNum / currentNum
                break
            default:
                return
        }
        this.currentOperand = result;
        this.operation = undefined;
        this.previousOperand = '';
    }

    updateScreen()
    {
        this.currentScreenText.innerText = this.currentOperand;
        this.previousScreenText.innerText = this.previousOperand;
        if(this.operation != undefined)
        {
            this.previousScreenText.innerText = this.previousOperand + this.operation;
        }
    }
}

// Retrieve buttons:
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');

// Retrieve screens:
const previousScreenText = document.querySelector('[data-previous-operand]');
const currentScreenText = document.querySelector('[data-current-operand]');

// Start calculator instance:
const calculator = new Calculator(previousScreenText, currentScreenText);

// Add button event listeners:
numberButtons.forEach(button => 
    button.addEventListener('click', () =>
    {
        calculator.appendNumber(button.innerText);
        calculator.updateScreen();
    }))

operatorButtons.forEach(button => 
    button.addEventListener('click', () =>
    {
        calculator.chooseOperator(button.innerText);
        calculator.updateScreen();
    }))

equalsButton.addEventListener('click', () =>
{
    calculator.calculate();
    calculator.updateScreen();
})

clearButton.addEventListener('click', () =>
{
    calculator.clearScreen();
    calculator.updateScreen();
})

deleteButton.addEventListener('click', () =>
{
    calculator.deleteNumber();
    calculator.updateScreen();
})

// Keyboard event listener:
window.addEventListener('keydown', e =>
{
    handleKeyboardEvent(e.key);
})

function handleKeyboardEvent(key)
{
    if(key >= 0 && key <= 9 || key === '.')
    {
        calculator.appendNumber(key);
        calculator.updateScreen();
    }
    else if(key === '+' || key === '-' || key === '*')
    {
        calculator.chooseOperator(key);
        calculator.updateScreen();
    }
    else if(key === '/')
    {
        calculator.chooseOperator('÷');
        calculator.updateScreen();
    }
    else if(key === 'Backspace')
    {
        calculator.deleteNumber();
        calculator.updateScreen();
    }
    else if(key === 'Enter' || key === '=')
    {
        calculator.calculate();
        calculator.updateScreen();
    }
    else if(key === 'Delete')
    {
        calculator.clearScreen();
        calculator.updateScreen();
    }
}