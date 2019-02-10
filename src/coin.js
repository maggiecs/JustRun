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
    this.onCanvas = false;
    this.stop = false;
    this.hasCollide = false;
  }


  generateCoin(ctx) {
    const requestAnimationFrame = window.requestAnimationFrame;
    const cancelAnimationFrame = window.cancelAnimationFrame;
    
    coinRequestId = requestAnimationFrame(this.generateCoin.bind(this, ctx));

    if (this.xPos < -68 || this.stop === true) {
      this.onCanvas = false;
      cancelAnimationFrame(coinRequestId);
      this.xPos = 800;
    } else {
      this.onCanvas = true;
    }

    if (this.hasCollide === true) {
      ctx.clearRect(this.xPos, this.yPos, this.width + this.speed, this.height);
      this.onCanvas = false;
      cancelAnimationFrame(coinRequestId);
      this.xPos = 800;
      this.hasCollide = false;
    }
    
    let i = Math.floor(this.frame_index) % this.coinSpriteNum;
    ctx.clearRect(this.xPos, this.yPos, this.width + this.speed, this.height);
    ctx.drawImage(this.coinImage, (this.xCorner * i), this.yCorner, this.width, this.height, this.xPos, this.yPos, this.width, this.height);
    this.xPos -= this.speed;
    this.frame_index += this.frame_rate;
  }

  stopCoin() {
    this.stop = true; 
  }

}

module.exports = Coin;