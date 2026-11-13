// Elements
const counterEl = document.getElementById("counter");
const inputEl = document.querySelector("#value");

// Actions
const btnSub = document.getElementById("btn-sub");
const btnClear = document.getElementById("btn-clear");
const btnSum = document.getElementById("btn-sum");

// Counter
let counter = 0;

function updateUi() {
  counterEl.textContent = counter;
}

// Event subtraction
btnSub.addEventListener("click", () => {
  const val = Number(inputEl.value);

  counter -= val;

  updateUi();
});

// Event Clear
btnClear.addEventListener("click", () => {
  counter = 0;

  updateUi();
});

// Event Sum
btnSum.addEventListener("click", () => {
  const val = Number(inputEl.value);

  counter += val;

  updateUi();
});
