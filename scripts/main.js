const keyboard = document.querySelector('.keyboard');

const calculator = document.querySelector(".screen"); //Gonna store some variables
const display = document.querySelector('.input p') //Display what is typed in and also answer



const calculate = (n1, operator, n2) => {
    let result = ''
    if (operator === 'add') { //If add button was clicked
        result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'subtract') { //If subtract button was clicked
        result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply') { //If multiply button was clicked
        result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2)
    }

    return result
}


keyboard.addEventListener('click', e => {
    if (e.target.matches('button')) { //If a button is clicked;
        const buttonClicked = e.target //Button that was clicked
        const action = buttonClicked.dataset.action
        const keyContent = buttonClicked.textContent
        const displayedNum = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType

        if (!action) { 
            //if any of the number button was clicked; 
            if (
                displayedNum === '0' ||
                previousKeyType === 'operator' ||
                previousKeyType === 'calculate'
            ) {
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
            calculator.dataset.previousKeyType = 'number'
        }

        if (action === 'decimal') {
                //if (".") button was clicked
            if (!displayedNum.includes('.')) {
                // if the display text included (".") dont add again
                display.textContent = displayedNum + '.'
            } else if (
                previousKeyType === 'operator' ||
                previousKeyType === 'calculate'
            ) {
                display.textContent = '0.'
            }
            calculator.dataset.previousKeyType = 'decimal'
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum

            if (
                firstValue &&
                operator &&
                previousKeyType !== 'operator' &&
                previousKeyType !== 'calculate'
            )
            
                // THis calculates it
            {
                const calcValue = calculate(firstValue, operator, secondValue)
                display.textContent = calcValue
                calculator.dataset.firstValue = calcValue
            } else {
                calculator.dataset.firstValue = displayedNum
            }

            buttonClicked.classList.add('is-depressed')
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.operator = action
        }

        if (action === 'clear') {
            calculator.dataset.firstValue = ''
            calculator.dataset.modValue = ''
            calculator.dataset.operator = ''
            calculator.dataset.previousKeyType = ''
            display.textContent = 0
            calculator.dataset.previousKeyType = 'clear'
        }

        if (action === 'calculate') {
            let firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            let secondValue = displayedNum

            if (firstValue) {
                if (previousKeyType === 'calculate') {
                    firstValue = displayedNum
                    secondValue = calculator.dataset.modValue
                }

                display.textContent = calculate(firstValue, operator, secondValue)
            }

            calculator.dataset.modValue = secondValue
            calculator.dataset.previousKeyType = 'calculate'
        }
    }
})
