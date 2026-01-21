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

let expression = [10, "+", 11, "*", 13, "-", 14, "/", "2"];

expression.map((val, i) => {
    if (val === "*" || val === "/") {
        const prev = i - 1;
        const next = i + 1;
        if (val === "*") {
            expression.splice(prev, 3, expression[prev] * expression[next]);
        } else if (val === "/") {
            expression.splice(prev, 3, expression[prev] / expression[next]);
        }
    }
});

console.log(expression);