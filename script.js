//your JS code here. If required.
// script.js
const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const currentInput = input;
    const nextInput = inputs[index + 1];

    // Move to next input if value is entered
    if (currentInput.value && nextInput) {
      nextInput.focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    const currentInput = input;
    const previousInput = inputs[index - 1];

    if (e.key === "Backspace") {
      if (currentInput.value === "" && previousInput) {
        previousInput.focus();
      }
    }
  });
});
