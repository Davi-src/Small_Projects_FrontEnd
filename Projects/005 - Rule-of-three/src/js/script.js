// Value of input
const valueA = document.getElementById("value-a");
const valueB = document.getElementById("value-b");
const valueC = document.getElementById("value-c");

// Controls
const calculateBtn = document.getElementById("calculate-btn");
const clearBtn = document.getElementById("clear-btn");

// show Result in box
const resultBox = document.getElementById("result-box");

// Result hidden
const resultMessage = document.getElementById("result-message");
const resultText = document.getElementById("result-text");

function calculateRuleOfThree() {
  const a = Number(valueA.value);
  const b = Number(valueB.value);
  const c = Number(valueC.value);

  if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a !== 0) {
    const x = (b * c) / a;

    resultBox.textContent = x.toFixed(2);

    resultText.innerHTML = `
      <strong>Resultado:</strong>
      Se ${a} está para ${b},
      então ${c} está para
      <strong>${x.toFixed(2)}</strong>
    `;

    resultMessage.classList.remove("hidden");
  } else {
    resultBox.textContent = "?";

    resultText.textContent = "Preencha os campos corretamente.";

    resultMessage.classList.remove("hidden");
  }
}

function clearAll() {
  valueA.value = "";
  valueB.value = "";
  valueC.value = "";

  resultBox.textContent = "?";

  resultMessage.classList.add("hidden");
}

calculateBtn.addEventListener("click", calculateRuleOfThree);

clearBtn.addEventListener("click", clearAll);
