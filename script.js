document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".code");

  inputs.forEach((input, index) => {
    // Handle forward typing
    input.addEventListener("input", (e) => {
      const value = e.target.value;

      // Ensure only the first character is kept
      e.target.value = value.slice(0, 1);

      if (value && index < inputs.length - 1) {
        inputs[index + 1].focus(); // Focus next input
      }
    });

    // Handle backward navigation with Backspace
    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && index > 0 && !e.target.value) {
        inputs[index - 1].focus(); // Focus previous input
      }
    });

    // Clear focus on page reload
    input.addEventListener("focus", () => {
      setTimeout(() => {
        input.select();
      }, 0);
    });
  });
});
