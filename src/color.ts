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
