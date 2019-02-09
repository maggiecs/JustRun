class Score {
  constructor() {
  }

  drawScore(ctx, points) {
    
    ctx.font = "100px Georgia";
    ctx.clearRect(200, 100, 800, 500);
    ctx.fillStyle = "black";
    ctx.fillText(`Score: ${points}`, 200, 200);
  }
}

module.exports = Score;