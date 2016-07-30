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
    // prawnWidth = prawn.width - 1;
    // prawnHeight =prawn.height - 1;

    var topLeftCorner = JSON.stringify({x:prawn.x, y: prawn.y});
    var leftEdge2 = JSON.stringify({x: prawn.x, y:prawn.y + 1})
    var leftEdge3 = JSON.stringify({x: prawn.x, y:prawn.y + 2})
    var leftEdge4 = JSON.stringify({x: prawn.x, y:prawn.y + 3})
    var bottomLeftCorner = JSON.stringify({x:prawn.x, y:prawn.y + prawn.height});
    var bottomEdge2 = JSON.stringify({x: prawn.x + 1, y: prawn.y + prawn.height});
    var bottomEdge3 = JSON.stringify({x: prawn.x + 2, y: prawn.y + prawn.height});
    var bottomEdge4 = JSON.stringify({x: prawn.x + 3, y: prawn.y + prawn.height});
    var bottomRightCorner = JSON.stringify({x:prawn.x + prawn.width, y:prawn.y + prawn.height});
    var rightEdge2 = JSON.stringify({x: prawn.x + prawn.width, y: prawn.y + 1});
    var rightEdge3 = JSON.stringify({x: prawn.x + prawn.width, y: prawn.y + 2});
    var rightEdge4 = JSON.stringify({x: prawn.x + prawn.width, y: prawn.y + 3});
    var topRightCorner = JSON.stringify({x:prawn.x + prawn.width, y:prawn.y});
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



module.exports = World;


// World.prototype.checkPoopTwo = function() {
//   debugger;
//   var _self = this;
//   this.prawns.forEach(function (prawn) {
//     var leftEdge = prawn.findLeftEdge()
//     var rightEdge = prawn.findRightEdge();
//     var bottomEdge = prawn.findBottomEdge();
//     var topEdge = prawn.findTopEdge();
//     if (prawn.dir === 'left') {
//       for (i = 0;  i < leftEdge.length; i++) {
//       if (JSON.stringify(_self.allPrawnLocations).includes(JSON.stringify(leftEdge[i]))); { _self.resetGame(prawn)}
//       }
//     }
//     if (prawn.dir === 'right') {
//       for (i = 0; i < rightEdge.length; i++) {
//       if (JSON.stringify(_self.allPrawnLocations).includes(JSON.stringify(rightEdge[i]))); { _self.resetGame(prawn)}
//       }
//     }
//     if (prawn.dir === 'up') {
//       for (i = 0; i < topEdge.length; i++) {
//       if (JSON.stringify(_self.allPrawnLocations).includes(JSON.stringify(topEdge[i]))); {_self.resetGame(prawn)}
//       }
//     }
//     if (prawn.dir === 'right') {
//       for (i = 0; i < rightEdge.length; i++) {
//       if (JSON.stringify(_self.allPrawnLocations).includes(JSON.stringify(bottomEdge[i]))); {_self.resetGame(prawn)}
//       }
//     }
//   });
// };
//
// World.prototype.checkPoopLeft = function(prawn) {
//   var topLeftCorner = JSON.stringify({x:prawn.x, y:prawn.y});
//   if (JSON.stringify(this.allPrawnLocations).includes(topLeftCorner)) _self.resetGame(prawn);
//   var bottomLeftCorner = JSON.stringify({x:prawn.x, y:prawn.y + prawn.height});
//   if (JSON.stringify(this.allPrawnLocations).includes(bottomLeftCorner)) _self.resetGame(prawn);
// };
//
// World.prototype.checkPoopDown = function(prawn) {
//   var bottomRightCorner = JSON.stringify({x:prawn.x + prawn.width, y:prawn.y + prawn.height});
//   if (JSON.stringify(this.allPrawnLocations).includes(bottomRightCorner)) _self.resetGame(prawn);
//   var bottomLeftCorner = JSON.stringify({x:prawn.x, y:prawn.y + prawn.height});
//   if (JSON.stringify(this.allPrawnLocations).includes(bottomLeftCorner)) _self.resetGame(prawn);
// };
//
// World.prototype.checkPoopRight = function(prawn) {
//   var bottomRightCorner = JSON.stringify({x:prawn.x + prawn.width, y:prawn.y + prawn.height});
//   if (JSON.stringify(this.allPrawnLocations).includes(bottomRightCorner)) _self.resetGame(prawn);
//   var topRightCorner = JSON.stringify({x:prawn.x + prawn.width, y:prawn.y});
//   if (JSON.stringify(this.allPrawnLocations).includes(topRightCorner)) _self.resetGame(prawn);
// };
//
// World.prototype.checkPoopUp = function(prawn) {
//   var topLeftCorner = JSON.stringify({x:prawn.x, y:prawn.y});
//   if (JSON.stringify(this.allPrawnLocations).includes(topLeftCorner)) _self.resetGame(prawn);
//   var topRightCorner = JSON.stringify({x:prawn.x + prawn.width, y:prawn.y});
//   if (JSON.stringify(this.allPrawnLocations).includes(topRightCorner)) _self.resetGame(prawn);
// };
