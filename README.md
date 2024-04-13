# Service Agreement Renderer

This React application parses a JSON file and renders it as a formatted service agreement. The application highlights specific parts of the agreement, such as clauses and mentions, according to the data provided in the JSON file.

## Features

- **Dynamic Rendering**: Parses and renders content from JSON, accommodating nested structures and formatting marks.
- **Styled Components**: Renders text with various styles, such as bold and underline, and applies colored backgrounds to mentions.
- **Responsive Layout**: Ensures the document flows correctly on different screen sizes.

## Project Structure

- `src/DocumentSection.js`: Handles the rendering of the document sections.
- `src/Clause.js`: Renders clause elements, including nested clauses and lists.
- `src/Mention.js`: Displays mention elements with colored backgrounds.
- `src/App.js`: The main component that imports and renders the JSON data.
- `src/input.json`: Contains the mock data for the service agreement.
- `src/App.css`: Contains styles applied to the document elements.

## Running the Application

To run this application:

1. Ensure you have [Node.js](https://nodejs.org/) installed on your system.
2. Open a terminal and navigate to the project's root directory.
3. Install the necessary dependencies by running `npm install`.
4. Start the development server with `npm run dev`.

Upon running the last command, the application should open in your default web browser. If it doesn't, you can manually visit `http://localhost:3000` in your browser to view the application.