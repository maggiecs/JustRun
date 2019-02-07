class Enemy {
  constructor() {
    this.enemyOne = new Image();
    this.enemyOne.src = "images/enemy-1.png";
    this.enemyTwo = new Image();
    this.enemyTwo.src = "images/enemy-2.png";
    // this.kirbyThree = new Image();
    // this.kirbyThree.src = "../images/kirby-3.png";
    // this.kirbyFour = new Image();
    // this.kirbyFour.src = "../images/kirby-4.png";
    // this.walk = null;

    // this.kirby = [this.kirbyOne, this.kirbyTwo, this.kirbyThree, this.kirbyFour];

    this.enemies = [this.enemyOne, this.enemyTwo];

    this.xCorner = 45;
    this.yCorner = 0;
    this.width = 45;
    this.height = 45;
    this.xPos = 200;
    this.yPos = 380;
    this.frame_index = 0;
    this.frame_rate = 1;
    this.kirbySpriteNum = 6;
  }

  walk(ctx) {
    setInterval(() => this.kirbyLoop(ctx), 1000 / 5);
  }

  kirbyLoop(ctx) {
    let i = Math.floor(this.frame_index) % this.kirbySpriteNum;
    this.drawKirby(ctx, this.enemyTwo, (this.xCorner * i), this.yCorner, this.width, this.height, this.xPos, this.yPos, this.width, this.height);
    this.frame_index += this.frame_rate;
  }

  drawKirby(ctx, img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.clearRect(this.xPos, this.yPos, this.width, this.height);
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
  }

  
}

module.exports = Enemy;