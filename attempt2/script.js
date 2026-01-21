let expression = "";

function processVal() {
    const buttons = document.querySelectorAll("button");
    
    buttons.forEach(button => {
        button.addEventListener("click", e => {
            const value = e.target.textContent;
            const digits = e.target.classList.contains("digits");
            const operator = 
            
            if (digits) {
                expression += value;
                console.log(expression);
            }
        });
    })
}

processVal();