const Prawn = require('../lib/prawn')

// const canvas = document.getElementById('trawn');
// const context = canvas.getContext('2d');

function World(width, height) {
  this.width = width;
  this.height = height;
  this.prawns = [];
};

World.prototype.addPrawn = function (prawn) {
  prawn.world = this;
  this.prawns.push(prawn);
};

World.prototype.upArrow = function () {
  this.prawns.forEach(function (prawn) {
    // var prawnY = prawn.y - 1;
    prawn.changeDirectionUp();
    // this.addPrawn({y: prawnY});
  });
};

World.prototype.downArrow = function () {
  this.prawns.forEach(function (prawn) {
    var prawnY = prawn.y + 1;
    prawn.changeDirectionDown();
    // this.addPrawn({y: prawnY});
  });
};

World.prototype.rightArrow = function () {
  this.prawns.forEach(function (prawn) {
    var prawnX = prawn.x + 1
    prawn.changeDirectionRight();
  });
};

World.prototype.leftArrow = function () {
  this.prawns.forEach(function (prawn) {
    var prawnX = prawn.x - 1;
    prawn.changeDirectionLeft();
  });
};




module.exports = World;
