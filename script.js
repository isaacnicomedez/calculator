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


function operate() {
    let expression = [260, "+", 20, "/", 32, "-", 40, "*", 3];
    const operators = [["*", "/"], ["+", "-"]];

    let i = 0;

    operators.forEach(operator => {
        while (true) {
            let answer = 0;
            const current = expression[i];
            const prev = expression[i-1];
            const next = expression[i+1];

            if (operator.includes(current)) {
                if (current === "*") {
                    answer = multiply(prev, next);
                } else if (current === "/") {
                    answer = divide(prev, next);
                } else if (current === "+") {
                    answer = add(prev, next);
                } else if (current === "-") {
                    answer = subtract(prev, next);
                }
                expression.splice(i-1, 3, answer);
                i = 0;
                if (!(operator.some(op => expression.includes(op)))) break;
            } else {
                i++;
            }
        }
    });

    console.log(expression);
}