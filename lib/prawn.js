function Prawn(prawnProperties) {
  this.x = prawnProperties.x || 5;
  this.y = prawnProperties.y || 5;
  this.width = prawnProperties.width || 5;
  this.height = prawnProperties.height || 5;
  this.dir = prawnProperties.dir || 'right';
  this.world = prawnProperties.world || {worldWidth: 100, worldHeight: 100};
  this.pastLocations = prawnProperties.pastLocations || [];
  this.speed = prawnProperties.speed || .5;
  this.boosts = prawnProperties.boosts || 5;
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
  this.world.allPrawnLocations.push(topLeftCorner);
  this.world.allPrawnLocations.push(topRightCorner);
  this.world.allPrawnLocations.push(bottomRightCorner);
  this.world.allPrawnLocations.push(bottomLeftCorner);
};
//
// Prawn.prototype.boostPrawn = function(playerNumber) {
//   this.speed = 2;
//   window.setTimeout(function() {}, 500);
//   this.speed = 1;
// };


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
  if (this.dir === 'up') {
    this.moveDown();
    this.moveRight();
  }
  if (this.dir === 'down') {
    this.moveUp();
    this.moveRight();
  }

};

Prawn.prototype.changeDirectionLeft = function() {
  if (this.dir === 'up') {
    this.moveDown();
    this.moveLeft()
  };
  if (this.dir === 'down') {
    this.moveUp();
    this.moveLeft();
  };
};

Prawn.prototype.changeDirectionUp = function() {
  if (this.dir === 'left') {
    this.moveRight();
    this.moveUp();
  }

  if (this.dir === 'right') {
    this.moveLeft();
    this.moveUp();
  }
  };

Prawn.prototype.changeDirectionDown = function() {
  if (this.dir === 'left') {
    this.moveRight();
    this.moveDown();
  }
   if (this.dir === 'right') {
     this.moveLeft();
     this.moveDown();
   }
};

Prawn.prototype.findBottomRightCorner = function() {
  var bottomRightCorner = {x: this.x + 4, y: this.y + 4};
  return bottomRightCorner;
}


Prawn.prototype.findBottomLeftCorner = function() {
  var bottomLeftCorner = {x: this.x, y: this.y + 4};
  return bottomLeftCorner
};

Prawn.prototype.findTopRightCorner = function() {
  var topRightCorner = {x: this.x + 4, y: this.y};
  return topRightCorner;
};






module.exports = Prawn;
