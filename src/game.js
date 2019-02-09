const Kirby = require('./kirby');
const Penguin = require('./penguin');
const Waluigi = require('./waluigi');
const Score = require('./score');
const Coin = require('./coin');

class Game {
  constructor(ctx) {
    this.document = document;
    this.ctx = ctx;
    this.kirby = new Kirby();
    this.score = new Score();
    this.coin = new Coin();
    this.points = 0;
    this.chosenEnemy = null;
    this.enemyDimX = Game.DIM_X;
    this.enemyXStep = null;
    this.keyListeners();
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X. Game.DIM_Y);
    ctx.fillStyle = Game.BACKGROUND_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
  }

  start() {
    this.addKirby();
    this.chooseEnemy();
    this.addEnemies();
    this.coin.addCoin(this.ctx);
  }

  displayFloor() {
    this.ctx.fillStyle = "#800080";
    this.ctx.fillRect(0, 430, Game.DIM_X, 70);

    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(0, 425, Game.DIM_X, 5);
  }


  addKirby() {
    this.kirby.walk(this.ctx);
    this.score.drawScore(this.ctx, this.points);
  }

  chooseEnemy() {
    if (Math.random() < 0.5) {
      this.chosenEnemy = new Penguin();
    } else {
      this.chosenEnemy = new Waluigi();
    }
  }

  addCoin(ctx) {
    if (Math.random() < 0.5 && ) {
      this.coin.generateCoin(ctx);
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
    this.kirby.getKirbyaction(this.ctx);
    this.ctx.drawImage(this.chosenEnemy.image, 0, 0, this.chosenEnemy.width, this.chosenEnemy.height, this.enemyDimX, this.enemyDimY, this.chosenEnemy.width, this.chosenEnemy.height);
    this.enemyDimX -= this.enemyXStep;
   
    if (this.enemyDimX < -200) {
      this.points += 10;
      this.score.drawScore(this.ctx, this.points);
      this.enemyDimX = Game.DIM_X;
      cancelAnimationFrame(enemyRequestId);
      this.chooseEnemy();
      this.addEnemies();
    }
  }

  keyListeners() {
    this.document.addEventListener("keypress", (e) => {
      e.preventDefault();
      if (e.keyCode === 32) {
        this.kirby.jump(this.ctx);
      }
    });
  }

  gameOver() {
    return !(
      this.kirby.xPos > this.enemyDimX + this.chosenEnemy.width - Game.ENEMY_OFFSET.xOffset ||
      this.kirby.xPos + this.kirby.width < this.enemyDimX + Game.ENEMY_OFFSET.xOffset ||
      this.kirby.yPos > this.enemyDimY + this.chosenEnemy.height - Game.ENEMY_OFFSET.yOffset ||
      this.kirby.yPos + this.kirby.height < this.enemyDimY + Game.ENEMY_OFFSET.yOffset
    );
  }

}

Game.DIM_X = 800;
Game.DIM_Y = 500;
Game.ENEMY_OFFSET = {
  xOffset: 10,
  yOffset: 5,
};

module.exports = Game;