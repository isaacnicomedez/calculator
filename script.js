function add(n1, n2) {
    return parseFloat(n1) + parseFloat(n2);
}

function subtract(n1, n2) {
    return parseFloat(n1)- parseFloat(n2);
}

function multiply(n1, n2) {
    return parseFloat(n1) * parseFloat(n2);
}

function divide(n1, n2) {
    return parseFloat(n1) / parseFloat(n2);
}


function operate() {
    let expression = [10, "/", 1, "*", 1, "+", 8, "-", 2, "/", 2];
    const operators = [["*","/"],["+","-"]];
}


function handleClicks() {
    const expression = [];

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", e => {
            if (button.classList.contains("digits")) {
                if (button.classList.contains("dot")) button.disabled = true;
                expression.push(button.textContent);
            } else if (button.classList.contains("operator")) {
                expression.push(button.dataset.op);
            } else if (button.classList.contains("clear")) {
                expression.length = 0;
            // } else if (button.classList.contains("equals")) {
                
            }
            console.log(expression);
        });
    });
}

