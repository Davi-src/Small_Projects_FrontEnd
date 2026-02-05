// indicador de status
const statusIndicator = document.getElementById("status-indicator");
const statusText = document.getElementById("status-text");

// Timer
const timerEl = document.getElementById("timer");

// Timer Container
const timerCard = document.getElementById('timer-card')

// Controles
const toggleBtn = document.getElementById("toggleBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");

// Histórico de voltas
const lapsContainer = document.getElementById("lapsContainer");
const lapsList = document.getElementById("lapsList");

let time = 0;
let state = "stopped";
let interval = null;
let laps = [];
let lapCount = 0;

// Format time
function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const milleseconds = Math.floor((ms % 1000) / 10);

  return `${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")} . ${String(milleseconds).padStart(2, "0")}`;
}

function updateUI() {
  timerEl.textContent = formatTime(time);
  lapBtn.disabled = state !== 'running';

  if (state === 'running') {
    toggleBtn.textContent = '⏸️ Pausar';
    toggleBtn.className = 'btn pause';
    statusIndicator.style.background = '#22c55e';
    timerCard.style.border = '1px solid #22c55e';
    statusText.textContent = 'Rodando';
  } else if (state === 'paused') {
    toggleBtn.textContent = '▶️ Continuar';
    toggleBtn.className = 'btn start';
    statusIndicator.style.background = '#eab308';
    timerCard.style.border = '1px solid #eab308';
    statusText.textContent = 'Pausado';
  } else {
    toggleBtn.textContent = '▶️ Iniciar';
    toggleBtn.className = 'btn start';
    statusIndicator.style.background = '#ef4444';
    timerCard.style.border = 'none';
    statusText.textContent = 'Parado';
  }
}

function startTime() {
  if (state === "running") return;
  state = "running";
  const startTime = Date.now() - time;

  interval = setInterval(() => {
    time = Date.now() - startTime;
    updateUI();
  }, 10);
}

function pauseTimer() {
  clearInterval(interval);
  interval = null;
  state = "paused";
  updateUI();
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  time = 0;
  state = "stopped";
  laps = [];
  lapCount = 0;
  lapsList.innerHTML = "";
  lapsContainer.classList.add("hidden");
  updateUI();
}

function toggleTimer() {
  state === "running" ? pauseTimer() : startTime();
}

function recordLap() {
  if (state !== "running") return;

  lapCount++;
  laps.unshift({ id: lapCount, time });

  lapsList.innerHTML = laps.map((lap, i) => {
    const diff = laps[i + 1]
      ? `+ ${formatTime(lap.time - laps[i + 1].time)}`
      : "";
    return `
      <div class="lap-item">
        <span>Volta ${lap.id}</span>
        <span>${formatTime(lap.time)} ${diff}</span>
      </div>
    `;
  }).join('');

  lapsContainer.classList.remove('hidden');
}

toggleBtn.onclick = toggleTimer;
resetBtn.onclick = resetTimer;
lapBtn.onclick = recordLap;

window.addEventListener("keydown", (e) => {
  if (["Space", "KeyR", "KeyL"].includes(e.code)) e.preventDefault();
  if (e.code === "Space") toggleTimer();
  if (e.code === "KeyR") resetTimer();
  if (e.code === "KeyL") recordLap();
});
