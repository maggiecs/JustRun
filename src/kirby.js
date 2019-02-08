class Kirby {
  constructor() {
    //variables for kirby sprite
    this.kirbyImage = new Image();
    this.kirbyImage.src = "images/kirby_sprite.png";
    this.xCorner = 45;
    this.yCorner = 0;
    this.width = 45;
    this.height = 45;
    this.xPos = 60;
    this.yPos = 380;
    this.frame_index = 0;
    this.frame_rate = 0.1;
    this.kirbySpriteNum = 6;


    //variables for kirby jump
    this.kirbyOne = new Image();
    this.kirbyOne.src = "images/kirby-1.png";
    this.jumping = false;
    this.yVelocity = 0;
    this.walkRequestId = null;
  }
 

  jump(ctx) {
    const requestAnimationFrame = window.requestAnimationFrame;
    const cancelAnimationFrame = window.cancelAnimationFrame;

    cancelAnimationFrame(this.walkRequestId);

    ctx.clearRect(this.xPos, this.yPos, this.width, this.height);

    if (this.jumping === false    ) {
      this.yVelocity -= 25;
      this.jumping = true;
      console.log(this.yPos);
    }

    this.yVelocity += 0.8;
    this.yPos += this.yVelocity;

    if (this.yPos > 380) {
      this.displayFloor(ctx);
      this.yPos = 380;
      this.yVelocity = 0;
      this.jumping = false;
      this.walk(ctx);
    }
  
    ctx.drawImage(this.kirbyOne, this.xPos, this.yPos, this.width, this.height);
    let jumpRequestId = requestAnimationFrame(this.jump.bind(this, ctx));

    if (this.jumping === false) {
      cancelAnimationFrame(jumpRequestId);
    }
  }

  walk(ctx) {
    const requestAnimationFrame = window.requestAnimationFrame;
    const cancelAnimationFrame = window.cancelAnimationFrame;

    let i = Math.floor(this.frame_index) % this.kirbySpriteNum;
    ctx.clearRect(this.xPos, this.yPos, this.width, this.height);
    ctx.drawImage(this.kirbyImage, (this.xCorner * i), this.yCorner, this.width, this.height, this.xPos, this.yPos, this.width, this.height);
    this.frame_index += this.frame_rate;

    this.walkRequestId = requestAnimationFrame(this.walk.bind(this,ctx));

  }

  displayFloor(ctx) {
    ctx.fillStyle = "#BA55D3";
    ctx.fillRect(0, 430, 800, 70);

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 425, 800, 5);
  }

}

module.exports = Kirby;