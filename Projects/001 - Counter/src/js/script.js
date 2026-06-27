// Elements
const countEl = document.getElementById("counter");
const inputEl = document.querySelector("#value");

// Actions
const btnSub = document.querySelector("#btn-sub");
const btnClear = document.querySelector("#btn-clear");
const btnSum = document.querySelector("#btn-sum");

// Counter 
let counter = 0;

function updateUi() {
  countEl.textContent = counter;
}

// Event subtraction
btnSub.addEventListener("click", () => {
  const val = Number(inputEl.value);

  counter -= val;

  updateUi();
});

// Event Sum
btnSum.addEventListener("click", () => {
  const val = Number(inputEl.value);

  counter += val;

  updateUi();
});

// Event Clear
btnClear.addEventListener("click", () => {
  counter = 0;

  updateUi();
});

