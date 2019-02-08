const Kirby = require('./kirby');
const Enemy = require('./enemy');

class Game {
  constructor(ctx) {
    this.document = document;
    this.ctx = ctx;
    this.kirby = new Kirby();
    this.enemy = new Enemy();
    this.points = 0;
    this.enemyDimX = Game.DIM_X;
    this.enemyXStep = 4;
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X. Game.DIM_Y);
    ctx.fillStyle = Game.BACKGROUND_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
  }

  isOutOfBounds(pos) {

  }

  start() {
    this.addKirby();
    this.addEnemies();
    this.keyListener();

  
  }

  displayFloor() {
    this.ctx.fillStyle = "#BA55D3";
    this.ctx.fillRect(0, 430, Game.DIM_X, 70);

    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(0, 425, Game.DIM_X, 5);
  }


  addKirby() {
    this.kirby.walk(this.ctx);
   
  }


  addEnemies() {
    let requestAnimationFrame = window.requestAnimationFrame;
    this.ctx.clearRect(this.enemyDimX - 118, 307, 118 + this.enemyXStep, 118);
    this.ctx.drawImage(this.enemy.enemyOne, 0, 0, 118, 118, this.enemyDimX - 118, 307, 118, 118);
    this.enemyDimX -= this.enemyXStep;
   
    if (this.enemyDimX < 0) {
      this.enemyDimX = Game.DIM_X;
    }

    requestAnimationFrame(this.addEnemies.bind(this));
  
  }

  keyListener() {
    this.document.addEventListener("keypress", (e) => {
      e.preventDefault();
      if (e.keyCode === 32) {
        this.kirby.jump(this.ctx);
      }
    });
  }
}

Game.DIM_X = 800;
Game.DIM_Y = 500;
Game.BACKGROUND_COLOR = "#000000";

module.exports = Game;