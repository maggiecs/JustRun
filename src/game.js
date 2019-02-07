const Kirby = require('./kirby');
const Enemy = require('./enemy');

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.kirby = new Kirby();
    this.enemy = new Enemy();
    this.points = 0;
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
    // this.enemy.walk(this.ctx);
    debugger
    this.ctx.clearRect(200, 200, 45, 45);
    this.ctx.drawImage(this.kirby.kirbyImage, 0, 0, 45, 45, 200, 200, 45, 45);
  }

  displayFloor() {
    this.ctx.fillStyle = "#BA55D3";
    this.ctx.fillRect(0, 430, Game.DIM_X, 70);

    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(0, 425, Game.DIM_X, 5);
  }


  addKirby() {
    
   
  }


  addEnemies() {
    // let requestAnimationFrame = window.requestAnimationFrame;
    // let x = Game.DIM_X;
    // this.ctx.clearRect(0, 220, 70, 100);
    setInterval(() => {
      this.ctx.drawImage(this.enemy.enemies[0], 400, 220, 60, 100);
    }, 10000);

    // this.ctx.drawImage(this.enemy.enemies[0], 45, 0, 45, 45, 200, 380, 45, 45);
    // debugger
    // x -= 5;
    // if (x < 20) requestAnimationFrame(this.addEnemies);
  }
}

Game.DIM_X = 800;
Game.DIM_Y = 500;
Game.BACKGROUND_COLOR = "#000000";

module.exports = Game;