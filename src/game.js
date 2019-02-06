class Game {
  constructor(ctx) {
    this.ctx = ctx;
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X. Game.DIM_Y);
    ctx.fillStyle = Game.BACKGROUND_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
  }

  isOutOfBounds(pos) {

  }

  displayFloor() {
    this.ctx.fillStyle = "#BA55D3";
    // this.ctx.clearRect(0, 0, 50, 50);
    this.ctx.fillRect(0, 430, Game.DIM_X, 70);
    // this.ctx.fill();

    this.ctx.fillStyle = "#000000";
    // this.ctx.clearRect(0, 0, 50, 50);
    this.ctx.fillRect(0, 425, Game.DIM_X, 5);
   
  }

  displayFloorTop() {
   this.ctx.fillStyle = "#000000";
  // this.ctx.clearRect(0, 0, 50, 50);
  //  this.ctx.fillRect(0, 425, Game.DIM_X, 5);
  //  this.ctx.fill();
  }
}

Game.DIM_X = 800;
Game.DIM_Y = 500;
Game.BACKGROUND_COLOR = "#000000";

module.exports = Game;