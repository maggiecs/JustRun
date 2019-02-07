class Kirby {
  constructor() {
    this.kirbyImage = new Image();
    this.kirbyImage.src = "images/kirby_sprite.png";
    this.xCorner = 45;
    this.yCorner = 0;
    this.width = 45;
    this.height = 45;
    this.xPos = 60;
    this.yPos = 380;
    this.frame_index = 0;
    this.frame_rate = 1;
    this.kirbySpriteNum = 6;
  }
 
  walk(ctx) {
    setInterval(() => this.kirbyLoop(ctx), 1000/5);
  }

  kirbyLoop(ctx) {
    let i = Math.floor(this.frame_index) % this.kirbySpriteNum;
    this.drawKirby(ctx, this.kirbyImage, (this.xCorner * i), this.yCorner, this.width, this.height, this.xPos, this.yPos, this.width, this.height);
    this.frame_index += this.frame_rate;
  }

  drawKirby (ctx, img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.clearRect(this.xPos, this.yPos, this.width, this.height);
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
  }

}

module.exports = Kirby;