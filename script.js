const n1 = 0, n2 = 0, operator = "";

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
    if (operator === "+") {
        add(n1, n2);
    } else if (operator === "-") {
        subtract(n1 - n2);
    } else if (operator === "*") {
        multiply(n1, n2);
    } else if (operator === "/") {
        divide(n1, n2);
    }
}