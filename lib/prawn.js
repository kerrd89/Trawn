function Prawn(prawnProperties) {
  this.x = prawnProperties.x || 5;
  this.y = prawnProperties.y || 5;
  this.width = prawnProperties.width || 5;
  this.height = prawnProperties.height || 5;
  this.dir = prawnProperties.dir || 'right';
  this.world = prawnProperties.world || {worldWidth: 100, worldHeight: 100};
  this.pastLocations = prawnProperties.pastLocations || [];
  this.speed = prawnProperties.speed || 1;
  this.color =  prawnProperties.color;
  this.ID = prawnProperties.ID; 
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
  // this.pastLocations.push(topLeftCorner);
  // this.pastLocations.push(topRightCorner);
  // this.pastLocations.push(bottomRightCorner);
  // this.pastLocations.push(bottomLeftCorner);
  this.world.allPrawnLocations.push(topLeftCorner);
  this.world.allPrawnLocations.push(topRightCorner);
  this.world.allPrawnLocations.push(bottomRightCorner);
  this.world.allPrawnLocations.push(bottomLeftCorner);
};



Prawn.prototype.moveRight = function() {
  this.dir = 'right';
  this.poop();
  this.x = this.x + this.speed;
};

Prawn.prototype.moveLeft = function() {
  this.dir = 'left';
  this.poop();
  this.x = this.x - this.speed;
};

Prawn.prototype.moveUp = function() {
  this.dir = 'up';
  this.poop();
  this.y = this.y - this.speed;
};

Prawn.prototype.moveDown = function() {
  this.dir = 'down';
  this.poop();
  this.y = this.y + this.speed;
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
//
// Prawn.prototype.findBottom = function() {
//   // bottomEdges.push({x: this.x + this.width, y: this.y + this.height});
//   // bottomEdges.push({x: this.x, y: this.y + this.height});
//   // bottomEdges.push({x: this.x + 1, y: this.y + this.height});
//   // bottomEdges.push({x: this.x + 2, y: this.y + this.height});
//   // bottomEdges.push({x: this.x + 3, y: this.y + this.height});
//   var bottomEdges = [];
//   return bottomRightCorner;
// }

Prawn.prototype.findBottomLeftCorner = function() {
  var bottomLeftCorner = {x: this.x, y: this.y + this.height};
  return bottomLeftCorner
};

Prawn.prototype.findTopRightCorner = function() {
  var topRightCorner = {x: this.x + this.width, y: this.y};
  return topRightCorner;
};

Prawn.prototype.findBottomEdge = function() {
  var bottomEdge = [
    {x: this.x, y: this.y + this.height},
    {x: this.x + 1, y: this.y + this.height},
    {x: this.x + 2, y: this.y + this.height},
    {x: this.x + 3, y: this.y + this.height},
    {x: this.x + this.width, y: this.y + this.height}]
    return bottomEdge};

Prawn.prototype.findTopEdge = function() {
  var topEdge = [
    {x: this.x, y: this.y},
    {x: this.x + 1, y: this.y},
    {x: this.x + 2, y: this.y },
    {x: this.x + 3, y: this.y},
    {x: this.x + this.width, y: this.y}];
    return topEdge};

Prawn.prototype.findLeftEdge = function() {
  var leftEdge = [
    {x: this.x, y: this.y},
    {x: this.x, y: this.y + 1},
    {x: this.x, y: this.y + 2},
    {x: this.x, y: this.y + 3},
    {x: this.x, y: this.y + this.height}]
    return leftEdge;
};

Prawn.prototype.findRightEdge = function() {
  var rightEdge = [
    {x: this.x + this.width, y: this.y},
    {x: this.x + this.width, y: this.y + 1},
    {x: this.x + this.width, y: this.y + 2},
    {x: this.x + this.width, y: this.y + 3},
    {x: this.x + this.width, y: this.y + this.height}];
    return rightEdge;
};






module.exports = Prawn;
