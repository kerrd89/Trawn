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

	__webpack_require__(1);
	__webpack_require__(2);

/***/ },
/* 1 */
/***/ function(module, exports) {

	function Prawn(options) {
	  this.x = options.x || 5;
	  this.y = options.y || 5;
	  this.dir = options.dir || 'left';
	  this.pastLocations = [];
	};

	var canvas = document.getElementById('trawn');

	Prawn.prototype.move = function () {
	  var currentDirection = this.dir;
	  if (currentDirection === 'left') {
	    this.moveLeft();
	  };
	  if (currentDirection === 'right') {
	    this.moveRight();
	  };
	  if (currentDirection === 'up') {
	    this.moveUp();
	  };
	  if (currentDirection === 'down') {
	    this.moveDown();
	  };
	};

	Prawn.prototype.moveRight = function () {
	  this.x = this.x + 1;
	  this.dir = 'right';
	};

	Prawn.prototype.moveLeft = function () {
	  this.x = this.x - 1;
	  this.dir = 'left';
	};

	Prawn.prototype.moveUp = function () {
	  this.y = this.y - 1;
	  this.dir = 'up';
	};

	Prawn.prototype.moveDown = function () {
	  this.y = this.y + 1;
	  this.dir = 'down';
	};

	Prawn.prototype.changeDirectionRight = function () {
	  if (this.dir === 'up' || this.dir === 'down') {
	    this.moveRight();
	  } else {
	    this.move();
	  };
	};

	Prawn.prototype.changeDirectionLeft = function () {
	  if (this.dir === 'up' || this.dir === 'down') {
	    this.moveLeft();
	  } else {
	    this.move();
	  };
	};

	Prawn.prototype.changeDirectionUp = function () {
	  if (this.dir === 'left' || this.dir === 'right') {
	    this.moveUp();
	  } else {
	    this.move();
	  };
	};

	Prawn.prototype.changeDirectionDown = function () {
	  if (this.dir === 'left' || this.dir === 'right') {
	    this.moveDown();
	  } else {
	    this.move();
	  };
	};

	Prawn.prototype.recordLocation = function () {
	  var prawnHeadLocation = { x: this.x, y: this.y };
	  Prawn.pastLocations.push(prawnHeadLocation);
	};

	// Prawn.prototype.checkLocationForPrawnTails = function(){
	//   var prawnHeadLocation = {x: this.x, y: this.y};
	//   //check prawnHeadLocation agains t
	// };


	module.exports = Prawn;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const Prawn = __webpack_require__(1);

	function World(options) {
	  this.x = options.x || 500;
	  this.y = options.y || 500;
	};

	module.exports = World;

/***/ }
/******/ ]);