

const GameStart = require('./game_start');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  canvas.width = 800;
  canvas.height = 500;

  const ctx = canvas.getContext("2d");

  //Start page
  gameStart = new GameStart();
  gameStart.gameStart(ctx);


 
});
