const canvas = document.getElementById('trawn');
const context = canvas.getContext('2d');


const Prawn = require('./prawn');
const World = require('./world');

// function resetGame() {
//   context.fillStyle = '#4E78A0';
//   context.fillRect(0, 0, world.width, world.height);
//   world.prawns = [];
//   prawn.pastlocations = [];
// }

var world = new World(canvas.width, canvas.height);
renderWorld(context, world);

context.fillStyle = '#4E78A0';
context.fillRect(0, 0, world.width, world.height);

world.addPrawn(new Prawn({x: 100, y: 250}));

// world.addPrawn(new Prawn({x: 400, y: 250, dir: 'left'}));

function renderWorld(context, world) {
  world.prawns.forEach(function (prawn) {
    context.fillStyle = '#F5D3E2';
    context.fillRect(prawn.x, prawn.y, prawn.width, prawn.height);
    prawn.move();
  });
}

function tick() {
  world.checkEdges();
  world.checkPoop();
}

requestAnimationFrame(function gameLoop() {
  renderWorld(context, world);
  world.checkEdges();
  world.checkPoop();
  requestAnimationFrame(gameLoop);
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 38) world.upArrow();
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 40) world.downArrow();
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 39) world.rightArrow();
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 37) world.leftArrow();
});
