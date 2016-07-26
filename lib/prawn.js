function Prawn(options) {
  this.x = options.x || 5;
  this.y = options.y || 5;
  this.dir = options.dir || 'left';
}

Prawn.prototype.move = function() {
  var currentDirection = this.dir;
  if (currentDirection === 'left') {this.moveLeft()};
  if (currentDirection === 'right') {this.moveRight()};
  if (currentDirection === 'up') {this.moveUp()};
  if (currentDirection === 'down') {this.moveDown()};
};

Prawn.prototype.moveRight = function() {
  this.x = this.x + 1;
  this.dir = 'right';
};

Prawn.prototype.moveLeft = function() {
  this.x = this.x - 1;
  this.dir = 'left';
};

Prawn.prototype.moveUp = function() {
  this.y = this.y - 1;
  this.dir = 'up';
};

Prawn.prototype.moveDown = function() {
  this.y = this.y + 1;
  this.dir = 'down';
};

module.exports = Prawn;
