// Inputs
const minEl = document.getElementById("min");
const maxEl = document.getElementById("max");

// Actions
const btnGenerate = document.querySelector("#btn-generate");
const btnClear = document.querySelector("#btn-clear");

// Container Generate number
const currentContainer = document.querySelector(".current-container");
const currentNum = document.querySelector("#current-number");

// Container History
const containerHistory = document.querySelector(".history");
const amount = document.getElementById("amount");
const numHistory = document.querySelector(".num-history");

// No History
const noHistory = document.querySelector(".hide-history");


let history = [];

function numberGenerator() {
  if (minEl.value === "" || maxEl.value === "") {
    alert("Preencha os campos para prosseguir.");
    return;
  }

  const min = Number(minEl.value);
  const max = Number(maxEl.value);

  if (min >= max) {
    alert("O Número mínimo deve ser menor que o número máximo.");
    return;
  }

  const generatedNumber = Math.floor(Math.random() * (max - min + 1) + min); // Pseudoaleatório: Math.random() gera números pseudoaleatórios, não verdadeiramente aleatórios. Não use para fins de segurança. Intervalo: A fórmula para intervalo garante que tanto min quanto max possam ser retornados.

  // Hide nohistory
  noHistory.style.display = "none";

  // Show Current Number
  currentContainer.style.display = "block";
  currentNum.textContent = generatedNumber;

  // Show History
  containerHistory.style.display = "block";

  addToHistory(generatedNumber);

}

function addToHistory(number) {
  history.push(number);

  //Create new element div
  const divNumHistory = document.createElement("div");
  divNumHistory.classList.add("num");

  divNumHistory.innerHTML = `
    <span id="past-number">${number}</span>
  `;

  numHistory.appendChild(divNumHistory);

  amount.textContent = history.length;

  noHistory.style.display = "none";
}

function clearall() {
  minEl.value = "";
  maxEl.value = "";

  currentNum.textContent = "";

  history = [];
  numHistory.innerHTML = "";
  amount.textContent = "0";

  noHistory.style.display = "block";
  containerHistory.style.display = "none";
  currentContainer.style.display = "none";
}

btnGenerate.addEventListener("click", numberGenerator);
btnClear.addEventListener("click", clearall)