function operate(operator, n1, n2) {
    const add = (n1, n2) => n1 + n2;
    const subtract = (n1, n2) => n1 - n2;
    const multiply = (n1, n2) => n1 * n2;
    const divide = (n1, n2) => {
        let result = n2 === 0 ? 'ERROR Division by Zero!' : n1 / n2

        const divisionLength = result
            .toString()
            .length;

        if (divisionLength > 2) return result.toFixed(9);

        return result;
    };

    switch (operator) {
        case "+":
            return add(n1, n2);
        case "-":
            return subtract(n1, n2);
        case "*":
            return multiply(n1, n2);
        case "/":
            return divide(n1, n2);
    }
}

document.querySelector(".output").textContent = operate('/', 10, 3); 

console.log();