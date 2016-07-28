const Prawn = require('../lib/prawn')

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

World.prototype.upArrow = function () {
  // let prevPrawn = this.prawns[0]
  this.prawns.forEach(function (prawn) {
    // var prawnY = prawn.y - 1;
    prawn.changeDirectionUp();
    // prawn.poop(prevPrawn);
    // this.addPrawn({y: prawnY});
  });
};

World.prototype.checkEdges = function () {
  this.prawns.forEach(function (prawn) {
    if (prawn.x === 0 || prawn.y === 0) alert('game over man');
    if (prawn.x === prawn.world.width - prawn.width) alert('game over man');
    if (prawn.y === prawn.world.height - prawn.height) alert('game over man');
  });
};

World.prototype.downArrow = function () {
  // let prevPrawn = this.prawns[0]
  this.prawns.forEach(function (prawn) {
    // var prawnY = prawn.y + 1;
    prawn.changeDirectionDown();
    // prawn.poop(prevPrawn);
    // this.addPrawn({y: prawnY});
  });
};

World.prototype.rightArrow = function () {
  // let prevPrawn = this.prawns[0]
  this.prawns.forEach(function (prawn) {
    // var prawnX = prawn.x + 1
    prawn.changeDirectionRight();
    // prawn.poop(prevPrawn);
  });
};

World.prototype.leftArrow = function () {
  // let prevPrawn = this.prawns[0]
  this.prawns.forEach(function (prawn) {
    // var prawnX = prawn.x - 1;
    prawn.changeDirectionLeft();
    // prawn.poop(prevPrawn);
  });
};




module.exports = World;
