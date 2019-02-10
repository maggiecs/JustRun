const Game = require("./game");
const gameStart = require('./game_start');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  canvas.width = Game.DIM_X;
  canvas.height = Game.DIM_Y;

  const ctx = canvas.getContext("2d");

  gameStart(ctx);
  document.addEventListener("keypress", (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      const game = new Game(ctx);
      ctx.clearRect(0, 0, 800, 500);
      game.displayFloor();
      game.start();
    // } else if (e.keyCode === 13) {
    }
  });
  
 
});
