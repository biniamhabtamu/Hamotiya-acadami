let timeLeft = 3600; // 1 hour in seconds

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateCountdown() {
  const countdown = document.getElementById('countdown');
  countdown.textContent = formatTime(timeLeft);
  if (timeLeft > 0) {
    timeLeft--;
  }
}

setInterval(updateCountdown, 1000);
