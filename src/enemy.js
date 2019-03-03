class Enemy {
  constructor(options) {
    this.image = new Image();
    this.image.src = options.image.src;
    this.height = options.height;
    this.width = options.width;
    this.speed = 5;
  }

}

export default Enemy;