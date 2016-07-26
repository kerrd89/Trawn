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


module.exports = Prawn;
