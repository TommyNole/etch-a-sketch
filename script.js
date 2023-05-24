// Variables
const sketchPanel = document.querySelector("#sketch-panel");
let sliderValue = document.querySelector("#pixel-count");
const sliderOutputValue = document.querySelector("#slider-value");
let colorValue = document.getElementById("color-picker").value;

updateSliderValueDisplay();

// Create sketch-board grid
createGrid(sliderValue.value);

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
document.querySelector("#pixel-count").addEventListener("input", () => {
  updateSliderValueDisplay();
  changeGrid();
});

function updateSliderValueDisplay() {
  sliderOutputValue.textContent = sliderValue.value;

  sliderValue.addEventListener("input", (event) => {
    sliderOutputValue.innerHTML = event.target.value;
  });
}

function changeGrid() {
  sketchPanel.innerHTML = "";
  createGrid(document.querySelector("#pixel-count").value);
}

// Listener for Color Picker
document.querySelector("#color-picker").addEventListener("change", () => {
  colorValue = document.querySelector("#color-picker").value;
  console.log(colorValue);
});

// Clear Screen Button
document.querySelector("#clear-screen").addEventListener("click", () => {
  changeGrid();
});

// Generate Random Color
document.querySelector("#rainbow-btn").addEventListener("click", () => {
  createRandomColor();
});

function createRandomColor(size) {
  sketchPanel.innerHTML = "";
  randColor(sliderValue.value);
  function randColor(size) {
    for (let i = 0; i < size; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      sketchPanel.appendChild(row);
      for (let j = 0; j < size; j++) {
        const column = document.createElement("div");
        column.classList.add("column");
        column.addEventListener("mouseover", () => {
          const randomColor = Math.floor(Math.random() * 16777215).toString(16);
          column.style.backgroundColor = `#${randomColor}`;
        });
        row.appendChild(column);
      }
    }
  }
}

// Reset All Button
document.querySelector("#reset-btn").addEventListener("click", () => {
  document.querySelector("#color-picker").value = "#000000";
  sketchPanel.innerHTML = "";
  colorValue = document.getElementById("color-picker").value;
  createGrid(sliderValue.value);
});
