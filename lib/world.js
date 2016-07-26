const Prawn = require('../lib/prawn')

function World(options) {
  this.x = options.x || 500;
  this.y = options.y || 500;
  // var canvas = document.getElementById('trawn');
  // var screen = canvas.getContext('2d');
};




// World.prototype.startGame =  function () {
//   var prawn = new Prawn({})
// };



module.exports = World;
