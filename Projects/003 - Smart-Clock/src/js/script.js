// initial settings
let isDarkMode = false;
let is24Hour = true;
let currentTime = new Date();

const body = document.body;

// Elements
const timeEl = document.getElementById("time");
const periodEl = document.getElementById("ampm");
const dateEl = document.getElementById("date");

// Control buttons
const toggleFormatBtn = document.getElementById("toggle-format");
const toggleThemeBtn = document.getElementById("toggle-theme");

function formatTime(date) {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  let period = "";

  if (!is24Hour) {
    period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
  }

  return {
    time: `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`,
    period,
  };
}

function formatDate(date) {
  const days = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return `${days[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;
}

function render() {
  const { time, period } = formatTime(currentTime);

  // Atualiza hora
  timeEl.textContent = time;

  // AM / PM
  if (!is24Hour) {
    periodEl.textContent = period;
    periodEl.classList.remove("hidden");
  } else {
    periodEl.classList.add("hidden");
  }

  // Data
  dateEl.textContent = formatDate(currentTime);

  // Tema
  body.classList.toggle("dark", isDarkMode);

  // Texto dos botões
  toggleFormatBtn.textContent = `Formato ${is24Hour ? "24h" : "12h"}`;
  toggleThemeBtn.textContent = isDarkMode ? "☀️ Modo Claro" : "🌙 Modo Escuro";
}

toggleFormatBtn.addEventListener("click", () => {
  is24Hour = !is24Hour;
  render();
});

toggleThemeBtn.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  render();
});

setInterval(() => {
  currentTime = new Date();
  render();
}, 1000);

render();