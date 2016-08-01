const canvas = document.getElementById('trawn');
const context = canvas.getContext('2d');


const Prawn = require('./prawn');
const World = require('./world');

var button = document.querySelector('button');

var world = new World(canvas.width, canvas.height, context);

function startupInstructions() {
  context.fillStyle = '#4E78A0';
  context.fillRect(0, 0, world.width, world.height);
  context.fillStyle = '#15155e';
  context.textAlign = 'center';
  context.font = 'bold 2em "Orbitron"';
  context.fillText('WELCOME TO TRAWN', 250, 150);
  // context.fillStyle = '#15155e';
  // context.textAlign = 'center';
  // context.font = 'bold 2em "Orbitron"';
  // context.fillText('WELCOME T', 250, 200);
  // context.fillText('Player A', 50, 300);
}

startupInstructions();



function initiateGame() {
  context.fillStyle = '#4E78A0';
  context.fillRect(0,0, world.width, world.height);
  world.addPrawn(new Prawn({x: 100, y: 250, color:'#B0171F', ID:'B'}));
  world.addPrawn(new Prawn({x: 400, y: 250, dir: 'left', color: '#F5D3E2', ID:'A'}));
};

function startGame() {
  context.fillStyle = '#4E78A0';
  context.fillRect(0, 0, world.width, world.height);
  context.fillStyle = '#15155e'
  context.fillRect(0, 50, world.width, 200)
  context.fillStyle = '#ef5351';
  context.textAlign = 'center';
  context.font = 'bold 2em "Orbitron"';
  context.fillText('GET READY TO TRAWN IN', 250, 150)
  context.fillText('3', 250, 200)
  window.setTimeout(function() {
    context.fillStyle = '#4E78A0';
    context.fillRect(0,0, world.width, world.height);
    context.fillStyle = '#15155e'
    context.fillRect(0, 50, world.width, 200)
    context.fillStyle = '#ef5351';
    context.fillText('GET READY TO TRAWN IN', 250, 150)
    context.fillText('2', 250, 200)}, 1000);
  window.setTimeout(function() {
    context.fillStyle = '#4E78A0';
    context.fillRect(0,0, world.width, world.height);
    context.fillStyle = '#15155e'
    context.fillRect(0, 50, world.width, 200)
    context.fillStyle = '#ef5351';
    context.fillText('GET READY TO TRAWN IN', 250, 150)
    context.fillText('1', 250, 200)}, 2000);
  window.setTimeout(initiateGame, 3000)};


// function boostPrawn() {
//   world.prawns(prawn).speed = 3.5;
//     window.setTimeout(function() {}, 500);
//   world.prawns(prawn).speed = 3;
// }

renderWorld(context, world);
// context.fillStyle = '#4E78A0';
// context.fillRect(0,0, world.width, world.height)
// context.fillRect(0, 0, world.width, world.height);


function renderWorld(context, world) {
  world.prawns.forEach(function (prawn) {
    context.fillStyle = prawn.color;
    context.fillRect(prawn.x, prawn.y, prawn.width, prawn.height);
    prawn.move();
  });
};

function tick() {
  world.checkEdges();
  world.checkPoop();
};

requestAnimationFrame(function gameLoop() {
  renderWorld(context, world);
  tick();
  requestAnimationFrame(gameLoop);
});

// initiateGame();

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 38) {
    event.preventDefault();
    world.upArrow(1)};
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 40) {
    event.preventDefault();
    world.downArrow(1)};
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 39) {
    event.preventDefault();
    world.rightArrow(1)};
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 37) {
    event.preventDefault();
      world.leftArrow(1)};
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 87) world.upArrow(0);
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 83) world.downArrow(0);
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 68) world.rightArrow(0);
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 65) world.leftArrow(0);
});





document.addEventListener('keydown', function(event) {
  if(event.keyCode === 49) world.boostPrawnA(0);
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 191) world.boostPrawnB(1);
});





button.addEventListener('click', function(event) {
  if (world.prawns.length === 0) startGame();
  button.setAttr
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 81) {
    event.preventDefault();
    world.brakePrawnA()};
});



document.addEventListener('keydown', function(event) {
  if(event.keyCode === 18) {
    event.preventDefault();
    world.brakePrawnB()};
});
