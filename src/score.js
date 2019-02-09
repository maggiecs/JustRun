class Score {
  constructor() {
  }

  drawScore(ctx, points) {
    ctx.clearRect(650, 50, 100, 100);
    ctx.textBaseline = "top"; 
    ctx.font = '30px "Dosis"';
    ctx.fillStyle = "#ffc0cb";
    ctx.fillText(`Score: ${points}`, 650, 50);
  }
}

module.exports = Score;