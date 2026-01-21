let n1 = "";
let n2 = "";
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
        case "-":
            return subtract(n1, n2);
        case "&times":
            return multiply(n1, n2);
        case "&divide":
            return divide(n1, n2);
    }
}

function eventHandler() {
    const btns = document.querySelectorAll("button");

    btns.forEach(btn => {
        btn.addEventListener("click", e => {
            const classN = e.target.className;
            const value = e.target.textContent;

            switch (classN) {
                case "digits":
                    if (operator) {
                        n2 += value;
                    }  else {
                        n1 += value;
                    }
                    break;
                case "operator":
                    if (n1 && !operator) {
                        operator = value;
                    } else {
                        break;
                    }
                    break;
            }
            
            console.log(n1, operator, n2);
        });
    });
}

eventHandler();

console.log(operate("&times", 2, 2));