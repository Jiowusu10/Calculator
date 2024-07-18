document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".pad button");
    let currentInput = " ";
    
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const buttonText = button.textContent;
        
        if (buttonText === "CL") {
          currentInput = "";
        } else if (buttonText === "DEL") {
          currentInput = currentInput.slice(0, -1);
        } else if (buttonText === "=") {
          try {
            currentInput = eval(currentInput).toString();
          } catch (error) {
            currentInput = "Error";
          }
        } else {
          currentInput += buttonText;
        }
        
        display.textContent = currentInput;
      });
    });
  });
  