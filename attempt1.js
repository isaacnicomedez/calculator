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


function eventHandler() {
    const btns = document.querySelectorAll("button"); 
    const output = document.querySelector(".output");
    
    let expression = "";

    btns.forEach(btn => {
        btn.addEventListener("click", e => {
            const value = e.target.textContent;
            
            expression += value;
            output.textContent = expression;

            if (value === " = ") {
                expressionHandler(expression);
            }
        });
    });
}

function expressionHandler(expression) {
    const strArr = expression.split(" ");

    const expressionArr = strArr.map(n => {
        const converted = +n;

        return Number.isNaN(converted) ? n : converted; 
    });

    const calculated = expressionArr.map((n, i) => {
        const prev = expressionArr[i - 1];
        const next = expressionArr[i + 1];
        if (n === "+") {
            return operate(n, prev, next);
        }
    });

    console.log(calculated);
}

eventHandler();