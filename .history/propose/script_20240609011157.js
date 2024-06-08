const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const swp = document.querySelector(".buttons");

noButton.addEventListener("mouseenter", () => {
  const yesIndex = Array.from(swp.children).indexOf(yesButton);
  const noIndex = Array.from(swp.children).indexOf(noButton);

  if (yesIndex < noIndex) {
    swp.insertBefore(noButton, yesButton);
  } else swp.insertBefore(yesButton, noButton);
});
