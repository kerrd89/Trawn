const Prawn = require('../lib/prawn');

// const canvas = document.getElementById('trawn');
// const context = canvas.getContext('2d');

function World(width, height, context) {
  this.width = width;
  this.height = height;
  this.prawns = [];
  this.allPrawnLocations = [];
  this.context = context;
  this.score = [0, 0]
}

World.prototype.addPrawn = function (prawn) {
  prawn.world = this;
  this.prawns.push(prawn);
};


World.prototype.checkEdges = function () {
  var _self = this;
  this.prawns.forEach(function (prawn) {
    if (prawn.x <= 0 || prawn.y <= 0) _self.resetGame(prawn);
    if (prawn.x >= prawn.world.width - prawn.width) _self.resetGame(prawn);
    if (prawn.y >= prawn.world.height - prawn.height) _self.resetGame(prawn);
  });
};



World.prototype.checkPoop = function() {
  var _self = this;
  this.prawns.forEach(function (prawn) {

    var topLeftCorner = JSON.stringify({x:prawn.x, y: prawn.y});
    var leftEdge2 = JSON.stringify({x: prawn.x, y:prawn.y + 1})
    var leftEdge3 = JSON.stringify({x: prawn.x, y:prawn.y + 2})
    var leftEdge4 = JSON.stringify({x: prawn.x, y:prawn.y + 3})
    var bottomLeftCorner = JSON.stringify({x:prawn.x, y:prawn.y + 4});
    var bottomEdge2 = JSON.stringify({x: prawn.x + 1, y: prawn.y + 4});
    var bottomEdge3 = JSON.stringify({x: prawn.x + 2, y: prawn.y + 4});
    var bottomEdge4 = JSON.stringify({x: prawn.x + 3, y: prawn.y + 4});
    var bottomRightCorner = JSON.stringify({x:prawn.x + 4, y: prawn.y + 4});
    var rightEdge2 = JSON.stringify({x: prawn.x + 4, y: prawn.y + 1});
    var rightEdge3 = JSON.stringify({x: prawn.x + 4, y: prawn.y + 2});
    var rightEdge4 = JSON.stringify({x: prawn.x + 4, y: prawn.y + 3});
    var topRightCorner = JSON.stringify({x:prawn.x + 4, y:prawn.y});
    var topEdge2 = JSON.stringify({x: prawn.x + 1, y: prawn.y});
    var topEdge3 = JSON.stringify({x: prawn.x + 2, y: prawn.y});
    var topEdge4 = JSON.stringify({x: prawn.x + 3, y: prawn.y});
    if (prawn.dir === 'left') {
      if (JSON.stringify(_self.allPrawnLocations).includes(topLeftCorner)) _self.resetGame(prawn);
      if (JSON.stringify(_self.allPrawnLocations).includes(leftEdge2)) _self.resetGame(prawn);
      if (JSON.stringify(_self.allPrawnLocations).includes(leftEdge3)) _self.resetGame(prawn);
      if (JSON.stringify(_self.allPrawnLocations).includes(leftEdge4)) _self.resetGame(prawn);
      if (JSON.stringify(_self.allPrawnLocations).includes(bottomLeftCorner)) _self.resetGame(prawn);
    }
    if (prawn.dir === 'right') {
      if (JSON.stringify(_self.allPrawnLocations).includes(bottomRightCorner)) _self.resetGame(prawn);
      if (JSON.stringify(_self.allPrawnLocations).includes(rightEdge2)) _self.resetGame(prawn);
      if (JSON.stringify(_self.allPrawnLocations).includes(rightEdge3)) _self.resetGame(prawn);
      if (JSON.stringify(_self.allPrawnLocations).includes(rightEdge4)) _self.resetGame(prawn);
      if (JSON.stringify(_self.allPrawnLocations).includes(topRightCorner)) _self.resetGame(prawn);
    }
    if (prawn.dir === 'up') {
      if (JSON.stringify(_self.allPrawnLocations).includes(topLeftCorner)) _self.resetGame(prawn);
      if (JSON.stringify(_self.allPrawnLocations).includes(topEdge2)) _self.resetGame(prawn);
      if (JSON.stringify(_self.allPrawnLocations).includes(topEdge3)) _self.resetGame(prawn);
      if (JSON.stringify(_self.allPrawnLocations).includes(topEdge4)) _self.resetGame(prawn);
      if (JSON.stringify(_self.allPrawnLocations).includes(topRightCorner)) _self.resetGame(prawn);
    }
    if (prawn.dir === 'down') {
      if (JSON.stringify(_self.allPrawnLocations).includes(bottomRightCorner)) _self.resetGame(prawn);
      if (JSON.stringify(_self.allPrawnLocations).includes(bottomEdge2))
      _self.resetGame(prawn);
      if (JSON.stringify(_self.allPrawnLocations).includes(bottomEdge3)) _self.resetGame(prawn);
      if (JSON.stringify(_self.allPrawnLocations).includes(bottomEdge4)) _self.resetGame(prawn);
      if (JSON.stringify(_self.allPrawnLocations).includes(bottomLeftCorner)) _self.resetGame(prawn);
    }
  });
};

World.prototype.updateScore = function(prawn)  {
  var player2score = document.querySelector('.player2-score');
  var player1score = document.querySelector('.player1-score');
  if (prawn === this.prawns[0]) {
    this.score[1] = this.score[1] + 1;
    player2score.innerText = 'PRAWN B \n' + this.score[1];
  }
  if (prawn === this.prawns[1]) {
    this.score[0] = this.score[0] + 1;
    player1score.innerText = 'PRAWN A \n' + this.score[0];
  }
};


World.prototype.upArrow = function (playerNumber) {
  this.prawns[playerNumber].changeDirectionUp();
};

World.prototype.downArrow = function (playerNumber) {
  this.prawns[playerNumber].changeDirectionDown();
};

World.prototype.rightArrow = function (playerNumber) {
  this.prawns[playerNumber].changeDirectionRight();
};

World.prototype.leftArrow = function (playerNumber) {
  this.prawns[playerNumber].changeDirectionLeft();
};

World.prototype.resetGame = function (prawn) {
  this.updateScore(prawn)
  this.context.fillStyle = '#4E78A0';
  this.context.clearRect(0, 0, this.width, this.height);
  this.prawns = [];
  this.allPrawnLocations = [];
  this.context.fillStyle = '#4E78A0';
  this.context.fillRect(0, 0, this.width, this.height);
}



World.prototype.brakePrawnA = function () {
  _self = this;
  // var brakes = this.prawns[0].brakes[0];
  // if (this.prawns[0].brakes[0] === 0) {
  //   return console.log('oops');
  // } else {
    this.prawns[0].speed = 1;
    this.prawns[0].color = '#ffffff';
    var brakes = brakes - 1;
    this.prawns[0].brakes = brakes;
    window.setTimeout(function()
      {
        _self.prawns[0].color = '#B0171F';
        _self.prawns[0].speed = 3 ;
      }, 500);
  // }
};

World.prototype.brakePrawnB = function () {
  _self = this;
  // var brakes = this.prawns[1].brakes[0];
  // if (this.prawns[1].brakes[0] === 0) {
  //   return console.log('oops');
  // } else {
    this.prawns[1].speed = 1;
    this.prawns[1].color = '#B0171F';
    var brakes = brakes - 1;
    this.prawns[1].brakes = brakes;
      window.setTimeout(function()
      {
        _self.prawns[1].color = '#F5D3E2';
        _self.prawns[1].speed = 3 ;
      }, 500);
  // }
};



module.exports = World;
