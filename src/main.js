const Game = require("./game");
const GameView = require("./game_view");
const Enemy = require('./enemy');
const Kirby = require('./kirby');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  canvas.width = Game.DIM_X;
  canvas.height = Game.DIM_Y;

  const ctx = canvas.getContext("2d");
  let kirby = new Kirby();
  ctx.drawImage(kirby.kirbyImage, 45, 0, 45, 45, 200, 380, 45, 45);

  const game = new Game(ctx);
  game.displayFloor();
  game.start();
 
  // new GameView(game, ctx).start();
});
