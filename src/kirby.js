class Kirby {
  constructor() {
    //variables for player sprite
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


    //variables for player jump
    this.kirbyOne = new Image();
    this.kirbyOne.src = "images/kirby-jump.png";
    this.jumping = false;
    this.yVelocity = 0;

    this.dead = false;
  }
 

  jump(ctx) {
    
    ctx.clearRect(this.xPos, this.yPos, this.width, this.height);

    if (this.jumping === false) {
      this.yVelocity -= 18;
      this.jumping = true;
    }

    this.yVelocity += 0.95;
    this.yPos += this.yVelocity;

    if (this.yPos > 380) {
      this.yPos = 380;
      this.yVelocity = 0;
      this.jumping = false;
      this.walk(ctx);
    }
  
    ctx.drawImage(this.kirbyOne, this.xPos, this.yPos, this.width, this.height);

  }

  walk(ctx) {
    
    let i = Math.floor(this.frame_index) % this.kirbySpriteNum;
    ctx.clearRect(this.xPos, this.yPos, this.width, this.height);
    ctx.drawImage(this.kirbyImage, (this.xCorner * i), this.yCorner, this.width, this.height, this.xPos, this.yPos, this.width, this.height);
    this.frame_index += this.frame_rate;
  }

  die() {
    this.dead = true;
  }

  getKirbyaction(ctx) {
    if (this.jumping) {
      this.jump(ctx);
    } else {
      this.walk(ctx);
    }
  }
}

export default Kirby;