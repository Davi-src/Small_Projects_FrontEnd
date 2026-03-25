const checkboxEl = document.getElementById("checkbox");
const btnEl = document.getElementById("btn");

btnEl.addEventListener("click", () => {
  let content = document.querySelector(".text");
  content.classList.toggle("active");

  if (content.classList.contains("active"))
    return (btnEl.textContent = "Ler menos");

  checkboxEl.checked = true;

  return (btnEl.textContent = "Ler mais");
});
