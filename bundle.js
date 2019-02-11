/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/coin.js":
/*!*********************!*\
  !*** ./src/coin.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Coin =
/*#__PURE__*/
function () {
  function Coin() {
    _classCallCheck(this, Coin);

    this.coinImage = new Image();
    this.coinImage.src = "images/coin_sprite.png";
    this.xCorner = 68;
    this.yCorner = 0;
    this.width = 68;
    this.height = 60;
    this.xPos = 800;
    this.yPos = 200;
    this.frame_index = 0;
    this.frame_rate = 0.1;
    this.coinSpriteNum = 8;
    this.speed = 2;
    this.onCanvas = false;
    this.stop = false;
    this.hasCollide = false;
  }

  _createClass(Coin, [{
    key: "generateCoin",
    value: function generateCoin(ctx) {
      var requestAnimationFrame = window.requestAnimationFrame;
      var cancelAnimationFrame = window.cancelAnimationFrame;
      coinRequestId = requestAnimationFrame(this.generateCoin.bind(this, ctx));

      if (this.xPos < -68 || this.stop === true) {
        this.onCanvas = false;
        cancelAnimationFrame(coinRequestId);
        this.xPos = 800;
      } else {
        this.onCanvas = true;
      }

      if (this.hasCollide === true) {
        ctx.clearRect(this.xPos, this.yPos, this.width + this.speed, this.height);
        this.onCanvas = false;
        cancelAnimationFrame(coinRequestId);
        this.xPos = 800;
        this.hasCollide = false;
      }

      var i = Math.floor(this.frame_index) % this.coinSpriteNum;
      ctx.clearRect(this.xPos, this.yPos, this.width + this.speed, this.height);
      ctx.drawImage(this.coinImage, this.xCorner * i, this.yCorner, this.width, this.height, this.xPos, this.yPos, this.width, this.height);
      this.xPos -= this.speed;
      this.frame_index += this.frame_rate;
    }
  }, {
    key: "stopCoin",
    value: function stopCoin() {
      this.stop = true;
    }
  }]);

  return Coin;
}();

module.exports = Coin;

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Kirby = __webpack_require__(/*! ./kirby */ "./src/kirby.js");

var Penguin = __webpack_require__(/*! ./penguin */ "./src/penguin.js");

var Waluigi = __webpack_require__(/*! ./waluigi */ "./src/waluigi.js");

var Score = __webpack_require__(/*! ./score */ "./src/score.js");

var Coin = __webpack_require__(/*! ./coin */ "./src/coin.js");

var Game =
/*#__PURE__*/
function () {
  function Game(ctx) {
    _classCallCheck(this, Game);

    this.document = document;
    this.ctx = ctx;
    this.kirby = new Kirby();
    this.score = new Score();
    this.coin = new Coin();
    this.points = 0;
    this.chosenEnemy = null;
    this.enemyDimX = Game.DIM_X;
    this.enemyXStep = null;
    this.gamePlaying = false;
    this.muteMusic = false;
    this.addMusic();
    this.keyListeners();
    this.musicListener();
  }

  _createClass(Game, [{
    key: "start",
    value: function start() {
      this.score.drawScore(this.ctx, this.points);
      this.chooseEnemy();
      this.play();
    }
  }, {
    key: "displayFloor",
    value: function displayFloor() {
      this.ctx.fillStyle = "#472853";
      this.ctx.fillRect(0, 430, Game.DIM_X, 70);
      this.ctx.fillStyle = "#1d0b25";
      this.ctx.fillRect(0, 425, Game.DIM_X, 5);
    }
  }, {
    key: "chooseEnemy",
    value: function chooseEnemy() {
      if (Math.random() < 0.5) {
        this.chosenEnemy = new Penguin();
      } else {
        this.chosenEnemy = new Waluigi();
      }
    }
  }, {
    key: "play",
    value: function play() {
      var requestAnimationFrame = window.requestAnimationFrame;
      var cancelAnimationFrame = window.cancelAnimationFrame;
      playRequestId = requestAnimationFrame(this.play.bind(this));

      if (this.gamePlaying === true && this.muteMusic === false) {
        this.backgroundMusic.play();
      }

      if (this.gameOver()) {
        cancelAnimationFrame(playRequestId);
        this.kirby.die();
        this.coin.stopCoin();
        this.backgroundMusic.pause();
        this.gamePlaying = false;
      }

      if (this.coinCollision()) {
        this.points += 5;
        this.coin.hasCollide = true;
        this.score.drawScore(this.ctx, this.points);
      }

      if (this.enemyDimX < -200) {
        this.points += 10;
        this.score.drawScore(this.ctx, this.points);
        this.enemyDimX = Game.DIM_X;
        cancelAnimationFrame(playRequestId);
        this.chooseEnemy();
        this.play();
      }

      this.addEnemies();
      this.addCoin();
    }
  }, {
    key: "addKirby",
    value: function addKirby() {
      this.kirby.getKirbyaction(this.ctx);
    }
  }, {
    key: "addEnemies",
    value: function addEnemies() {
      var enemyDimY = 425 - this.chosenEnemy.height;
      this.enemyDimY = enemyDimY;
      this.enemyXStep = this.chosenEnemy.speed;
      this.ctx.clearRect(this.enemyDimX, this.enemyDimY, this.chosenEnemy.width + this.enemyXStep, this.chosenEnemy.height);
      this.addKirby();
      this.ctx.drawImage(this.chosenEnemy.image, 0, 0, this.chosenEnemy.width, this.chosenEnemy.height, this.enemyDimX, this.enemyDimY, this.chosenEnemy.width, this.chosenEnemy.height);
      this.enemyDimX -= this.enemyXStep;
    }
  }, {
    key: "addCoin",
    value: function addCoin() {
      if (Math.random() < 0.1 && this.coin.onCanvas === false) {
        this.coin.generateCoin(this.ctx);
      }
    }
  }, {
    key: "addMusic",
    value: function addMusic() {
      this.backgroundMusic = new Audio("audio/background_music.mp3");
    }
  }, {
    key: "keyListeners",
    value: function keyListeners() {
      var _this = this;

      this.document.addEventListener("keypress", function (e) {
        e.preventDefault();

        if (e.keyCode === 32) {
          _this.kirby.jump(_this.ctx);
        }
      });
    }
  }, {
    key: "musicListener",
    value: function musicListener() {
      var _this2 = this;

      this.document.addEventListener("keypress", function (e) {
        e.preventDefault();

        if (e.keyCode === 115 && _this2.muteMusic === false) {
          _this2.backgroundMusic.pause();

          _this2.muteMusic = true;
        } else if (e.keyCode === 115 && _this2.muteMusic === true) {
          _this2.backgroundMusic.play();

          _this2.muteMusic = false;
        }
      });
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      return !(this.kirby.xPos > this.enemyDimX + this.chosenEnemy.width - Game.ENEMY_OFFSET.xOffset || this.kirby.xPos + this.kirby.width < this.enemyDimX + Game.ENEMY_OFFSET.xOffset || this.kirby.yPos > this.enemyDimY + this.chosenEnemy.height - Game.ENEMY_OFFSET.yOffset || this.kirby.yPos + this.kirby.height < this.enemyDimY + Game.ENEMY_OFFSET.yOffset);
    }
  }, {
    key: "coinCollision",
    value: function coinCollision() {
      return !(this.kirby.xPos > this.coin.xPos + this.coin.width || this.kirby.xPos + this.kirby.width < this.coin.xPos || this.kirby.yPos > this.coin.yPos + this.coin.height || this.kirby.yPos + this.kirby.height < this.coin.yPos);
    }
  }]);

  return Game;
}();

Game.DIM_X = 800;
Game.DIM_Y = 500;
Game.ENEMY_OFFSET = {
  xOffset: 10,
  yOffset: 5
};
module.exports = Game;

/***/ }),

/***/ "./src/game_start.js":
/*!***************************!*\
  !*** ./src/game_start.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

var gameStart = function gameStart(ctx) {
  ctx.clearRect(0, 0, 800, 500);
  ctx.fillStyle = "#6b3e6f";
  ctx.fillRect(0, 0, 800, 500);
  var gameTitle = new Image();
  gameTitle.src = "images/kirby_run.png";
  var kirbyImage = new Image();
  kirbyImage.src = "images/kirby_game_start.png";

  window.onload = function () {
    ctx.drawImage(gameTitle, 200, 150);
    ctx.drawImage(kirbyImage, 400, 250);
  };

  ctx.font = "25px Dosis";
  ctx.textBaseline = "top";
  ctx.fillStyle = "#ff9191";
  ctx.fillText('Press ENTER to start!', 300, 300);
  ctx.fillText('Press SPACE to jump!', 300, 330);
  ctx.font = "25px Dosis";
  ctx.textBaseline = "top";
  ctx.fillStyle = "#ff9191";
  ctx.fillText("Press 's' to turn on/off music!", 270, 360);
};

module.exports = gameStart;

/***/ }),

/***/ "./src/kirby.js":
/*!**********************!*\
  !*** ./src/kirby.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Kirby =
/*#__PURE__*/
function () {
  function Kirby() {
    _classCallCheck(this, Kirby);

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
    this.kirbySpriteNum = 6; //variables for kirby jump

    this.kirbyOne = new Image();
    this.kirbyOne.src = "images/kirby-1.png";
    this.jumping = false;
    this.yVelocity = 0; // this.walkRequestId = null;

    this.dead = false;
  }

  _createClass(Kirby, [{
    key: "jump",
    value: function jump(ctx) {
      var requestAnimationFrame = window.requestAnimationFrame;
      var cancelAnimationFrame = window.cancelAnimationFrame; // let jumpRequestId = requestAnimationFrame(this.jump.bind(this, ctx));
      // if (this.dead) {
      //   cancelAnimationFrame(jumpRequestId);
      // }
      // cancelAnimationFrame(this.walkRequestId);

      ctx.clearRect(this.xPos, this.yPos, this.width, this.height);

      if (this.jumping === false) {
        this.yVelocity -= 20;
        this.jumping = true;
      }

      this.yVelocity += 0.8;
      this.yPos += this.yVelocity;

      if (this.yPos > 380) {
        this.yPos = 380;
        this.yVelocity = 0;
        this.jumping = false;
        this.walk(ctx);
      }

      ctx.drawImage(this.kirbyOne, this.xPos, this.yPos, this.width, this.height); // if (this.jumping === false) {
      //   cancelAnimationFrame(jumpRequestId);
      // }
    }
  }, {
    key: "walk",
    value: function walk(ctx) {
      var requestAnimationFrame = window.requestAnimationFrame;
      var cancelAnimationFrame = window.cancelAnimationFrame; // this.walkRequestId = requestAnimationFrame(this.walk.bind(this, ctx));
      // if (this.dead) {
      //   cancelAnimationFrame(this.walkRequestId);
      // }

      var i = Math.floor(this.frame_index) % this.kirbySpriteNum;
      ctx.clearRect(this.xPos, this.yPos, this.width, this.height);
      ctx.drawImage(this.kirbyImage, this.xCorner * i, this.yCorner, this.width, this.height, this.xPos, this.yPos, this.width, this.height);
      this.frame_index += this.frame_rate;
    }
  }, {
    key: "die",
    value: function die() {
      this.dead = true;
    }
  }, {
    key: "getKirbyaction",
    value: function getKirbyaction(ctx) {
      if (this.jumping) {
        this.jump(ctx);
      } else {
        this.walk(ctx);
      }
    }
  }]);

  return Kirby;
}();

module.exports = Kirby;

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Game = __webpack_require__(/*! ./game */ "./src/game.js");

var gameStart = __webpack_require__(/*! ./game_start */ "./src/game_start.js");

document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("canvas");
  canvas.width = Game.DIM_X;
  canvas.height = Game.DIM_Y;
  var ctx = canvas.getContext("2d"); //Start page

  gameStart(ctx); //Listener to start game

  document.addEventListener("keypress", function (e) {
    e.preventDefault();

    if (e.keyCode === 13) {
      var game = new Game(ctx);
      ctx.clearRect(0, 0, 800, 500);
      game.gamePlaying = true;
      game.displayFloor();
      game.start(); // } else if (e.keyCode === 13) {
    }
  });
});

/***/ }),

/***/ "./src/penguin.js":
/*!************************!*\
  !*** ./src/penguin.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Penguin = function Penguin() {
  _classCallCheck(this, Penguin);

  this.image = new Image();
  this.image.src = "images/penguin.png";
  this.height = 118;
  this.width = 118;
  this.speed = Math.random() * 3 + 4;
};

module.exports = Penguin;

/***/ }),

/***/ "./src/score.js":
/*!**********************!*\
  !*** ./src/score.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Score =
/*#__PURE__*/
function () {
  function Score() {
    _classCallCheck(this, Score);
  }

  _createClass(Score, [{
    key: "drawScore",
    value: function drawScore(ctx, points) {
      ctx.clearRect(650, 50, 200, 100);
      ctx.textBaseline = "top";
      ctx.font = '30px "Dosis"';
      ctx.fillStyle = "#ffc0cb";
      ctx.fillText("Score: ".concat(points), 650, 50);
    }
  }]);

  return Score;
}();

module.exports = Score;

/***/ }),

/***/ "./src/waluigi.js":
/*!************************!*\
  !*** ./src/waluigi.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Waluigi = function Waluigi() {
  _classCallCheck(this, Waluigi);

  this.image = new Image();
  this.image.src = "images/waluigi.png";
  this.height = 123;
  this.width = 66;
  this.speed = Math.random() * 3 + 6;
};

module.exports = Waluigi;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map