class Waluigi {
  constructor() {
    this.image = new Image();
    this.image.src = "images/waluigi.png";
    this.height = 123;
    this.width = 66;
    this.speed = Math.random() * 3 + 6;
  }

}

module.exports = Waluigi;