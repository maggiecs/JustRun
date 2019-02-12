class Enemy {
  constructor(options) {
    this.image = new Image();
    this.image.src = options.image.src;
    this.height = options.height;
    this.width = options.width;
    this.speed = 6;
  }

}

module.exports = Enemy;