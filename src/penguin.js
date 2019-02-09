class Penguin {
  constructor() {
    this.image = new Image();
    this.image.src = "images/penguin.png";
    this.height = 118;
    this.width = 118;
    this.speed = Math.random() * 4 + 2;
  }




}

module.exports = Penguin;