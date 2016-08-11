function Rectangle(rectangleProperties) {
  this.x = rectangleProperties.x || 5;
  this.y = rectangleProperties.y || 5;
  this.width = rectangleProperties.width || 5;
  this.height = rectangleProperties.height || 5;

  this.topLeftCorner = {x: this.x, y: this.y};

  this.topRightCorner = {x: this.x + this.width, y: this.y};

  this.bottomLeftCorner = {x: this.x, y: this.y + this.height};

  this.bottomRightCorner = {x: this.x + this.width, y: this.y + this.height};
};


// Rectangle.prototype.checkToSeeIfPointIsInRectangle = function() {
//   this.findCorners();
//   for (var i = 0; i < this.width; i++);
// };

Rectangle.prototype.checkRectangle = function(randomPoint) {
    var poopX = randomPoint.x;
    var poopY = randomPoint.y;
    if (poopX >= this.topLeftCorner.x && poopX <= this.topRightCorner.x && poopY >= this.topLeftCorner.y && poopY <= this.bottomRightCorner.y)
    {
      console.log('you lose');
    };
  };


// if (x >= topLeftCorner.x && x <= topRightCorner.x && y <= topLeftCorner.y && y >= topRightCorner.y){resetGame}






module.exports = Rectangle;
