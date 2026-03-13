const display = document.getElementById("display");
let currentInput = "";

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "CE") {
            currentInput = "";
            display.textContent = "0";
        } 
        else if (value === "=") {
            try {
                currentInput = eval(currentInput).toString();
                display.textContent = currentInput;
            } catch {
                display.textContent = "Error";
            }
        } 
        else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});