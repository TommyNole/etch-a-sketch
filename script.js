const sketchPanel = document.querySelector("#sketch-panel");

createGrid(10);
function createGrid(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    sketchPanel.appendChild(row);
    for (let j = 0; j < size; j++) {
      const column = document.createElement("div");
      column.classList.add("column");
      column.addEventListener("mouseover", () => {
        column.style.backgroundColor = "black";
      });
      row.appendChild(column);
    }
  }
}

function sliderChange(val) {
  document.querySelector("#slider-value").innerHTML = val;
}
