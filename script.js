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

    for (const operator of operators) {
        let index = expression.findIndex(val => operator.includes(val));

        while (index !== -1) {
            const current = expression[index];
            const prev = expression[index-1];
            const next = expression[index+1];
            let answer = 0;

            if (current === "*") {
                answer = multiply(prev, next);
            } else if (current === "/") {
                answer = divide(prev, next);
            } else if (current === "+") {
                answer = add(prev, next);
            } else if (current === "-") {
                answer = subtract(prev, next);
            }
        }
    }

    return expression[0];
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

