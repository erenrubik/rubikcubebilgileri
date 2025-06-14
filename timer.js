let startTime = null;
let running = false;
const display = document.getElementById("display");

function formatTime(ms) {
  const sec = (ms / 1000).toFixed(2);
  return `${sec} saniye`;
}

function toggleTimer() {
  if (!running) {
    running = true;
    startTime = Date.now();
    display.textContent = "Zamanlanıyor...";
  } else {
    running = false;
    const elapsed = Date.now() - startTime;
    display.textContent = formatTime(elapsed);
  }
}

document.body.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    toggleTimer();
  }
});
