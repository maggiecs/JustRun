const Kirby = require('./kirby');

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.kirby = new Kirby();
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X. Game.DIM_Y);
    ctx.fillStyle = Game.BACKGROUND_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
  }

  isOutOfBounds(pos) {

  }

  start() {
    this.kirby.walk(this.ctx);
  }

  displayFloor() {
    this.ctx.fillStyle = "#BA55D3";
    this.ctx.fillRect(0, 430, Game.DIM_X, 70);

    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(0, 425, Game.DIM_X, 5);
  }


  addKirby() {


   
  }
}

Game.DIM_X = 800;
Game.DIM_Y = 500;
Game.BACKGROUND_COLOR = "#000000";

module.exports = Game;