# SurferGame

SurferGame is an exciting browser-based game where you control a surfer navigating through the ocean, avoiding obstacles like rocks, sharks, and driftwood. The game features multiple difficulty levels, a scoring system, health meter, and progressive levels that increase in challenge as you play. It is designed to be played on both desktop and mobile devices and can be installed as a Progressive Web App (PWA) for offline play. See a working example at [**SurferGame by Gorombo**](https://gorombo.com/surfer/)

## Table of Contents

- [Features](#features)
- [Gameplay](#gameplay)
  - [Controls](#controls)
  - [Difficulty Levels](#difficulty-levels)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Running the Game Locally](#running-the-game-locally)
  - [Installing as a PWA](#installing-as-a-pwa)
- [Assets](#assets)
- [Development](#development)
  - [Project Structure](#project-structure)
  - [Modifying the Game](#modifying-the-game)
- [Known Issues](#known-issues)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- **Responsive Design**: Playable on both desktop and mobile devices.
- **Multiple Difficulty Levels**: Choose between Beginner, Novice, and Expert modes.
- **Dynamic Obstacles**: Randomly generated obstacles that increase in difficulty.
- **Scoring System**: Earn points by avoiding obstacles.
- **Health Meter**: Visual representation of the player's remaining lives.
- **Progressive Levels**: Game speed and difficulty increase as you advance.
- **Pause Menu**: Ability to pause the game with options to resume, return to main menu, or quit.
- **Offline Play**: Installable as a Progressive Web App for offline functionality.

## Gameplay

In SurferGame, you control a surfer navigating through an endless ocean, avoiding obstacles that come your way. The goal is to survive as long as possible, achieve the highest score, and progress through increasing levels of difficulty.

### Controls

#### Desktop Controls

- **Movement**:
  - **Left**: Press `Arrow Left` or `A`.
  - **Right**: Press `Arrow Right` or `D`.
  - **Up**: Press `Arrow Up` or `W`.
  - **Down**: Press `Arrow Down` or `S`.
- **Pause**: Press the `Escape` key or click on the game canvas.

#### Mobile Controls

- **Movement**: Touch and drag on the screen to move the surfer.
- **Pause**: Double-tap on the game canvas.

### Difficulty Levels

- **Beginner**:
  - Slower game speed.
  - Fewer obstacles.
  - Larger surfer size.
- **Novice**:
  - Moderate game speed.
  - Increased obstacle frequency.
  - Medium surfer size.
  - Starts at level 20.
- **Expert**:
  - Fast game speed.
  - High obstacle frequency.
  - Smaller surfer size.
  - Starts at level 30.

## Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge) with JavaScript enabled.
- Optional: A local web server for running the game locally.

### Running the Game Locally

1. **Download the Game Files**

   Clone the repository or download the ZIP file and extract it to your desired location.

   ```bash
   git clone https://github.com/yourusername/SurferGame.git
   ```

2. **Project Structure**

   Ensure the following files are present in your project directory:

   - `index.html`
   - `surfer.png`
   - `rock.png`
   - `shark.png`
   - `driftwood.png`
   - `manifest.json`
   - `service-worker.js`
   - `icon-192.png`
   - `icon-512.png`

3. **Running the Game**

   **Option 1: Open Directly**

   - Open the `index.html` file in your web browser.
   - Note: Some browsers may restrict certain functionalities when opening files directly due to security policies.

   **Option 2: Using a Local Web Server**

   - **Using Python (version 3)**:

     ```bash
     cd path/to/SurferGame
     python -m http.server 8000
     ```

     Access the game at `http://localhost:8000`.

   - **Using Node.js with `http-server`**:

     ```bash
     npm install -g http-server
     cd path/to/SurferGame
     http-server -p 8000
     ```

     Access the game at `http://localhost:8000`.

### Installing as a PWA

1. **Access the Game**

   - Open the game in your web browser using the local web server as described above.

2. **Install Prompt**

   - On desktop browsers supporting PWA installation (e.g., Chrome, Edge):
     - Click the install icon in the address bar or select "Install" from the browser menu.
   - On mobile devices:
     - For Android Chrome:
       - Tap the menu icon (three dots) and select "Add to Home screen."
     - For iOS Safari:
       - Tap the share button and select "Add to Home Screen."

3. **Launch the App**

   - Once installed, launch the game from your home screen or app drawer.
   - The game will run in full-screen mode and can be played offline.

## Assets

Ensure that the following image files are in the same directory as `index.html`:

- `surfer.png`: The player's character.
- `rock.png`: Obstacle image for rocks.
- `shark.png`: Obstacle image for sharks.
- `driftwood.png`: Obstacle image for driftwood.
- `icon-192.png` and `icon-512.png`: Icons for the PWA.

**Note**: If you have your own images, make sure they are properly named and update the file paths in the code if necessary.

## Development

### Project Structure

- `index.html`: The main HTML file containing the game code and structure.
- `service-worker.js`: Service worker script for caching and offline functionality.
- `manifest.json`: Web App Manifest file for PWA configuration.
- Image files: Assets used in the game.

### Modifying the Game

1. **Code Editing**

   - Open `index.html` in a code editor (e.g., Visual Studio Code, Sublime Text).
   - The game logic is written within the `<script>` tags at the bottom of the file.

2. **Customizing Game Parameters**

   - **Obstacle Properties**: Modify the `obstacleImages` array to add or change obstacles.
   - **Difficulty Settings**: Adjust the `difficultyConfig` object to tweak game speeds and levels.
   - **Player Properties**: Change the `player` object to adjust size, speed, and appearance.

3. **Adding New Features**

   - Implement new obstacles or power-ups by extending the existing logic.
   - Enhance graphics or animations by replacing images or using canvas drawing methods.

4. **Testing Changes**

   - Save your changes and refresh the browser to test.
   - Use browser developer tools (F12) to debug any issues.

## Known Issues

- **App Closure Limitations**: On some platforms, the "Quit" button may not close the app due to browser security restrictions. In such cases, it will return to the main menu instead.
- **Audio Support**: The game currently does not have sound effects or music. Adding audio may enhance the gaming experience.

## License

[MIT License](LICENSE)

## Acknowledgments

- **ChatGPT**: For assistance in developing and refining the game code.
- **OpenAI**: For providing the AI model that facilitated development.
- **Game Asset Creators**: Credit to any artists or sources for the images used in the game (if applicable).

