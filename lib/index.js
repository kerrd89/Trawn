const canvas = document.getElementById('trawn');
const context = canvas.getContext('2d');


const Prawn = require('./prawn');
const World = require('./world');

var world = new World(canvas.width, canvas.height)

world.addPrawn(new Prawn({}));

function renderWorld(context, world) {
  // debugger;
  context.fillStyle = '#4E78A0';
  context.fillRect(0, 0, world.width, world.height);

  world.prawns.forEach(function (prawn) {
    context.fillStyle = '#F5D3E2';
    context.fillRect(prawn.x, prawn.y, prawn.width, prawn.height);
  });
};

renderWorld(context, world);
// 
// tick() {
//   prawn.move();
// }






document.addEventListener('keydown', function(event) {
  if(event.keycode === 38) {world.upArrow()};
});
