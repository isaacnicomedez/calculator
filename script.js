let n1 = 0;
let n2 = 0;
let operator = "";

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

function operate(operator, n1, n2) {
    switch (operator) {
        case "+":
            return add(n1, n2);
        case "+":
            return add(n1, n2);
        case "&multiply":
            return multiply(n1, n2);
        case "&divide":
            return divide(n1, n2);
    }
}

console.log(operate("&multiply", 2, 2));