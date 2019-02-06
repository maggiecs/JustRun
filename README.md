# Kirby-Run

### Background

Kirby Run is an infinite run game inspired by Google's T-Rex Run!. The goal of the game is to last as long as possible, avoiding the obstacles that appears.

### Functionality & MVP 

With Kirby Run, users will be able to:

- [ ] Choose a difficulty level
- [ ] Enter the game once difficulty level is clicked on
- [ ] Use the spacebar to jump

In addition, this project will include:

- [ ] An instruction modal describing the rules of the game
- [ ] A production README

### Architecture and Technologies

The project will be implemented with the following technologies:
-`Javascript` for game logic, webpack to bundle Javascript files, and HTML5 Canvas to draw the graphics.

The following are the main scripts that will be implemented:
-`board.js`: this script will handle the logic for rendering the background/board
-`obstacle.js`: this script will handle the logic for rendering the obstacle
-`points.js `: this script will handle the logic for the player's points
-`player.js `: this script will handle the logic for rendering the player
-`item.js`: this script will handle the logic for rendering extra point items

### Wireframes

The app will consist of a single screen with the game board and navigation bar. The navigation bar will contain nav links to the Github repository, my LinkedIn, and the instruction modal. The title will be displayed below the navigation bar and above the game board.

![WireframeImage](images/wireframe.png)

### Implementation Timeline

**Day 1**: 
- Setup all the files needed for webpack to start running.
- Write a basic entry file.
- Complete board design.

**Day 2**: 
- Complete player script and rendering
- Complete obstacle script and rendering

**Day 3**: 
- Complete points script and rendering
- Complete extra point items script and rendering

### Bonus features
- [ ] Add options for player
- [ ] Add multi-player
- [ ] Connect to a backend database to store high scores
