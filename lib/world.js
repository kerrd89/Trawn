const Prawn = require('../lib/prawn');

// const canvas = document.getElementById('trawn');
// const context = canvas.getContext('2d');

function World(width, height, context) {
  this.width = width;
  this.height = height;
  this.prawns = [];
  this.allPrawnLocations = [];
  this.context = context;
}

World.prototype.addPrawn = function (prawn) {
  prawn.world = this;
  this.prawns.push(prawn);
};

// World.prototype.combineLocations = function () {
//   this.prawns.forEach(function (prawn) {
//     this.allPrawnLocations.push[]
//   });
// };



World.prototype.checkEdges = function () {
  this.prawns.forEach(function (prawn) {
    if (prawn.x === 0 || prawn.y === 0) _self.resetGame(prawn);
    if (prawn.x === prawn.world.width - prawn.width) _self.resetGame(prawn);
    if (prawn.y === prawn.world.height - prawn.height) _self.resetGame(prawn);
  });
};

World.prototype.checkPoop = function() {
  var _self = this;
  this.prawns.forEach(function (prawn) {
    var topLeftCorner = JSON.stringify({x:prawn.x, y:prawn.y});
    var bottomLeftCorner = JSON.stringify({x:prawn.x, y:prawn.y + prawn.height});
    var bottomRightCorner = JSON.stringify({x:prawn.x + prawn.width, y:prawn.y + prawn.height});
    var topRightCorner = JSON.stringify({x:prawn.x + prawn.width, y:prawn.y});
    if (prawn.dir === 'left') {
      if (JSON.stringify(_self.allPrawnLocations).includes(topLeftCorner)) _self.resetGame(prawn);
      if (JSON.stringify(_self.allPrawnLocations).includes(bottomLeftCorner)) _self.resetGame(prawn);
    }
    if (prawn.dir === 'right') {
      if (JSON.stringify(_self.allPrawnLocations).includes(bottomRightCorner)) _self.resetGame(prawn);
      if (JSON.stringify(_self.allPrawnLocations).includes(topRightCorner)) _self.resetGame(prawn);
    }
    if (prawn.dir === 'up') {
      if (JSON.stringify(_self.allPrawnLocations).includes(topLeftCorner)) _self.resetGame(prawn);
      if (JSON.stringify(_self.allPrawnLocations).includes(topRightCorner)) _self.resetGame(prawn);
    }
    if (prawn.dir === 'down') {
      if (JSON.stringify(_self.allPrawnLocations).includes(bottomRightCorner)) _self.resetGame(prawn);
      if (JSON.stringify(_self.allPrawnLocations).includes(bottomLeftCorner)) _self.resetGame(prawn);
    }
  });
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

World.prototype.resetGame = function () {
  this.context.fillStyle = '#4E78A0';
  this.context.clearRect(0, 0, this.width, this.height);
  this.prawns = [];
  this.allPrawnLocations = [];
  this.context.fillStyle = '#4E78A0';
  this.context.fillRect(0, 0, this.width, this.height);
  this.addPrawn(new Prawn({x: 100, y: 250, color:'#B0171F'}));
  this.addPrawn(new Prawn({x: 400, y: 250, dir: 'left', color: '#F5D3E2'}));
}



module.exports = World;





//
// World.prototype.checkPoopLeft = function(prawn) {
//   var topLeftCorner = JSON.stringify({x:prawn.x, y:prawn.y});
//   if (JSON.stringify(this.allPrawnLocations).includes(topLeftCorner)) _self.resetGame(prawn);
//   var bottomLeftCorner = JSON.stringify({x:prawn.x, y:prawn.y + prawn.height});
//   if (JSON.stringify(this.allPrawnLocations).includes(bottomLeftCorner)) _self.resetGame(prawn);
// };
//
// World.prototype.checkPoopDown = function(prawn) {
//   var bottomRightCorner = JSON.stringify({x:prawn.x + prawn.width, y:prawn.y + prawn.height});
//   if (JSON.stringify(this.allPrawnLocations).includes(bottomRightCorner)) _self.resetGame(prawn);
//   var bottomLeftCorner = JSON.stringify({x:prawn.x, y:prawn.y + prawn.height});
//   if (JSON.stringify(this.allPrawnLocations).includes(bottomLeftCorner)) _self.resetGame(prawn);
// };
//
// World.prototype.checkPoopRight = function(prawn) {
//   var bottomRightCorner = JSON.stringify({x:prawn.x + prawn.width, y:prawn.y + prawn.height});
//   if (JSON.stringify(this.allPrawnLocations).includes(bottomRightCorner)) _self.resetGame(prawn);
//   var topRightCorner = JSON.stringify({x:prawn.x + prawn.width, y:prawn.y});
//   if (JSON.stringify(this.allPrawnLocations).includes(topRightCorner)) _self.resetGame(prawn);
// };
//
// World.prototype.checkPoopUp = function(prawn) {
//   var topLeftCorner = JSON.stringify({x:prawn.x, y:prawn.y});
//   if (JSON.stringify(this.allPrawnLocations).includes(topLeftCorner)) _self.resetGame(prawn);
//   var topRightCorner = JSON.stringify({x:prawn.x + prawn.width, y:prawn.y});
//   if (JSON.stringify(this.allPrawnLocations).includes(topRightCorner)) _self.resetGame(prawn);
// };
