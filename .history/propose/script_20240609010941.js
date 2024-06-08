const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const cta = document.querySelector(".buttons");

noButton.addEventListener("mouseenter", () => {
  const yesIndex = Array.from(cta.children).indexOf(noButton);
});
