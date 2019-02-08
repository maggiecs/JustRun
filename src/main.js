const Game = require("./game");
const GameView = require("./game_view");
const Enemy = require('./enemy');
const Kirby = require('./kirby');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  canvas.width = Game.DIM_X;
  canvas.height = Game.DIM_Y;

  const ctx = canvas.getContext("2d");

  // let kirby = new Kirby();
  // debugger
  // kirby.kirbyImage.onload = function () {

  //   // At this point, the image is fully loaded
  //   // So do your thing!

  
  // ctx.drawImage(kirby.kirbyImage, 10, 10, 50, 50, 400, 400, 50, 50);

  // };

  const game = new Game(ctx);
  game.displayFloor();
  game.start();
 
  // new GameView(game, ctx).start();
});
