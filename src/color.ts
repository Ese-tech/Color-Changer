// Get elements by their IDs and typecast them for better type safety
const changeColorButton = document.getElementById(
	"changeColorButton"
) as HTMLButtonElement;
const resetColorButton = document.getElementById(
	"resetColorButton"
) as HTMLButtonElement;
const copyColorButton = document.getElementById(
	"copyColorButton"
) as HTMLButtonElement;
const toggleDarkModeButton = document.getElementById(
	"toggleDarkModeButton"
) as HTMLButtonElement;
const colorPicker = document.getElementById("colorPicker") as HTMLInputElement;
const colorCodeElement = document.getElementById("colorCode") as HTMLDivElement;
const colorHistoryElement = document.getElementById(
	"colorHistory"
) as HTMLDivElement;

let colorHistory: string[] = [];

// Generate a random 6-character hex color
const getRandomColor = (): string => {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};
// console.log(getRandomColor());

// Update color history array and the display
const updateColorHistory = (color: string): void => {
	colorHistory.push(color);
	if (colorHistory.length > 5) {
		colorHistory.shift(); // Keep only the last 5 colors
	}
	updateColorHistoryDisplay();
	saveColorHistory();
};

// Update the color history display in the DOM
const updateColorHistoryDisplay = (): void => {
	colorHistoryElement.innerHTML =
		"Color History: " +
		colorHistory
			.map(
				(c) =>
					`<div class="colorBox" style="background-color: ${c}; width: 20px; height: 20px; display: inline-block; margin: 2px;"></div>`
			)
			.join("");
};

// Save color history to localStorage
const saveColorHistory = (): void => {
	localStorage.setItem("colorHistory", JSON.stringify(colorHistory));
};
// console.log(getRandomColor());

// Load color history from localStorage
const loadColorHistory = (): void => {
	const savedHistory = localStorage.getItem("colorHistory");
	if (savedHistory) {
		colorHistory = JSON.parse(savedHistory);
		updateColorHistoryDisplay();
	}
};

// Show a tooltip-like feedback when the color is copied
const showCopyFeedback = (): void => {
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
	}, 3000); // Tooltip disappears after 3 seconds
};

// Change the background color and update the history
changeColorButton.addEventListener("click", () => {
	const newColor = getRandomColor();
	document.body.style.backgroundColor = newColor;
	colorCodeElement.innerText = `Current Color: ${newColor}`;
	updateColorHistory(newColor);
});

// Reset the background color and clear the history
resetColorButton.addEventListener("click", () => {
	document.body.style.backgroundColor = "#FFFFFF";
	colorCodeElement.innerText = "Current Color: #FFFFFF";
	colorHistory = [];
	colorHistoryElement.innerHTML = "Color History: ";
	saveColorHistory();
});

// Change the background color using the color picker and update the history
colorPicker.addEventListener("input", (event) => {
	const newColor = (event.target as HTMLInputElement).value;
	document.body.style.backgroundColor = newColor;
	colorCodeElement.innerText = `Current Color: ${newColor}`;
	updateColorHistory(newColor);
});

// Copy the current color to the clipboard and show feedback
copyColorButton.addEventListener("click", async () => {
	const currentColor = colorCodeElement.innerText.split(": ")[1];
	try {
		await navigator.clipboard.writeText(currentColor);
		showCopyFeedback();
	} catch (err) {
		console.error("Failed to copy color: ", err);
	}
});
