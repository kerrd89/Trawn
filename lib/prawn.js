function Prawn(prawnProperties) {
  this.x = prawnProperties.x || 5;
  this.y = prawnProperties.y || 5;
  this.width = prawnProperties.width || 10;
  this.height = prawnProperties.height || 10;
  this.dir = prawnProperties.dir || 'right';
  this.world = prawnProperties.world || {worldWidth: 100, worldHeight: 100};
  this.pastLocations = prawnProperties.pastLocations || [];
};

Prawn.prototype.move = function() {
  var currentDirection = this.dir;
  if (currentDirection === 'left') this.moveLeft();
  if (currentDirection === 'right') this.moveRight();
  if (currentDirection === 'up') this.moveUp();
  if (currentDirection === 'down') this.moveDown();
};

Prawn.prototype.poop = function() {
  var currentLocation = {x: this.x, y: this.y};
  this.pastLocations.push(currentLocation);
};


Prawn.prototype.moveRight = function() {
  this.poop();
  this.x = this.x + 1;
  this.dir = 'right';
};

Prawn.prototype.moveLeft = function() {
  this.poop();
  this.x = this.x - 1;
  this.dir = 'left';
};

Prawn.prototype.moveUp = function() {
  this.poop();
  this.y = this.y - 1;
  this.dir = 'up';
};

Prawn.prototype.moveDown = function() {
  this.poop();
  this.y = this.y + 1;
  this.dir = 'down';
};

Prawn.prototype.changeDirectionRight = function() {
  if (this.dir === 'up' || this.dir === 'down') this.moveRight();
};

Prawn.prototype.changeDirectionLeft = function() {
  if (this.dir === 'up' || this.dir === 'down') this.moveLeft();
};

Prawn.prototype.changeDirectionUp = function() {
  if (this.dir === 'left' || this.dir === 'right') this.moveUp();
  };

Prawn.prototype.changeDirectionDown = function() {
  if (this.dir === 'left' || this.dir === 'right') this.moveDown();
};

// Prawn.prototype.poop = function(prevPrawn) {
//   new Prawn({x: prevPrawn.x, y: prevPrawn.y});
// }

// Prawn.prototype.tick = function() {
//   this.move();
// };

// Prawn.prototype.recordLocation = function(){
//   var pastLocations = [];
//   var prawnHeadLocation = {x: this.x, y: this.y};
//   pastLocations.push(prawnHeadLocation)};






module.exports = Prawn;
