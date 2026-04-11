const countEl = document.getElementById("counter");
const inputEl = document.querySelector("#value");

// actions
const btnSub = document.querySelector("#btn-sub");
const btnclear = document.querySelector("#btn-clear");
const btnSom = document.querySelector("#btn-sum");

let counter = 0;

function updateUi() {
  countEl.textContent = counter;
}

btnSub.addEventListener("click", () => {
  const val = Number(inputEl.value);

  counter -= val;

  updateUi();
});

btnSom.addEventListener("click", () => {
  const val = Number(inputEl.value);

  counter += val;

  updateUi();
});

btnclear.addEventListener("click", () => {
  counter = 0;

  updateUi();
});
