// Your code here
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});

function moveDodgerRight() {
  const dodger = document.getElementById("dodger");
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) {
    // stop moving right at the right edge of the game window
    dodger.style.left = `${left + 1}px`;
  }
}
function moveDodgerLeft() {
  const dodger = document.getElementById("dodger");
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    // stop moving left at the left edge of the game window
    dodger.style.left = `${left - 1}px`;
  }
}
