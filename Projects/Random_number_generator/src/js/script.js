// Inputs
const minInput = document.getElementById("min");
const maxInput = document.getElementById("max");
// Controls
const btnGenerate = document.getElementById("btn-Generate");
const btnClear = document.getElementById("btn-Clear");
// Container Num Generate
const currentContainer = document.querySelector(".current-num");
const currentNum = document.getElementById("current-num");
// Container History
const historyContainer = document.querySelector(".history");
const numHistory = document.querySelector(".num-history");
const noHistory = document.querySelector(".no-history");
const amount = document.getElementById("amount");

let history = [];

function numberGenerator() {
  const min = Number(minInput.value);
  const max = Number(maxInput.value);

  if (minInput.value === "" || maxInput.value === "") {
    alert("Preencha os campos para prosseguir.");
    return;
  }

  if (min >= max) {
    alert("O numero mínimor deve ser menor que o Máximo.");
    return;
  }

  const generatedNumber = Math.floor(Math.random() * (max - min + 1) + min); //Pseudoaleatório: Math.random() gera números pseudoaleatórios, não verdadeiramente aleatórios. Não use para fins de segurança. Intervalo: A fórmula para intervalo garante que tanto min quanto max possam ser retornados.

  noHistory.style.display = "none";

  currentContainer.style.display = "block";
  currentNum.textContent = generatedNumber;

  historyContainer.style.display = "block";

  addToHistory(generatedNumber);
}

function addToHistory(number) {
  history.push(number);

  const divNumHistory = document.createElement("div");
  divNumHistory.classList.add("num");

  divNumHistory.innerHTML = `
    <span id="past-number">${number}</span>
  `;

  numHistory.appendChild(divNumHistory);

  amount.textContent = history.length;

  noHistory.style.display = "none";
}

function clearAll() {
  minInput.value = "";
  maxInput.value = "";

  currentNum.textContent = "";

  history = [];
  numHistory.innerHTML = "";
  amount.textContent = "0";

  noHistory.style.display = "block";
  historyContainer.style.display = "none";
  currentContainer.style.display = "none";
}

btnGenerate.addEventListener("click", numberGenerator);
btnClear.addEventListener("click", clearAll);
