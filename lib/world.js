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


module.exports = World;
