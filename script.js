document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".code");

  inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      const value = e.target.value;

      if (value.length > 1) {
        // If user pastes more than one character, take only the first character
        e.target.value = value.charAt(0);
      }

      if (value && index < inputs.length - 1) {
        // Move to the next input if available
        inputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !e.target.value && index > 0) {
        // Move to the previous input if it's empty
        inputs[index - 1].focus();
      }
    });
  });
});
