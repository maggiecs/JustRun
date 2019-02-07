class Kirby {
  constructor() {
    // this.kirbyOne = new Image();
    // this.kirbyOne.src = "../images/kirby-1.png";
    // this.kirbyTwo = new Image();
    // this.kirbyTwo.src = "../images/kirby-2.png";
    // this.kirbyThree = new Image();
    // this.kirbyThree.src = "../images/kirby-3.png";
    // this.kirbyFour = new Image();
    // this.kirbyFour.src = "../images/kirby-4.png";
    // this.walk = null;

    // this.kirby = [this.kirbyOne, this.kirbyTwo, this.kirbyThree, this.kirbyFour];

    this.kirbyImage = new Image();
    this.kirbyImage.src = "images/kirby_sprite.png";
    this.xCorner = 30;
    this.yCorner = 0;
    this.width = 30;
    this.height = 30;
    this.xPos = 30;
    this.yPos = 400;
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
    console.log(this.frame_index);
    console.log(i);
  }

  drawKirby (ctx, img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.clearRect(this.xPos, this.yPos, this.width, this.height);
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
  }





}

module.exports = Kirby;