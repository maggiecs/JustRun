class Coin {
  constructor() {
    this.coinImage = new Image();
    this.coinImage.src = "images/coin_sprite.png";
    this.xCorner = 68;
    this.yCorner = 0;
    this.width = 68;
    this.height = 60;
    this.xPos = 800;
    this.yPos = 200;
    this.frame_index = 0;
    this.frame_rate = 0.1;
    this.coinSpriteNum = 8;
    this.speed = 2;
  }


  addCoin(ctx) {
    const requestAnimationFrame = window.requestAnimationFrame;
    const cancelAnimationFrame = window.cancelAnimationFrame;
    
    coinRequestId = requestAnimationFrame(this.addCoin.bind(this, ctx));

    if (this.xPos < -60) {
      cancelAnimationFrame(coinRequestId);
    }

    let i = Math.floor(this.frame_index) % this.coinSpriteNum;
    ctx.clearRect(this.xPos, this.yPos, this.width + this.speed, this.height);
    ctx.drawImage(this.coinImage, (this.xCorner * i), this.yCorner, this.width, this.height, this.xPos, this.yPos, this.width, this.height);
    this.xPos -= this.speed;
    this.frame_index += this.frame_rate;
  }

}

module.exports = Coin;