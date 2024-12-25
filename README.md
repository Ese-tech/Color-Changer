# Color-Changer

This is a simple color changer app that allows users to change the background color of the app to a random color, reset the color, copy the current color to the clipboard, and toggle dark mode. The app also maintains a history of the last 5 colors used.

## Features

- **Change Color**: Click the "Change Color" button to change the background color to a random color.
- **Reset Color**: Click the "Reset Color" button to reset the background color to white and clear the color history.
- **Copy Color**: Click the "Copy Color" button to copy the current background color to the clipboard.
- **Toggle Dark Mode**: Click the "Toggle Dark Mode" button to switch between light and dark modes.
- **Color Picker**: Use the color picker to select a specific color for the background.
- **Color History**: The app maintains a history of the last 5 colors used and displays them.

## Installation

1. Clone the repository:

   ```sh
   git clone <https://github.com/Ese-tech/Color-Changer>
   cd Color-Changer
   ```

2. Install dependencies:
   ```sh
   bun install
   ```

## Usage

1. Start the development server:

   ```sh
   bun run start
   ```

2. Open your browser and navigate to `http://localhost:5502` to see the app in action.

## Project Structure

- **src/**: Contains the source files.
  - **color.html**: The HTML file for the app.
  - **color.ts**: The TypeScript file containing the app logic.
  - **input.css**: The CSS file for styling the app using Tailwind CSS.
- **dist/**: The output directory for the built files.
- **.vscode/**: Contains VSCode settings.
- **tailwind.config.js**: Configuration file for Tailwind CSS.
- **postcss.config.js**: Configuration file for PostCSS.
- **tsconfig.json**: Configuration file for TypeScript.
- **package.json**: Contains the project metadata and scripts.

## Scripts

- `dev`: Builds the TypeScript files and watches for changes.
- `build-css`: Builds the CSS files using Tailwind CSS and watches for changes.
- `start`: Runs both the `dev` and `build-css` scripts concurrently.

## Dependencies

- **autoprefixer**: ^10.4.20
- **postcss**: ^8.4.49
- **tailwindcss**: ^3.4.17
- **typescript**: ^5.7.2 (peer dependency)
