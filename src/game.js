const Kirby = require('./kirby');
const Penguin = require('./penguin');
const Waluigi = require('./waluigi');

class Game {
  constructor(ctx) {
    this.document = document;
    this.ctx = ctx;
    this.kirby = new Kirby();
    // this.enemy = new Enemy();
    this.points = 0;
    this.chosenEnemy = null;
    this.enemyDimX = Game.DIM_X;
    this.enemyXStep = null;
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
    this.chooseEnemy();
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

  chooseEnemy() {
    if (Math.random() < 0.5) {
      this.chosenEnemy = new Penguin();
    } else {
      this.chosenEnemy = new Waluigi();
    }
  }

  addEnemies() {
    let requestAnimationFrame = window.requestAnimationFrame;
    let cancelAnimationFrame = window.cancelAnimationFrame;
    enemyRequestId = requestAnimationFrame(this.addEnemies.bind(this));

    if (this.gameOver()){
      cancelAnimationFrame(enemyRequestId);
      this.kirby.die();
    }

    const enemyDimY = 425 - this.chosenEnemy.height;
    this.enemyDimY = enemyDimY;
    this.enemyXStep = this.chosenEnemy.speed;

    this.ctx.clearRect(this.enemyDimX, this.enemyDimY, this.chosenEnemy.width + this.enemyXStep, this.chosenEnemy.height);
    this.ctx.drawImage(this.chosenEnemy.image, 0, 0, this.chosenEnemy.width, this.chosenEnemy.height, this.enemyDimX, this.enemyDimY, this.chosenEnemy.width, this.chosenEnemy.height);;
    this.enemyDimX -= this.enemyXStep;
   
    if (this.enemyDimX < -200) {
      this.enemyDimX = Game.DIM_X;
      cancelAnimationFrame(enemyRequestId);
      this.chooseEnemy();
      this.addEnemies();
    }
  }

  keyListener() {
    this.document.addEventListener("keypress", (e) => {
      e.preventDefault();
      if (e.keyCode === 32) {
        this.kirby.jump(this.ctx);
      }
    });
  }

  gameOver() {
    return !(
      this.kirby.xPos > this.enemyDimX + this.chosenEnemy.width ||
      this.kirby.xPos + this.kirby.width < this.enemyDimX ||
      this.kirby.yPos > this.enemyDimY + this.chosenEnemy.height ||
      this.kirby.yPos + this.kirby.height < this.enemyDimY
    );
  }

}

Game.DIM_X = 800;
Game.DIM_Y = 500;
Game.BACKGROUND_COLOR = "#000000";

module.exports = Game;