/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const canvas = document.getElementById('trawn');
	const context = canvas.getContext('2d');

	const Prawn = __webpack_require__(1);
	const World = __webpack_require__(2);

	var button = document.querySelector('button');
	var world = new World(canvas.width, canvas.height, context);

	function setWorld() {
	  context.fillStyle = '#4E78A0';
	  context.fillRect(0, 0, world.width, world.height);
	};

	setWorld();

	window.setTimeout(displayWelcome, 1000);

	window.setTimeout(displayControls, 2000);

	function displayWelcome() {
	  context.fillStyle = '#15155e';
	  context.font = 'bold 2.25em "Orbitron"';
	  context.textAlign = 'center';
	  context.fillText('WELCOME TO TRAWN', 250, 50);
	};

	function displayControls() {
	  context.font = 'bold 1.5em "Orbitron"';
	  context.fillText('PLAYER A', 125, 150);
	  context.fillText('PLAYER B', 350, 150);

	  context.font = 'bold 1em "Orbitron"';
	  context.fillText('W', 125, 250);
	  context.fillText('|', 125, 275);
	  context.fillText('UP', 125, 300);
	  context.fillText('A  -  LEFT  RIGHT  -  D', 125, 325);
	  context.fillText('DOWN', 125, 350);
	  context.fillText('|', 125, 375);
	  context.fillText('S', 125, 400);
	  // context.fillText('BRAKE: Q', 125, 450);

	  context.fillText('▲', 350, 250);
	  context.fillText('|', 350, 275);
	  context.fillText('UP', 350, 300);
	  context.fillText('◄  -  LEFT  RIGHT  -  ►', 350, 325);
	  context.fillText('DOWN', 350, 350);
	  context.fillText('|', 350, 375);
	  context.fillText('▼', 350, 400);
	  // context.fillText('BRAKE: OPTION', 350, 450);
	};

	function initiateGame() {
	  context.fillStyle = '#4E78A0';
	  context.fillRect(0, 0, world.width, world.height);
	  var difficulty = document.querySelector('.difficulty-adjuster');
	  world.difficulty = parseInt(difficulty.value);
	  var prawnSpeed = world.difficulty;
	  world.addPrawn(new Prawn({ x: 100, y: 250, color: '#B0171F', ID: 'B', speed: prawnSpeed }));
	  world.addPrawn(new Prawn({ x: 400, y: 250, dir: 'left', color: '#F5D3E2', ID: 'A', speed: prawnSpeed }));
	};

	function startGame() {
	  if (world.prawns.length === 0 && context.fillStyle !== '#ef5351') {
	    setWorld();
	    context.fillStyle = '#15155e';
	    context.fillRect(0, 50, world.width, 200);
	    context.fillStyle = '#ef5351';
	    context.textAlign = 'center';
	    context.font = 'bold 2em "Orbitron"';
	    context.fillText('GET READY TO TRAWN IN', 250, 150);
	    context.fillText('3', 250, 200);
	    window.setTimeout(function () {
	      context.fillStyle = '#4E78A0';
	      context.fillRect(0, 0, world.width, world.height);
	      context.fillStyle = '#15155e';
	      context.fillRect(0, 50, world.width, 200);
	      context.fillStyle = '#ef5351';
	      context.fillText('GET READY TO TRAWN IN', 250, 150);
	      context.fillText('2', 250, 200);
	    }, 1000);
	    window.setTimeout(function () {
	      context.fillStyle = '#4E78A0';
	      context.fillRect(0, 0, world.width, world.height);
	      context.fillStyle = '#15155e';
	      context.fillRect(0, 50, world.width, 200);
	      context.fillStyle = '#ef5351';
	      context.fillText('GET READY TO TRAWN IN', 250, 150);
	      context.fillText('1', 250, 200);
	    }, 2000);
	    window.setTimeout(initiateGame, 3000);
	  };
	};

	renderPrawns(context, world);

	function renderPrawns(context, world) {
	  startScreen = canvas.toDataURL();
	  world.prawns.forEach(function (prawn) {
	    context.fillStyle = prawn.color;
	    context.fillRect(prawn.x, prawn.y, prawn.width, prawn.height);
	    prawn.move();
	  });
	};

	function tick() {
	  world.checkEdges();
	  world.checkPoop();
	};

	function checkForPrawns() {
	  if (world.prawns.length === 0) {
	    displayControls();
	  };
	};

	requestAnimationFrame(function gameLoop() {
	  renderPrawns(context, world);
	  tick();
	  requestAnimationFrame(gameLoop);
	});

	document.addEventListener('keydown', function (event) {
	  event.preventDefault();
	  if (event.keyCode === 38) {
	    world.upArrow(1);
	  };
	  if (event.keyCode === 40) {
	    world.downArrow(1);
	  };
	  if (event.keyCode === 39) {
	    world.rightArrow(1);
	  };
	  if (event.keyCode === 37) {
	    world.leftArrow(1);
	  };
	  if (event.keyCode === 87) world.upArrow(0);
	  if (event.keyCode === 83) world.downArrow(0);
	  if (event.keyCode === 68) world.rightArrow(0);
	  if (event.keyCode === 65) world.leftArrow(0);
	  // if(event.keyCode === 81) {world.brakePrawnA()};
	  // if(event.keyCode === 18) {world.brakePrawnB()};
	  if (event.keyCode === 32) startGame();
	  if (event.keyCode === 13) startGame();
	});

	button.addEventListener('click', startGame);

/***/ },
/* 1 */
/***/ function(module, exports) {

	function Prawn(prawnProperties) {
	  this.x = prawnProperties.x || 5;
	  this.y = prawnProperties.y || 5;
	  this.width = prawnProperties.width || 5;
	  this.height = prawnProperties.height || 5;
	  this.dir = prawnProperties.dir || 'right';
	  this.world = prawnProperties.world || { worldWidth: 100, worldHeight: 100 };
	  this.pastLocations = prawnProperties.pastLocations || [];
	  this.speed = prawnProperties.speed || 3;
	  this.color = prawnProperties.color;
	  this.ID = prawnProperties.ID;
	};

	Prawn.prototype.move = function () {
	  var currentDirection = this.dir;
	  if (currentDirection === 'left') this.moveLeft();
	  if (currentDirection === 'right') this.moveRight();
	  if (currentDirection === 'up') this.moveUp();
	  if (currentDirection === 'down') this.moveDown();
	};

	Prawn.prototype.poop = function () {
	  var topLeftCorner = { x: this.x, y: this.y };
	  var topRightCorner = this.findTopRightCorner();
	  var bottomRightCorner = this.findBottomRightCorner();
	  var bottomLeftCorner = this.findBottomLeftCorner();
	  this.world.allPrawnLocations.push(topLeftCorner);
	  this.world.allPrawnLocations.push(topRightCorner);
	  this.world.allPrawnLocations.push(bottomRightCorner);
	  this.world.allPrawnLocations.push(bottomLeftCorner);
	};

	Prawn.prototype.moveRight = function () {
	  this.dir = 'right';
	  this.poop();
	  this.x = this.x + this.speed;
	};

	Prawn.prototype.moveLeft = function () {
	  this.dir = 'left';
	  this.poop();
	  this.x = this.x - this.speed;
	};

	Prawn.prototype.moveUp = function () {
	  this.dir = 'up';
	  this.poop();
	  this.y = this.y - this.speed;
	};

	Prawn.prototype.moveDown = function () {
	  this.dir = 'down';
	  this.poop();
	  this.y = this.y + this.speed;
	};

	Prawn.prototype.changeDirectionRight = function () {
	  if (this.dir === 'up') {
	    this.moveDown();
	    this.moveRight();
	  };
	  if (this.dir === 'down') {
	    this.moveUp();
	    this.moveRight();
	  }
	};

	Prawn.prototype.changeDirectionLeft = function () {
	  if (this.dir === 'up') {
	    this.moveDown();
	    this.moveLeft();
	  };
	  if (this.dir === 'down') {
	    this.moveUp();
	    this.moveLeft();
	  };
	};

	Prawn.prototype.changeDirectionUp = function () {
	  if (this.dir === 'left') {
	    this.moveRight();
	    this.moveUp();
	  };
	  if (this.dir === 'right') {
	    this.moveLeft();
	    this.moveUp();
	  }
	};

	Prawn.prototype.changeDirectionDown = function () {
	  if (this.dir === 'left') {
	    this.moveRight();
	    this.moveDown();
	  }
	  if (this.dir === 'right') {
	    this.moveLeft();
	    this.moveDown();
	  }
	};

	Prawn.prototype.findBottomRightCorner = function () {
	  var bottomRightCorner = { x: this.x + 4, y: this.y + 4 };
	  return bottomRightCorner;
	};

	Prawn.prototype.findBottomLeftCorner = function () {
	  var bottomLeftCorner = { x: this.x, y: this.y + 4 };
	  return bottomLeftCorner;
	};

	Prawn.prototype.findTopRightCorner = function () {
	  var topRightCorner = { x: this.x + 4, y: this.y };
	  return topRightCorner;
	};

	module.exports = Prawn;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const Prawn = __webpack_require__(1);

	// const canvas = document.getElementById('trawn');
	// const context = canvas.getContext('2d');

	function World(width, height, context) {
	  this.width = width;
	  this.height = height;
	  this.prawns = [];
	  this.allPrawnLocations = [];
	  this.context = context;
	  this.score = [0, 0];
	  this.difficulty = 3;
	}

	World.prototype.addPrawn = function (prawn) {
	  prawn.world = this;
	  this.prawns.push(prawn);
	};

	World.prototype.checkEdges = function () {
	  var _self = this;
	  this.prawns.forEach(function (prawn) {
	    if (prawn.x <= 0 || prawn.y <= 0) _self.resetGame(prawn);
	    if (prawn.x >= prawn.world.width - prawn.width) _self.resetGame(prawn);
	    if (prawn.y >= prawn.world.height - prawn.height) _self.resetGame(prawn);
	  });
	};

	World.prototype.checkPoop = function () {
	  var _self = this;
	  this.prawns.forEach(function (prawn) {

	    var topLeftCorner = JSON.stringify({ x: prawn.x, y: prawn.y });
	    var leftEdge2 = JSON.stringify({ x: prawn.x, y: prawn.y + 1 });
	    var leftEdge3 = JSON.stringify({ x: prawn.x, y: prawn.y + 2 });
	    var leftEdge4 = JSON.stringify({ x: prawn.x, y: prawn.y + 3 });
	    var bottomLeftCorner = JSON.stringify({ x: prawn.x, y: prawn.y + 4 });
	    var bottomEdge2 = JSON.stringify({ x: prawn.x + 1, y: prawn.y + 4 });
	    var bottomEdge3 = JSON.stringify({ x: prawn.x + 2, y: prawn.y + 4 });
	    var bottomEdge4 = JSON.stringify({ x: prawn.x + 3, y: prawn.y + 4 });
	    var bottomRightCorner = JSON.stringify({ x: prawn.x + 4, y: prawn.y + 4 });
	    var rightEdge2 = JSON.stringify({ x: prawn.x + 4, y: prawn.y + 1 });
	    var rightEdge3 = JSON.stringify({ x: prawn.x + 4, y: prawn.y + 2 });
	    var rightEdge4 = JSON.stringify({ x: prawn.x + 4, y: prawn.y + 3 });
	    var topRightCorner = JSON.stringify({ x: prawn.x + 4, y: prawn.y });
	    var topEdge2 = JSON.stringify({ x: prawn.x + 1, y: prawn.y });
	    var topEdge3 = JSON.stringify({ x: prawn.x + 2, y: prawn.y });
	    var topEdge4 = JSON.stringify({ x: prawn.x + 3, y: prawn.y });
	    var collisionsBox = [];
	    if (prawn.dir === 'left') {
	      if (JSON.stringify(_self.allPrawnLocations).includes(topLeftCorner)) _self.resetGame(prawn);
	      if (JSON.stringify(_self.allPrawnLocations).includes(leftEdge2)) _self.resetGame(prawn);
	      if (JSON.stringify(_self.allPrawnLocations).includes(leftEdge3)) _self.resetGame(prawn);
	      if (JSON.stringify(_self.allPrawnLocations).includes(leftEdge4)) _self.resetGame(prawn);
	      if (JSON.stringify(_self.allPrawnLocations).includes(bottomLeftCorner)) _self.resetGame(prawn);
	    }
	    if (prawn.dir === 'right') {
	      if (JSON.stringify(_self.allPrawnLocations).includes(bottomRightCorner)) _self.resetGame(prawn);
	      if (JSON.stringify(_self.allPrawnLocations).includes(rightEdge2)) _self.resetGame(prawn);
	      if (JSON.stringify(_self.allPrawnLocations).includes(rightEdge3)) _self.resetGame(prawn);
	      if (JSON.stringify(_self.allPrawnLocations).includes(rightEdge4)) _self.resetGame(prawn);
	      if (JSON.stringify(_self.allPrawnLocations).includes(topRightCorner)) _self.resetGame(prawn);
	    }
	    if (prawn.dir === 'up') {
	      if (JSON.stringify(_self.allPrawnLocations).includes(topLeftCorner)) _self.resetGame(prawn);
	      if (JSON.stringify(_self.allPrawnLocations).includes(topEdge2)) _self.resetGame(prawn);
	      if (JSON.stringify(_self.allPrawnLocations).includes(topEdge3)) _self.resetGame(prawn);
	      if (JSON.stringify(_self.allPrawnLocations).includes(topEdge4)) _self.resetGame(prawn);
	      if (JSON.stringify(_self.allPrawnLocations).includes(topRightCorner)) _self.resetGame(prawn);
	    }
	    if (prawn.dir === 'down') {
	      if (JSON.stringify(_self.allPrawnLocations).includes(bottomRightCorner)) _self.resetGame(prawn);
	      if (JSON.stringify(_self.allPrawnLocations).includes(bottomEdge2)) _self.resetGame(prawn);
	      if (JSON.stringify(_self.allPrawnLocations).includes(bottomEdge3)) _self.resetGame(prawn);
	      if (JSON.stringify(_self.allPrawnLocations).includes(bottomEdge4)) _self.resetGame(prawn);
	      if (JSON.stringify(_self.allPrawnLocations).includes(bottomLeftCorner)) _self.resetGame(prawn);
	    };
	  });
	};

	World.prototype.updateScore = function (prawn) {
	  var player2score = document.querySelector('.player2-score');
	  var player1score = document.querySelector('.player1-score');
	  if (prawn === this.prawns[0]) {
	    this.score[1] = this.score[1] + 1;
	    player2score.innerText = 'PRAWN B \n' + this.score[1];
	  }
	  if (prawn === this.prawns[1]) {
	    this.score[0] = this.score[0] + 1;
	    player1score.innerText = 'PRAWN A \n' + this.score[0];
	  }
	};

	World.prototype.upArrow = function (playerNumber) {
	  this.prawns[playerNumber].changeDirectionUp();
	};

	World.prototype.downArrow = function (playerNumber) {
	  this.prawns[playerNumber].changeDirectionDown();
	};

	World.prototype.rightArrow = function (playerNumber) {
	  this.prawns[playerNumber].changeDirectionRight();
	};

	World.prototype.leftArrow = function (playerNumber) {
	  this.prawns[playerNumber].changeDirectionLeft();
	};

	World.prototype.resetGame = function (prawn) {
	  this.updateScore(prawn);
	  this.context.fillStyle = '#4E78A0';
	  this.context.clearRect(0, 0, this.width, this.height);
	  this.prawns = [];
	  this.allPrawnLocations = [];
	  this.context.fillStyle = '#4E78A0';
	  this.context.fillRect(0, 0, this.width, this.height);
	  this.context.fillStyle = '#15155e';
	  this.context.fillRect(0, 50, this.width, 200);
	  this.context.fillStyle = '#FFFFFF';
	  this.context.textAlign = 'center';
	  this.context.font = 'bold 2em "Orbitron"';
	  this.context.fillText('GAME OVER', 250, 150);
	};

	// World.prototype.brakePrawnA = function () {
	//     var _self = this;
	//
	//     color = this.getRandomColor()
	//     this.prawns[0].speed = this.prawns[0].speed/2;
	//     this.prawns[0].color = color;
	//     window.setTimeout(function()
	//       {
	//         _self.prawns[0].color = '#B0171F';
	//         _self.prawns[0].speed = _self.prawns[0].speed*2 ;
	//       }, 500);
	// };

	// World.prototype.getRandomColor = function() {
	//     var letters = '0123456789ABCDEF';
	//     var color = '#';
	//     for (var i = 0; i < 6; i++ ) {
	//         color += letters[Math.floor(Math.random() * 16)];
	//     }
	//     return color;
	// }

	// World.prototype.brakePrawnB = function () {
	//     var _self = this;
	//     color = this.getRandomColor()
	//     this.prawns[1].speed = this.prawns[1].speed/2;
	//     this.prawns[1].color = color;
	//       window.setTimeout(function()
	//       {
	//         _self.prawns[1].color = '#F5D3E2';
	//         _self.prawns[1].speed = _self.prawns[1].speed*2 ;
	//       }, 500);
	// };


	module.exports = World;

/***/ }
/******/ ]);