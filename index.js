let container = document.getElementById("container");
let rangeDisplay = document.getElementById("rangeDisplay");
let gridRange = document.getElementById("gridRange");
let colorPicker = document.getElementById("colorPicker");
let gridButton = document.getElementById("gridButton");
let clear = document.getElementById("clear");

function gridCreate(num) {
  container.innerText = "";
  rangeDisplay.innerText = ` Gird : ${num}x${num}`;
  let gridSize = num * num;
  for (let i = 1; i <= gridSize; i++) {
    let divs = document.createElement("div");
    divs.setAttribute("class", "childDiv");
    gridButton.addEventListener("click", () => {
      divs.classList.toggle("childDiv");
    });

    divs.style.height = `${100 / num}%`;
    divs.style.width = `${100 / num}%`;
    container.appendChild(divs);
    isDragging = false;
    divs.addEventListener("click", function () {
      isDragging = !isDragging;
    });
    divs.addEventListener("mousemove", () => {
      if (isDragging == true) {
        divs.style.backgroundColor = colorPicker.value;
      }
    });
  }
}

gridCreate(gridRange.value);

gridRange.addEventListener("input", () => {
  gridCreate(gridRange.value);
});

clear.addEventListener("click", () => {
  container.innerText = "";
});
