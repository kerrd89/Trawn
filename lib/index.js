const canvas = document.getElementById('trawn');
const context = canvas.getContext('2d');

const Prawn = require('./prawn');
const World = require('./world');

var prawn = new Prawn({});

requestAnimationFrame(function gameLoop() {
  context.fillRect(5,5,500,500);
  context.fillStyle = '#8ED6FF';
  requestAnimationFrame(gameLoop);
});
