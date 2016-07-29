const Prawn = require('../lib/prawn');

// const canvas = document.getElementById('trawn');
// const context = canvas.getContext('2d');

function World(width, height) {
  this.width = width;
  this.height = height;
  this.prawns = [];
  this.allPrawnLocations = [];
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
    if (prawn.x === 0 || prawn.y === 0) alert('game over man');
    if (prawn.x === prawn.world.width - prawn.width) alert('game over man');
    if (prawn.y === prawn.world.height - prawn.height) alert('game over man');
  });
};

World.prototype.checkPoop = function() {
  var _self = this
  this.prawns.forEach(function (prawn) {
    var topLeftCorner = JSON.stringify({x:prawn.x, y:prawn.y});
    var bottomLeftCorner = JSON.stringify({x:prawn.x, y:prawn.y + prawn.height});
    var bottomRightCorner = JSON.stringify({x:prawn.x + prawn.width, y:prawn.y + prawn.height});
    var topRightCorner = JSON.stringify({x:prawn.x + prawn.width, y:prawn.y});
    if (prawn.dir === 'left') {
      if (JSON.stringify(_self.allPrawnLocations).includes(topLeftCorner)) alert('you stepped in poo');
      if (JSON.stringify(_self.allPrawnLocations).includes(bottomLeftCorner)) alert('you stepped in poo');
    }
    if (prawn.dir === 'right') {
      if (JSON.stringify(_self.allPrawnLocations).includes(bottomRightCorner)) alert('you stepped in poo');
      if (JSON.stringify(_self.allPrawnLocations).includes(topRightCorner)) alert('you stepped in poo');
    }
    if (prawn.dir === 'up') {
      if (JSON.stringify(_self.allPrawnLocations).includes(topLeftCorner)) alert('you stepped in poo');
      if (JSON.stringify(_self.allPrawnLocations).includes(topRightCorner)) alert('you stepped in poo');
    }
    if (prawn.dir === 'down') {
      if (JSON.stringify(_self.allPrawnLocations).includes(bottomRightCorner)) alert('you stepped in poo');
      if (JSON.stringify(_self.allPrawnLocations).includes(bottomLeftCorner)) alert('you stepped in poo');
    }
  });
};

World.prototype.checkPoopLeft = function(prawn) {
  var topLeftCorner = JSON.stringify({x:prawn.x, y:prawn.y});
  if (JSON.stringify(this.allPrawnLocations).includes(topLeftCorner)) alert('you stepped in poo');
  var bottomLeftCorner = JSON.stringify({x:prawn.x, y:prawn.y + prawn.height});
  if (JSON.stringify(this.allPrawnLocations).includes(bottomLeftCorner)) alert('you stepped in poo');
};

World.prototype.checkPoopDown = function(prawn) {
  var bottomRightCorner = JSON.stringify({x:prawn.x + prawn.width, y:prawn.y + prawn.height});
  if (JSON.stringify(this.allPrawnLocations).includes(bottomRightCorner)) alert('you stepped in poo');
  var bottomLeftCorner = JSON.stringify({x:prawn.x, y:prawn.y + prawn.height});
  if (JSON.stringify(this.allPrawnLocations).includes(bottomLeftCorner)) alert('you stepped in poo');
};

World.prototype.checkPoopRight = function(prawn) {
  var bottomRightCorner = JSON.stringify({x:prawn.x + prawn.width, y:prawn.y + prawn.height});
  if (JSON.stringify(this.allPrawnLocations).includes(bottomRightCorner)) alert('you stepped in poo');
  var topRightCorner = JSON.stringify({x:prawn.x + prawn.width, y:prawn.y});
  if (JSON.stringify(this.allPrawnLocations).includes(topRightCorner)) alert('you stepped in poo');
};

World.prototype.checkPoopUp = function(prawn) {
  var topLeftCorner = JSON.stringify({x:prawn.x, y:prawn.y});
  if (JSON.stringify(this.allPrawnLocations).includes(topLeftCorner)) alert('you stepped in poo');
  var topRightCorner = JSON.stringify({x:prawn.x + prawn.width, y:prawn.y});
  if (JSON.stringify(this.allPrawnLocations).includes(topRightCorner)) alert('you stepped in poo');
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





module.exports = World;
