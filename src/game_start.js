import Game from './game';

const closeGameStartDisplay = () => {
  const gameStartDisplay = document.getElementsByClassName('game-start')[0];
  gameStartDisplay.className = "game-start off";
};

const openGameStartDisplay = () => {
  const gameStartDisplay = document.getElementsByClassName('game-start off')[0];
  gameStartDisplay.className = "game-start";
};

class GameStart {

  constructor(ctx) {
    this.ctx = ctx;
    this.gamePlaying = false;
    this.gameTitleImage = new Image();
    this.gameTitleImage.src = "images/just_run.png";
    this.kirbyImage = new Image();
    this.kirbyImage.src = "images/kirby_game_start.png";
  }

  gameStart() {
    this.ctx.clearRect(0, 0, 800, 500);
    this.ctx.fillStyle = "#6b3e6f"; 
    this.ctx.fillRect(0, 0, 800, 500);

    let that = this;
    window.onload = function() {
      openGameStartDisplay();
      that.ctx.drawImage(that.gameTitleImage, 195, 120);
      that.ctx.drawImage(that.kirbyImage, 377.5, 230);
    };
  
    //Listener to start game
    document.addEventListener("keypress", (e) => {
      e.preventDefault();
      if (e.keyCode === 13 && !this.gamePlaying) {
        this.gamePlaying = true;
        const game = new Game(this.ctx, this.gamePlaying);
        closeGameStartDisplay();
        this.ctx.clearRect(0, 0, 800, 500);
        game.displayFloor();
        game.start();
      }
    });

  }
}


export default GameStart;