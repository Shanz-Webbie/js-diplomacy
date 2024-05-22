'use strict';
function changeColor() {
const colorChangeElements = document.querySelectorAll('.color-change');
for( const element of colorChangeElements){
    element.classList.add('red');
    }
}
function validateInput(event){
    event.preventDefault();
    const userInput = document.querySelector('#number-input');
    const userNumber = Number(userInput.value);

    const formFeedback = document.querySelector('#formFeedback');
    if (isNaN(userNumber) || userNumber >= 10) {
        formFeedback.innerText = "Please enter a smaller number";
    } else {
        formFeedback.innerText = "You are good to go!"
    }
}
