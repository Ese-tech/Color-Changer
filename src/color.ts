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
