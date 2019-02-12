const Game = require("./game");

class GameStart {

  constructor(ctx) {
    this.ctx = ctx;
    this.gamePlaying = false;
    this.gameTitleImage = new Image();
    this.gameTitleImage.src = "images/kirby_run.png";
    this.kirbyImage = new Image();
    this.kirbyImage.src = "images/kirby_game_start.png";
  }

  gameStart(ctx) {
    ctx.clearRect(0, 0, 800, 500);
    ctx.fillStyle = "#6b3e6f"; 
    ctx.fillRect(0, 0, 800, 500);

    let that = this;
    window.onload = function() {
      ctx.drawImage(that.gameTitleImage, 195, 120);
      ctx.drawImage(that.kirbyImage, 377.5, 230);
    };
  

    ctx.font = "25px Dosis";
    ctx.textBaseline = "top"; 
    ctx.fillStyle = "#ff9191"; 
    ctx.fillText('Press ENTER to start!', 290, 300);
    ctx.fillText('Press SPACE to jump!', 290, 330);

    ctx.font = "25px Dosis";
    ctx.textBaseline = "top";
    ctx.fillStyle = "#ff9191";
    ctx.fillText("Press 's' to turn on/off music!", 260, 360);

    //Listener to start game
    document.addEventListener("keypress", (e) => {
      e.preventDefault();
      if (e.keyCode === 13 && !this.gamePlaying) {
        this.gamePlaying = true;
        const game = new Game(ctx, this.gamePlaying);
        ctx.clearRect(0, 0, 800, 500);
        game.displayFloor();
        game.start();
      }
    });

  }
}


module.exports = GameStart;