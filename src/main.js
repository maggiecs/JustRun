const Game = require("./game");
const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  canvas.width = Game.DIM_X;
  canvas.height = Game.DIM_Y;

  const ctx = canvas.getContext("2d");


  const game = new Game(ctx);
  game.displayFloor();
  // game.displayFloorTop();
  new GameView(game, ctx).start();
});
