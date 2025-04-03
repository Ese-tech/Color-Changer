// src/color.ts
var changeColorButton = document.getElementById("changeColorButton");
var resetColorButton = document.getElementById("resetColorButton");
var copyColorButton = document.getElementById("copyColorButton");
var toggleDarkModeButton = document.getElementById("toggleDarkModeButton");
var colorPicker = document.getElementById("colorPicker");
var colorCodeElement = document.getElementById("colorCode");
var colorHistoryElement = document.getElementById("colorHistory");
var colorHistory = [];
var getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0;i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
var updateColorHistory = (color) => {
  colorHistory.push(color);
  if (colorHistory.length > 5) {
    colorHistory.shift();
  }
  updateColorHistoryDisplay();
  saveColorHistory();
};
var updateColorHistoryDisplay = () => {
  colorHistoryElement.innerHTML = "Color History: " + colorHistory.map((c) => `<div class="colorBox" style="background-color: ${c}; width: 20px; height: 20px; display: inline-block; margin: 2px;"></div>`).join("");
};
var saveColorHistory = () => {
  localStorage.setItem("colorHistory", JSON.stringify(colorHistory));
};
var loadColorHistory = () => {
  const savedHistory = localStorage.getItem("colorHistory");
  if (savedHistory) {
    colorHistory = JSON.parse(savedHistory);
    updateColorHistoryDisplay();
  }
};
var showCopyFeedback = () => {
  const tooltip = document.createElement("div");
  tooltip.innerText = "Color copied!";
  tooltip.style.position = "fixed";
  tooltip.style.bottom = "20px";
  tooltip.style.right = "20px";
  tooltip.style.backgroundColor = "#333";
  tooltip.style.color = "#fff";
  tooltip.style.padding = "10px";
  tooltip.style.borderRadius = "5px";
  tooltip.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  tooltip.style.zIndex = "1000";
  document.body.appendChild(tooltip);
  setTimeout(() => {
    document.body.removeChild(tooltip);
  }, 3000);
};
changeColorButton.addEventListener("click", () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  colorCodeElement.innerText = `Current Color: ${newColor}`;
  updateColorHistory(newColor);
});
resetColorButton.addEventListener("click", () => {
  document.body.style.backgroundColor = "#FFFFFF";
  colorCodeElement.innerText = "Current Color: #FFFFFF";
  colorHistory = [];
  colorHistoryElement.innerHTML = "Color History: ";
  saveColorHistory();
});
copyColorButton.addEventListener("click", async () => {
  const currentColor = colorCodeElement.innerText.split(": ")[1];
  try {
    await navigator.clipboard.writeText(currentColor);
    showCopyFeedback();
  } catch (err) {
    console.error("Failed to copy color: ", err);
  }
});
colorPicker.addEventListener("input", (event) => {
  const newColor = event.target.value;
  document.body.style.backgroundColor = newColor;
  colorCodeElement.innerText = `Current Color: ${newColor}`;
  updateColorHistory(newColor);
});
toggleDarkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
window.addEventListener("load", loadColorHistory);
