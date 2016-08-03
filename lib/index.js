const canvas = document.getElementById('trawn');
const context = canvas.getContext('2d');


const Prawn = require('./prawn');
const World = require('./world');

var button = document.querySelector('button');
var world = new World(canvas.width, canvas.height, context);

function setWorld() {
context.fillStyle = '#4E78A0';
context.fillRect(0, 0, world.width, world.height);
};

setWorld();

window.setTimeout(displayWelcome, 1000);

window.setTimeout(displayControls, 2000);

function displayWelcome() {
  context.fillStyle = '#15155e';
  context.font = 'bold 2.25em "Orbitron"';
  context.textAlign = 'center';
  context.fillText('WELCOME TO TRAWN', 250, 50)
};

function displayControls() {
  context.font = 'bold 1.5em "Orbitron"';
  context.fillText('PLAYER A', 125, 150);
  context.fillText('PLAYER B', 350, 150);

  context.font = 'bold 1em "Orbitron"';
  context.fillText('W', 125, 250)
  context.fillText('|', 125, 275)
  context.fillText('UP', 125, 300)
  context.fillText('A  -  LEFT  RIGHT  -  D', 125, 325)
  context.fillText('DOWN', 125, 350);
  context.fillText('|', 125, 375);
  context.fillText('S', 125, 400);
  context.fillText('BRAKE: Q', 125, 450);

  context.fillText('▲', 350, 250)
  context.fillText('|', 350, 275);
  context.fillText('UP', 350, 300)
  context.fillText('◄  -  LEFT  RIGHT  -  ►', 350, 325)
  context.fillText('DOWN', 350, 350);
  context.fillText('|', 350, 375);
  context.fillText('▼', 350, 400);
  context.fillText('BRAKE: OPTION', 350, 450);
};


function initiateGame() {
  context.fillStyle = '#4E78A0';
  context.fillRect(0,0, world.width, world.height);
  var difficulty = document.querySelector('.difficulty-adjuster');
  world.difficulty = parseInt(difficulty.value);
  var prawnSpeed = world.difficulty;
  world.addPrawn(new Prawn({x: 100, y: 250, color:'#B0171F', ID:'B', speed:prawnSpeed}));
  world.addPrawn(new Prawn({x: 400, y: 250, dir: 'left', color: '#F5D3E2', ID:'A'}));
};


function startGame() {
  if (world.prawns.length === 0 && context.fillStyle !== '#FFFFF'){
  setWorld();
  context.fillStyle = '#15155e'
  context.fillRect(0, 50, world.width, 200)
  context.fillStyle = '#ef5351';
  context.textAlign = 'center';
  context.font = 'bold 2em "Orbitron"';
  context.fillText('GET READY TO TRAWN IN', 250, 150);
  context.fillText('3', 250, 200);
  window.setTimeout(function() {
    context.fillStyle = '#4E78A0';
    context.fillRect(0,0, world.width, world.height);
    context.fillStyle = '#15155e'
    context.fillRect(0, 50, world.width, 200);
    context.fillStyle = '#ef5351';
    context.fillText('GET READY TO TRAWN IN', 250, 150);
    context.fillText('2', 250, 200)}, 1000);
  window.setTimeout(function() {
    context.fillStyle = '#4E78A0';
    context.fillRect(0,0, world.width, world.height);
    context.fillStyle = '#15155e';
    context.fillRect(0, 50, world.width, 200);
    context.fillStyle = '#ef5351';
    context.fillText('GET READY TO TRAWN IN', 250, 150)
    context.fillText('1', 250, 200)}, 2000);
  window.setTimeout(initiateGame, 3000)};
};

renderPrawns(context, world);


function renderPrawns(context, world) {
  startScreen = canvas.toDataURL();
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

function checkForPrawns() {
  if (world.prawns.length === 0){
    displayControls();
  };
};

requestAnimationFrame(function gameLoop() {
  renderPrawns(context, world);
  tick();
  requestAnimationFrame(gameLoop);
});

document.addEventListener('keydown', function(event){
  event.preventDefault();
  if(event.keyCode === 38) {world.upArrow(1)};
  if(event.keyCode === 40) {world.downArrow(1)};
  if(event.keyCode === 39){world.rightArrow(1)};
  if(event.keyCode === 37) {world.leftArrow(1)};
  if(event.keyCode === 87) world.upArrow(0);
  if(event.keyCode === 83) world.downArrow(0);
  if(event.keyCode === 68) world.rightArrow(0);
  if(event.keyCode === 65) world.leftArrow(0);
  if(event.keyCode === 81) {world.brakePrawnA()};
  if(event.keyCode === 18) {world.brakePrawnB()};
  if(event.keyCode === 32) startGame();
  if(event.keyCode === 13) startGame();
});


button.addEventListener('click', startGame);
