import Kirby from './kirby';
import Score from './score';
import Coin from './coin';
import Enemy from './enemy';

class Game {
  constructor(ctx, playing) {
    this.document = document;
    this.ctx = ctx;
    this.kirby = new Kirby();
    this.score = new Score();
    this.coin = new Coin();
    this.points = 0;
    this.chosenEnemy = null;
    this.enemyDimX = Game.DIM_X;
    this.enemyXStep = 6;
    this.gamePlaying = playing;
    this.muteMusic = false;
    this.extraSpeed = 0;

    this.koKirbyImage = new Image();
    this.koKirbyImage.src = "images/ko_kirby.png";
    this.gameOverImage = new Image();
    this.gameOverImage.src = "images/game_over.png";
    this.waluigiImage = new Image();
    this.waluigiImage.src = "images/waluigi.png";
    this.penguinImage = new Image();
    this.penguinImage.src = "images/penguin.png";

    this.addMusic();
    this.keyListeners();
    this.musicListener();
  }

  start() {
    this.score.drawScore(this.ctx, this.points);
    this.chooseEnemy();
    this.play();
  }

  displayFloor() {
    this.ctx.fillStyle = "#472853";
    this.ctx.fillRect(0, 430, Game.DIM_X, 70);

    this.ctx.fillStyle = "#1d0b25";
    this.ctx.fillRect(0, 425, Game.DIM_X, 5);
  }

  chooseEnemy() {
    if (Math.random() < 0.5) {
      this.chosenEnemy = new Enemy({image: this.penguinImage, imageSrc: this.penguinImage.src, height: 118, width: 118});
    } else {
      this.chosenEnemy = new Enemy({image: this.waluigiImage, imageSrc: this.waluigiImage.src, height: 123, width: 66});
    }
  }

  play() {
    let requestAnimationFrame = window.requestAnimationFrame;
    let cancelAnimationFrame = window.cancelAnimationFrame;
    let playRequestId = requestAnimationFrame(this.play.bind(this));
    
    if (this.gamePlaying && this.muteMusic === false) {
      this.backgroundMusic.play();
    }

    if (this.coinCollision()) {
      this.points += 20;
      this.coin.hasCollide = true;
      this.score.drawScore(this.ctx, this.points);
    }

    if (this.enemyDimX < -200) {
      this.points += 10;
      this.score.drawScore(this.ctx, this.points);
      this.enemyDimX = Game.DIM_X;
      cancelAnimationFrame(playRequestId);
      this.chooseEnemy();
      this.play();
      this.enemyXStep += 0.25;
    }

    this.addEnemies();
    this.addCoin();

    if (this.gameOver(this.points)) {
      cancelAnimationFrame(playRequestId);
      this.kirby.die();
      this.coin.stopCoin();
      this.backgroundMusic.pause();
      this.gamePlaying = false;

      if (!this.muteMusic) {
      this.gameOverMusic.play();
      }

      let that = this;
      setTimeout(function () { that.displayGameOver(); }, 3000);
    }
  }

  addKirby() {
    this.kirby.getKirbyaction(this.ctx);
  }

  addEnemies() {
    const enemyDimY = 425 - this.chosenEnemy.height;
    this.enemyDimY = enemyDimY;
    
    this.ctx.clearRect(this.enemyDimX, this.enemyDimY, this.chosenEnemy.width + this.enemyXStep, this.chosenEnemy.height);
    this.addKirby();
    this.ctx.drawImage(this.chosenEnemy.image, 0, 0, this.chosenEnemy.width, this.chosenEnemy.height, this.enemyDimX, this.enemyDimY, this.chosenEnemy.width, this.chosenEnemy.height);
    this.enemyDimX -= this.enemyXStep;
  }

  addCoin() {
    if (Math.random() < 0.1 && this.coin.onCanvas === false) {
      this.coin.generateCoin(this.ctx);
    }
  }

  addMusic() {
    this.backgroundMusic = new Audio("audio/background_music.mp3");
    this.gameOverMusic = new Audio("audio/game_over_music.mp3");
  }

  keyListeners() {
    this.document.addEventListener("keypress", (e) => {
      e.preventDefault();
      if (e.keyCode === 32 && this.gamePlaying) {
        this.kirby.jump(this.ctx);
      } 
    });
  }

  musicListener() {
    this.document.addEventListener("keypress", (e) => {
      e.preventDefault();
      if (e.keyCode === 115 && !this.muteMusic) {
        this.gameOverMusic.pause();
        this.backgroundMusic.pause();
        this.muteMusic = true;
      } else if (e.keyCode === 115 && this.muteMusic) {
        if (this.gamePlaying) {
        this.backgroundMusic.play();
        } else {
          this.gameOverMusic.play();
        }
        this.muteMusic = false;
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

  coinCollision() {
    return !(
      this.kirby.xPos > this.coin.xPos + this.coin.width ||
      this.kirby.xPos + this.kirby.width < this.coin.xPos ||
      this.kirby.yPos > this.coin.yPos + this.coin.height ||
      this.kirby.yPos + this.kirby.height < this.coin.yPos
    );
  }


  displayGameOver() {
    this.gameOverMusic.pause();
    let localhighScore = parseInt(localStorage.getItem("highScore"));
    document.addEventListener("keypress", (e) => {
    });

    if (!localhighScore || localhighScore < this.points) {
      localStorage.setItem("highScore", this.points);
      localhighScore = parseInt(localStorage.getItem("highScore"));
    }
    
    this.ctx.clearRect(0, 0, 800, 500);
    this.ctx.fillStyle = "#6b3e6f";
    this.ctx.fillRect(0, 0, 800, 500);

    this.ctx.font = "25px Dosis";
    this.ctx.textBaseline = "top";
    this.ctx.fillStyle = "#ff9191";

    this.ctx.drawImage(this.gameOverImage, 212, 120);
    this.ctx.drawImage(this.koKirbyImage, 377.5, 220);

    this.ctx.font = "40px Dosis";
    this.ctx.textBaseline = "top";
    this.ctx.fillStyle = "#ff9191";
    this.ctx.fillText(`Score: ${this.points}`, 325, 280)
    this.ctx.fillText(`Current High Score: ${localhighScore}`, 230, 330);

    setTimeout(function () { location.reload(); }, 3000);
  }

}

Game.DIM_X = 800;
Game.DIM_Y = 500;
Game.ENEMY_OFFSET = {
  xOffset: 20,
  yOffset: 10,
};

export default Game;