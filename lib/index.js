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

world.addPrawn(new Prawn({x: 100, y: 250, color:'#B0171F'}));

world.addPrawn(new Prawn({x: 400, y: 250, dir: 'left', color: '#F5D3E2'}));

function renderWorld(context, world) {
  world.prawns.forEach(function (prawn) {
    context.fillStyle = prawn.color;
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
  if(event.keyCode === 38) world.upArrow(0);
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 40) world.downArrow(0);
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 39) world.rightArrow(0);
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 37) world.leftArrow(0);
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 87) world.upArrow(1);
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 83) world.downArrow(1);
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 68) world.rightArrow(1);
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 65) world.leftArrow(1);
});
