const gameStart = (ctx) => {
  ctx.clearRect(0, 0, 800, 500);
  ctx.fillStyle = "#6b3e6f"; 
  ctx.fillRect(0, 0, 800, 500);

  const gameTitle = new Image();
  gameTitle.src = "images/kirby_run.png";
  const kirbyImage = new Image();
  kirbyImage.src = "images/kirby_game_start.png";
  window.onload = function () {
    ctx.drawImage(gameTitle, 200, 150);
    ctx.drawImage(kirbyImage, 400, 250);
  };

  ctx.font = "25px Dosis";
  ctx.textBaseline = "top"; 
  ctx.fillStyle = "#ff9191"; 
  ctx.fillText('Press ENTER to start!', 300, 300);
  ctx.fillText('Press SPACE to jump!', 300, 330);

  ctx.font = "25px Dosis";
  ctx.textBaseline = "top";
  ctx.fillStyle = "#ff9191";
  ctx.fillText("Press 's' to turn on/off music!", 270, 360);
  
};


module.exports = gameStart;