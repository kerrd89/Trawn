const canvas = document.getElementById('trawn');
const context = canvas.getContext('2d');


const Prawn = require('./prawn');
const World = require('./world');

var world = new World(canvas.width, canvas.height);
renderWorld(context, world);

function renderWorld(context, world) {
  context.fillStyle = '#4E78A0';
  context.fillRect(0, 0, world.width, world.height);

  if (world.prawns.length === 0) {
    world.addPrawn(new Prawn({}));
  }

  world.prawns.forEach(function (prawn) {
    context.fillStyle = '#F5D3E2';
    context.fillRect(prawn.x, prawn.y, prawn.width, prawn.height);
    prawn.move();
  });
}


requestAnimationFrame(function gameLoop() {
  var xValue = world.unshift[0].x;
  var yValue = world.prawns[0].y;
  world.addPrawn(new Prawn({x: xValue,y: yValue}));
  renderWorld(context, world);
  requestAnimationFrame(gameLoop);
});







document.addEventListener('keydown', function(event) {
  if(event.keyCode === 38) {world.upArrow()};
  renderWorld(context, world);
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 40) {world.downArrow()};
  renderWorld(context, world);
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 39) {world.rightArrow()};
  renderWorld(context, world);
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 37) {world.leftArrow()};
  renderWorld(context, world);
});


// function tick(prawn) {
//   prawn.tick();
// }
//
// requestAnimationFrame(function gameLoop() {
//   renderWorld(context, world);
//   tick(world);
//   requestAnimationFrame(gameLoop);
// });
