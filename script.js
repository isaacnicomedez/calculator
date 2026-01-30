function add(n1, n2) {
    return n1 + n2;
}
function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}


function operate() {
    let expression = [10, "/", 0];
    const operators = [["*", "/"], ["+", "-"]];

    const calculated = operators.forEach(operator => {
        let i = 0;

        while (expression.some(val => operator.includes(val))) {
            let answer = 0;
            const current = expression[i];
            const prev = expression[i-1];
            const next = expression[i+1];

            if (operator.includes(current)) {
                if (current === "*") {
                    answer = multiply(prev, next);
                } else if (current === "/") {
                    if (next === 0) return "ZERO DIVISION ERROR!";
                    answer = divide(prev, next);
                } else if (current === "+") {
                    answer = add(prev, next);
                } else if (current === "-") {
                    answer = subtract(prev, next);
                }
                expression.splice(i-1, 3, answer);
                i = 0;
            } else {
                if (i > expression.length) i = 0;
                i++;
            }
        }
    });

    console.log(expression);
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

console.log(operate());
