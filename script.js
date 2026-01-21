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
    let result = n2 === 0 ? "ERROR Division by Zero!" : n1 / n2;

    const divisionLength = result
        .toString()
        .length;

    if (typeof(result) === "number" && divisionLength > 9) return result.toFixed(9);

    return result;
}

// 10, "+", 11, "*", 13, "-", 14, "/", 2
let expression = [10, "*", 10, "*", 10];

const operators = ["*", "/", "+", "-"];

let i = 0;

while (expression.length > 1) {
    let answer = 0;
    const current = expression[i];
    const prev = expression[i-1];
    const next = expression[i+1];

    if (operators.includes(current)) {
        answer = prev * next;
        expression.splice(i-1, 3, answer);
    } else {
        i++;
    }
}

console.log(expression);