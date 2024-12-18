// Get elements by their IDs and typecast them for better type safety
const changeColorButton = document.getElementById(
	"changeColorButton"
) as HTMLButtonElement;
const resetColorButton = document.getElementById(
	"resetColorButton"
) as HTMLButtonElement;
const colorCodeElement = document.getElementById("colorCode") as HTMLDivElement;
const colorHistoryElement = document.getElementById(
	"colorHistory"
) as HTMLDivElement;

let colorHistory: string[] = [];

// Generate a random 8-character hex color
const getRandomColor = (): string => {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 8; i++) {
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
