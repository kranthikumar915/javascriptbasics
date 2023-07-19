// DOM Elements
let answer = document.getElementById('answer');
let buttons = document.querySelectorAll('button');

// result
let screenValue = '';

for(let item of buttons) {
    item.addEventListener('click', (event) => {
        let buttonTxt = event.target.innerText;
        // alert('You clicked on ' + buttonTxt);

        if(buttonTxt === "C") {
            screenValue = "";
            answer.value = screenValue;
        } else if(buttonTxt === "=") {
            checkEvaluate();
        } else {
            screenValue += buttonTxt;
            answer.value = screenValue;
        }
    });
}

function checkEvaluate() {
    answer.value = eval(screenValue);
}