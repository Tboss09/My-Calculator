// First Define all the Element i am gonna use

const numbers = document.querySelectorAll('[data-number]'); //Select all numbers
const symbols = document.querySelectorAll('[data-symbol]'); //Select all symbols
const equal = document.querySelector('[data-equal]'); //Select equal to button


function inputValueWhenPressed() {
    numbers.forEach(number => {
        number.addEventListener("click", inputNumberValue);
    })
    function inputNumberValue() {
        console.log(this.innerHTML);
    }
    return;
}
inputValueWhenPressed() 