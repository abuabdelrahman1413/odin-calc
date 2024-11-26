const container = document.getElementById("container");
const displarea = document.getElementById("display_area");

container.addEventListener("click", (e) => {
  if (e.target.nodeName == "BUTTON") {
    switch (e.target.textContent) {
      case "C":
        clear();
        break;
      case "Del":
        deleteLastDigit();
        break;
      case "=":
        evaluateResult();
        break;
      default:
        addToDisplayArea(e.target.textContent);
    }
  }
});

function clear() {
  displarea.textContent = "";
}

function deleteLastDigit() {
  const content = displarea.textContent;
  const newContent = content.slice(0, -1);
  displarea.textContent = newContent;
}

function addToDisplayArea(value) {
  displarea.textContent = displarea.textContent + value;
}

function evaluateResult() {
  const result = math.evaluate(displarea.textContent);

  displarea.textContent = result;
}
