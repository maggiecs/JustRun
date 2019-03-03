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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
      var coinRequestId = requestAnimationFrame(this.generateCoin.bind(this, ctx));

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

/* harmony default export */ __webpack_exports__["default"] = (Coin);

/***/ }),

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Enemy = function Enemy(options) {
  _classCallCheck(this, Enemy);

  this.image = new Image();
  this.image.src = options.image.src;
  this.height = options.height;
  this.width = options.width;
  this.speed = 5;
};

/* harmony default export */ __webpack_exports__["default"] = (Enemy);

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kirby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kirby */ "./src/kirby.js");
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score */ "./src/score.js");
/* harmony import */ var _coin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coin */ "./src/coin.js");
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enemy */ "./src/enemy.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Game =
/*#__PURE__*/
function () {
  function Game(ctx, playing) {
    _classCallCheck(this, Game);

    this.document = document;
    this.ctx = ctx;
    this.kirby = new _kirby__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.score = new _score__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.coin = new _coin__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.points = 0;
    this.chosenEnemy = null;
    this.enemyDimX = Game.DIM_X;
    this.enemyXStep = 6;
    this.gamePlaying = playing;
    this.muteMusic = false;
    this.extraSpeed = 0;
    this.koKirbyImage = new Image();
    this.koKirbyImage.src = "images/ko_kirby.png";
    this.gameOverImage = new Image();
    this.gameOverImage.src = "images/game_over.png";
    this.waluigiImage = new Image();
    this.waluigiImage.src = "images/waluigi.png";
    this.penguinImage = new Image();
    this.penguinImage.src = "images/penguin.png";
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
        this.chosenEnemy = new _enemy__WEBPACK_IMPORTED_MODULE_3__["default"]({
          image: this.penguinImage,
          imageSrc: this.penguinImage.src,
          height: 118,
          width: 118
        });
      } else {
        this.chosenEnemy = new _enemy__WEBPACK_IMPORTED_MODULE_3__["default"]({
          image: this.waluigiImage,
          imageSrc: this.waluigiImage.src,
          height: 123,
          width: 66
        });
      }
    }
  }, {
    key: "play",
    value: function play() {
      var requestAnimationFrame = window.requestAnimationFrame;
      var cancelAnimationFrame = window.cancelAnimationFrame;
      var playRequestId = requestAnimationFrame(this.play.bind(this));

      if (this.gamePlaying && this.muteMusic === false) {
        this.backgroundMusic.play();
      }

      if (this.coinCollision()) {
        this.points += 20;
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
        this.enemyXStep += 0.25;
      }

      this.addEnemies();
      this.addCoin();

      if (this.gameOver(this.points)) {
        cancelAnimationFrame(playRequestId);
        this.kirby.die();
        this.coin.stopCoin();
        this.backgroundMusic.pause();
        this.gamePlaying = false;

        if (!this.muteMusic) {
          this.gameOverMusic.play();
        }

        var that = this;
        setTimeout(function () {
          that.displayGameOver();
        }, 3000);
      }
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
      this.gameOverMusic = new Audio("audio/game_over_music.mp3");
    }
  }, {
    key: "keyListeners",
    value: function keyListeners() {
      var _this = this;

      this.document.addEventListener("keypress", function (e) {
        e.preventDefault();

        if (e.keyCode === 32 && _this.gamePlaying) {
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

        if (e.keyCode === 115 && !_this2.muteMusic) {
          _this2.gameOverMusic.pause();

          _this2.backgroundMusic.pause();

          _this2.muteMusic = true;
        } else if (e.keyCode === 115 && _this2.muteMusic) {
          if (_this2.gamePlaying) {
            _this2.backgroundMusic.play();
          } else {
            _this2.gameOverMusic.play();
          }

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
  }, {
    key: "displayGameOver",
    value: function displayGameOver() {
      this.gameOverMusic.pause();
      var localhighScore = parseInt(localStorage.getItem("highScore"));

      if (!localhighScore || localhighScore < this.points) {
        localStorage.setItem("highScore", this.points);
        localhighScore = parseInt(localStorage.getItem("highScore"));
      }

      this.ctx.clearRect(0, 0, 800, 500);
      this.ctx.fillStyle = "#6b3e6f";
      this.ctx.fillRect(0, 0, 800, 500);
      this.ctx.font = "25px Dosis";
      this.ctx.textBaseline = "top";
      this.ctx.fillStyle = "#ff9191";
      this.ctx.drawImage(this.gameOverImage, 212, 120);
      this.ctx.drawImage(this.koKirbyImage, 377.5, 220);
      this.ctx.font = "40px Dosis";
      this.ctx.textBaseline = "top";
      this.ctx.fillStyle = "#ff9191";
      this.ctx.fillText("Score: ".concat(this.points), 325, 280);
      this.ctx.fillText("Current High Score: ".concat(localhighScore), 230, 330);
      setTimeout(function () {
        location.reload();
      }, 3000);
    }
  }]);

  return Game;
}();

Game.DIM_X = 800;
Game.DIM_Y = 500;
Game.ENEMY_OFFSET = {
  xOffset: 20,
  yOffset: 10
};
/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/game_start.js":
/*!***************************!*\
  !*** ./src/game_start.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var closeGameStartDisplay = function closeGameStartDisplay() {
  var gameStartDisplay = document.getElementsByClassName('game-start')[0];
  gameStartDisplay.className = "game-start off";
};

var openGameStartDisplay = function openGameStartDisplay() {
  var gameStartDisplay = document.getElementsByClassName('game-start off')[0];
  gameStartDisplay.className = "game-start";
};

var GameStart =
/*#__PURE__*/
function () {
  function GameStart(ctx) {
    _classCallCheck(this, GameStart);

    this.ctx = ctx;
    this.gamePlaying = false;
    this.gameTitleImage = new Image();
    this.gameTitleImage.src = "images/just_run.png";
    this.kirbyImage = new Image();
    this.kirbyImage.src = "images/kirby_game_start.png";
  }

  _createClass(GameStart, [{
    key: "gameStart",
    value: function gameStart() {
      var _this = this;

      this.ctx.clearRect(0, 0, 800, 500);
      this.ctx.fillStyle = "#6b3e6f";
      this.ctx.fillRect(0, 0, 800, 500);
      var that = this;

      window.onload = function () {
        openGameStartDisplay();
        that.ctx.drawImage(that.gameTitleImage, 195, 120);
        that.ctx.drawImage(that.kirbyImage, 377.5, 230);
      }; //Listener to start game


      document.addEventListener("keypress", function (e) {
        e.preventDefault();

        if (e.keyCode === 13 && !_this.gamePlaying) {
          _this.gamePlaying = true;
          var game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](_this.ctx, _this.gamePlaying);
          closeGameStartDisplay();

          _this.ctx.clearRect(0, 0, 800, 500);

          game.displayFloor();
          game.start();
        }
      });
    }
  }]);

  return GameStart;
}();

/* harmony default export */ __webpack_exports__["default"] = (GameStart);

/***/ }),

/***/ "./src/kirby.js":
/*!**********************!*\
  !*** ./src/kirby.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Kirby =
/*#__PURE__*/
function () {
  function Kirby() {
    _classCallCheck(this, Kirby);

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
    this.kirbySpriteNum = 6; //variables for player jump

    this.kirbyOne = new Image();
    this.kirbyOne.src = "images/kirby-jump.png";
    this.jumping = false;
    this.yVelocity = 0;
    this.dead = false;
  }

  _createClass(Kirby, [{
    key: "jump",
    value: function jump(ctx) {
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
  }, {
    key: "walk",
    value: function walk(ctx) {
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

/* harmony default export */ __webpack_exports__["default"] = (Kirby);

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_start */ "./src/game_start.js");

window.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("canvas");
  canvas.width = 800;
  canvas.height = 500;
  var ctx = canvas.getContext("2d"); //Start page

  var gameStart = new _game_start__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
  gameStart.gameStart();
});

/***/ }),

/***/ "./src/score.js":
/*!**********************!*\
  !*** ./src/score.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (Score);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map