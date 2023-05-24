// Variables
const sketchPanel = document.querySelector("#sketch-panel");
let sliderValue = document.getElementById('pixel-count').value;
const sliderOutputValue = document.querySelector('#slider-value'); 
let colorValue = document.getElementById('color-picker').value;

// console.log(colorValue);



// Create sketch-board grid
createGrid(sliderValue);

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    sketchPanel.appendChild(row);
    for (let j = 0; j < size; j++) {
      const column = document.createElement("div");
      column.classList.add("column");
      column.addEventListener("mouseover", () => {
        column.style.backgroundColor = colorValue;
      });
      row.appendChild(column);
    }
  }
}

// Pixel Count Slider

document.querySelector('#pixel-count').addEventListener('change', () => {
  document.querySelector('#slider-value').value = sliderValue;
  changeGrid();
  console.log(sliderValue);
});

function changeGrid() {
  sketchPanel.innerHTML = '';
  createGrid(document.querySelector('#pixel-count').value);
}

// Listener for Color Picker
document.querySelector('#color-picker').addEventListener('change', () => { 
  colorValue = document.querySelector('#color-picker').value;
  console.log(colorValue);

});
