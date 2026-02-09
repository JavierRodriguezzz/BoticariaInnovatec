const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.clicked) {
      return;
    }
    button.dataset.clicked = "true";
    button.textContent = "¡Listo!";
  });
});
