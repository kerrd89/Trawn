function Prawn(prawnProperties) {
  this.x = prawnProperties.x || 5;
  this.y = prawnProperties.y || 5;
  this.width = prawnProperties.width || 10;
  this.height = prawnProperties.height || 10;
  this.dir = prawnProperties.dir || 'right';
  this.world = prawnProperties.world || {worldWidth: 100, worldHeight: 100};
  this.pastLocations = prawnProperties.pastLocations || [];
  this.color =  prawnProperties.color;
};

Prawn.prototype.move = function() {
  var currentDirection = this.dir;
  if (currentDirection === 'left') this.moveLeft();
  if (currentDirection === 'right') this.moveRight();
  if (currentDirection === 'up') this.moveUp();
  if (currentDirection === 'down') this.moveDown();
};

Prawn.prototype.poop = function() {
  var topLeftCorner = {x: this.x, y: this.y};
  var topRightCorner = this.findTopRightCorner();
  var bottomRightCorner = this.findBottomRightCorner();
  var bottomLeftCorner = this.findBottomLeftCorner();
  this.pastLocations.push(topLeftCorner);
  this.pastLocations.push(topRightCorner);
  this.pastLocations.push(bottomRightCorner);
  this.pastLocations.push(bottomLeftCorner);
  this.world.allPrawnLocations.push(topLeftCorner);
  this.world.allPrawnLocations.push(topRightCorner);
  this.world.allPrawnLocations.push(bottomRightCorner);
  this.world.allPrawnLocations.push(bottomLeftCorner);
};


Prawn.prototype.moveRight = function() {
  this.dir = 'right';
  this.poop();
  this.x = this.x + 1;
};

Prawn.prototype.moveLeft = function() {
  this.dir = 'left';
  this.poop();
  this.x = this.x - 1;
};

Prawn.prototype.moveUp = function() {
  this.dir = 'up';
  this.poop();
  this.y = this.y - 1;
};

Prawn.prototype.moveDown = function() {
  this.dir = 'down';
  this.poop();
  this.y = this.y + 1;
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

Prawn.prototype.findBottomRightCorner = function() {
  var bottomRightCorner = {x: this.x + this.width, y: this.y + this.height};
  return bottomRightCorner;
}

Prawn.prototype.findBottomLeftCorner = function() {
  var bottomLeftCorner = {x: this.x, y: this.y + this.height};
  return bottomLeftCorner
};

Prawn.prototype.findTopRightCorner = function() {
  var topRightCorner = {x: this.x + this.width, y: this.y};
  return topRightCorner;
};





module.exports = Prawn;
