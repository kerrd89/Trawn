

function Prawn(options) {
  this.x = options.x || 5;
  this.y = options.y || 5;
  this.dir = options.dir || 'left';
}

module.exports = Prawn;

Prawn.prototype.move = function() {
  currentDirection = this.dir;
  if (currentDirection = 'left') moveLeft();
  if (currentDirection = 'right') moveRight();
  if (currentDirection = 'up') moveUp();
  if (currentDirection = 'down') moveDown();
}

Prawn.prototype.moveRight = function() {
  this.x = this.x + 1;
}

Prawn.prototype.moveLeft = function() {
  this.x = this.x - 1;
}

Prawn.prototype.moveUp = function() {
  this.y = this.y - 1;
}

Prawn.prototype.moveDown = function() {
  this.y = this.y + 1;
}
// 
// Prawn.prototype.checkDirection = function() {
//   current location = (this.x, this.y)
//   last location =
//   if current x - last x = 1, right
//   if current x - last x = -1, left
//   if current y - last y = -1, up
//   if current y - last y = 1, down
// }
