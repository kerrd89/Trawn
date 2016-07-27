const canvas = document.getElementById('trawn');
const context = canvas.getContext('2d');

const Prawn = require('./prawn');
const World = require('./world');

var world = new World(canvas.width, canvas.height)


var prawn = new Prawn({});
