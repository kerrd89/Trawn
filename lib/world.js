const Prawn = require('../lib/prawn');

// const canvas = document.getElementById('trawn');
// const context = canvas.getContext('2d');

function World(width, height) {
  this.width = width;
  this.height = height;
  this.prawns = [];
}

World.prototype.addPrawn = function (prawn) {
  prawn.world = this;
  this.prawns.push(prawn);
};



World.prototype.checkEdges = function () {
  this.prawns.forEach(function (prawn) {
    if (prawn.x === 0 || prawn.y === 0) alert('game over man');
    if (prawn.x === prawn.world.width - prawn.width) alert('game over man');
    if (prawn.y === prawn.world.height - prawn.height) alert('game over man');
  });
};

World.prototype.checkPoop = function () {
  this.prawns.forEach(function (prawn) {
    var currentLocation = JSON.stringify({x:prawn.x, y:prawn.y});
    if (JSON.stringify(prawn.pastLocations).includes(currentLocation)) alert('you stepped in poo');
  });
};

// World.prototype.checkPoop = function() {
//   this.prawns.forEach(function (prawn) {
//     debugger;
//     if (prawn.dir === 'left') checkPoopLeft(prawn);
//     if (prawn.dir === 'right') checkPoopRight(prawn);
//     if (prawn.dir === 'up') checkPoopUp(prawn);
//     if (prawn.dir === 'down') checkPoopDown(prawn);
//   });
// };

World.prototype.checkPoopLeft = function(prawn) {
  var topLeftCorner = JSON.stringify({x:prawn.x, y:prawn.y});
  if (JSON.stringify(prawn.pastLocations).includes(topLeftCorner)) alert('you stepped in poo');
  var bottomLeftCorner = JSON.stringify({x:prawn.x, y:prawn.y + prawn.height});
  if (JSON.stringify(prawn.pastLocations).includes(bottomLeftCorner)) alert('you stepped in poo');
};

World.prototype.checkPoopDown = function(prawn) {
  var bottomRightCorner = JSON.stringify({x:prawn.x + prawn.width, y:prawn.y + prawn.height});
  if (JSON.stringify(prawn.pastLocations).includes(bottomRightCorner)) alert('you stepped in poo');
  var bottomLeftCorner = JSON.stringify({x:prawn.x, y:prawn.y + prawn.height});
  if (JSON.stringify(prawn.pastLocations).includes(bottomLeftCorner)) alert('you stepped in poo');
};

World.prototype.checkPoopRight = function(prawn) {
  var bottomRightCorner = JSON.stringify({x:prawn.x + prawn.width, y:prawn.y + prawn.height});
  if (JSON.stringify(prawn.pastLocations).includes(bottomRightCorner)) alert('you stepped in poo');
  var topRightCorner = JSON.stringify({x:prawn.x + prawn.width, y:prawn.y});
  if (JSON.stringify(prawn.pastLocations).includes(topRightCorner)) alert('you stepped in poo');
};

World.prototype.checkPoopUp = function(prawn) {
  var topLeftCorner = JSON.stringify({x:prawn.x, y:prawn.y});
  if (JSON.stringify(prawn.pastLocations).includes(topLeftCorner)) alert('you stepped in poo');
  var topRightCorner = JSON.stringify({x:prawn.x + prawn.width, y:prawn.y});
  if (JSON.stringify(prawn.pastLocations).includes(topRightCorner)) alert('you stepped in poo');
};

World.prototype.upArrow = function () {
  this.prawns.forEach(function (prawn) {
    prawn.changeDirectionUp();
  });
};

World.prototype.downArrow = function () {
  this.prawns.forEach(function (prawn) {
    prawn.changeDirectionDown();
  });
};

World.prototype.rightArrow = function () {
  this.prawns.forEach(function (prawn) {
    prawn.changeDirectionRight();
  });
};

World.prototype.leftArrow = function () {
  this.prawns.forEach(function (prawn) {
    prawn.changeDirectionLeft();
  });
};




module.exports = World;
