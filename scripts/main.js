
const display = document.querySelector('.input p');
const result = document.querySelector('.results p');
const storeValue = document.querySelector('.hiddenDiv');
const keyboard = document.querySelector('.keyboard');

keyboard.addEventListener('click', calculator)

function calculator(e) {
    const buttonClicked = e.target;
    const displayNum = display.innerHTML;

    if (buttonClicked.matches('button')) {
        const number = buttonClicked.dataset;

        if (number.number) //if any of the number button is clicked,this happens
        {
            if (displayNum === '0') {
                display.innerHTML = buttonClicked.innerHTML;
                return;
            };
            display.innerHTML = displayNum + buttonClicked.innerHTML;
        };

        if (number.clear) //if Ac button is clicked 
        {
            display.innerHTML = ``;
        }

        if (number.dot) {
            display.innerHTML += `.`;
        }



        if (buttonClicked.dataset.symbol) {
            const symbol = buttonClicked.dataset.symbol;
            
            if (symbol === 'plus'
                || symbol === "subtract"
                || symbol === "divide"
                || symbol === "multiply") {
                storeValue.dataset.firstValue = displayNum;
                storeValue.dataset.symbol = symbol;
            }

            if (symbol === "equal") {
                const firstValue = storeValue.dataset.firstValue;
                const secondValue = displayNum;
                const secondNumber = storeValue.dataset.symbol;
                console.log(firstValue);
                console.log(secondNumber);
                console.log(secondValue);
            }

        };

    }
}


