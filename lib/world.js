const Prawn = require('../lib/prawn');

// const canvas = document.getElementById('trawn');
// const context = canvas.getContext('2d');

function World(width, height, context) {
  this.width = width;
  this.height = height;
  this.prawns = [];
  this.allPrawnLocations = [];
  this.context = context;
  this.score = [0, 0];
  this.poocheck = [];
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

  if(this.prawns.length === 0) return;
  if(this.prawns[0].pastLocations.length < 20) return;
  if(this.prawns[1].pastLocations.length < 20) return;
  var _self = this;
  pooCheck = [];
  for (var n = 0; n < 2; n++) {
    var tempAPoop = [];
    var tempBPoop = [];
    tempAPoop = tempAPoop.concat(this.prawns[0].pastLocations);
    tempBPoop = tempBPoop.concat(this.prawns[1].pastLocations);
    if (n === 0) {
      var tempAPoopLength = tempAPoop.length;
      var startSplice = tempAPoopLength - 20;
      tempAPoop.splice(startSplice, 20);
    }
    if (n === 1) {
      var tempBPoopLength = tempBPoop.length;
      var startSpliceB = tempBPoopLength - 20;
      tempBPoop.splice(startSpliceB, 20);
      }
    validPoops = [];
    validPoops.push(tempAPoop);
    validPoops.push(tempBPoop);
    var steppedInPoop = [];
    var xValue = this.prawns[n].x;
    var yValue = this.prawns[n].y;
    for (i = 0; i < 4; i++) {
        if (JSON.stringify(validPoops).includes(JSON.stringify({x: xValue + i, y: yValue}))) {
          pooCheck.push(n);
        }
        if (JSON.stringify(validPoops).includes(JSON.stringify({x: xValue + i, y: yValue + 1}))) {
          pooCheck.push(n);
        }
        if (JSON.stringify(validPoops).includes(JSON.stringify({x: xValue + i, y: yValue + 2}))) {
          pooCheck.push(n);
        }
        if (JSON.stringify(validPoops).includes(JSON.stringify({x: xValue + i, y: yValue + 3}))) {
          pooCheck.push(n);
        }
        if (JSON.stringify(validPoops).includes(JSON.stringify({x: xValue + i, y: yValue + 4}))) {
          pooCheck.push(n);
        }
      }
    }
    if (pooCheck.length === 0) return;
    console.log(pooCheck);
    if (pooCheck.includes(0) && pooCheck.includes(1)) {
      console.log('resetgametie');
      return _self.resetGameTie();
    }
    if (pooCheck.includes(0)) _self.resetGame(_self.prawns[0]);
    if (pooCheck.includes(1)) _self.resetGame(_self.prawns[1]);
};

// World.prototype.checkPoop = function() {
//   var _self = this;
//   this.prawns.forEach(function (prawn) {
//
//     var topLeftCorner = JSON.stringify({x:prawn.x, y: prawn.y});
//     var leftEdge2 = JSON.stringify({x: prawn.x, y:prawn.y + 1})
//     var leftEdge3 = JSON.stringify({x: prawn.x, y:prawn.y + 2})
//     var leftEdge4 = JSON.stringify({x: prawn.x, y:prawn.y + 3})
//     var bottomLeftCorner = JSON.stringify({x:prawn.x, y:prawn.y + 4});
//     var bottomEdge2 = JSON.stringify({x: prawn.x + 1, y: prawn.y + 4});
//     var bottomEdge3 = JSON.stringify({x: prawn.x + 2, y: prawn.y + 4});
//     var bottomEdge4 = JSON.stringify({x: prawn.x + 3, y: prawn.y + 4});
//     var bottomRightCorner = JSON.stringify({x:prawn.x + 4, y: prawn.y + 4});
//     var rightEdge2 = JSON.stringify({x: prawn.x + 4, y: prawn.y + 1});
//     var rightEdge3 = JSON.stringify({x: prawn.x + 4, y: prawn.y + 2});
//     var rightEdge4 = JSON.stringify({x: prawn.x + 4, y: prawn.y + 3});
//     var topRightCorner = JSON.stringify({x:prawn.x + 4, y:prawn.y});
//     var topEdge2 = JSON.stringify({x: prawn.x + 1, y: prawn.y});
//     var topEdge3 = JSON.stringify({x: prawn.x + 2, y: prawn.y});
//     var topEdge4 = JSON.stringify({x: prawn.x + 3, y: prawn.y});
//     if (prawn.dir === 'left') {
//       if (JSON.stringify(_self.allPrawnLocations).includes(topLeftCorner)) _self.resetGame(prawn);
//       if (JSON.stringify(_self.allPrawnLocations).includes(leftEdge2)) _self.resetGame(prawn);
//       if (JSON.stringify(_self.allPrawnLocations).includes(leftEdge3)) _self.resetGame(prawn);
//       if (JSON.stringify(_self.allPrawnLocations).includes(leftEdge4)) _self.resetGame(prawn);
//       if (JSON.stringify(_self.allPrawnLocations).includes(bottomLeftCorner)) _self.resetGame(prawn);
//     }
//     if (prawn.dir === 'right') {
//       if (JSON.stringify(_self.allPrawnLocations).includes(bottomRightCorner)) _self.resetGame(prawn);
//       if (JSON.stringify(_self.allPrawnLocations).includes(rightEdge2)) _self.resetGame(prawn);
//       if (JSON.stringify(_self.allPrawnLocations).includes(rightEdge3)) _self.resetGame(prawn);
//       if (JSON.stringify(_self.allPrawnLocations).includes(rightEdge4)) _self.resetGame(prawn);
//       if (JSON.stringify(_self.allPrawnLocations).includes(topRightCorner)) _self.resetGame(prawn);
//     }
//     if (prawn.dir === 'up') {
//       if (JSON.stringify(_self.allPrawnLocations).includes(topLeftCorner)) _self.resetGame(prawn);
//       if (JSON.stringify(_self.allPrawnLocations).includes(topEdge2)) _self.resetGame(prawn);
//       if (JSON.stringify(_self.allPrawnLocations).includes(topEdge3)) _self.resetGame(prawn);
//       if (JSON.stringify(_self.allPrawnLocations).includes(topEdge4)) _self.resetGame(prawn);
//       if (JSON.stringify(_self.allPrawnLocations).includes(topRightCorner)) _self.resetGame(prawn);
//     }
//     if (prawn.dir === 'down') {
//       if (JSON.stringify(_self.allPrawnLocations).includes(bottomRightCorner)) _self.resetGame(prawn);
//       if (JSON.stringify(_self.allPrawnLocations).includes(bottomEdge2))
//       _self.resetGame(prawn);
//       if (JSON.stringify(_self.allPrawnLocations).includes(bottomEdge3)) _self.resetGame(prawn);
//       if (JSON.stringify(_self.allPrawnLocations).includes(bottomEdge4)) _self.resetGame(prawn);
//       if (JSON.stringify(_self.allPrawnLocations).includes(bottomLeftCorner)) _self.resetGame(prawn);
//     };
//   });
// };

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

World.prototype.resetGameTie = function () {
  this.context.fillStyle = '#4E78A0';
  this.context.clearRect(0, 0, this.width, this.height);
  this.prawns = [];
  this.allPrawnLocations = [];
  this.context.fillStyle = '#4E78A0';
  this.context.fillRect(0, 0, this.width, this.height);
}



World.prototype.brakePrawnA = function () {
    var self = this;
    color = this.getRandomColor()
    this.prawns[0].speed = 2;
    this.prawns[0].color = color;
    window.setTimeout(function()
      {
        self.prawns[0].color = '#B0171F';
        self.prawns[0].speed = 3 ;
      }, 500);
};

World.prototype.boostPrawnA = function () {
    var self = this;
    color = this.getRandomColor()
    this.prawns[0].speed = 4;
    this.prawns[0].color = color;
    window.setTimeout(function()
      {
        self.prawns[0].color = '#B0171F';
        self.prawns[0].speed = 3 ;
      }, 500);
};

World.prototype.getRandomColor = function() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

World.prototype.brakePrawnB = function () {
    var self = this;
    color = this.getRandomColor()
    this.prawns[1].speed = 2;
    this.prawns[1].color = color;
      window.setTimeout(function()
      {
        self.prawns[1].color = '#F5D3E2';
        this.prawns[1].speed = 3 ;
      }, 500);
};

World.prototype.boostPrawnB = function () {
    var self = this;
    color = this.getRandomColor()
    this.prawns[1].speed = 4;
    this.prawns[1].color = color;
      window.setTimeout(function()
      {
        self.prawns[1].color = '#F5D3E2';
        self.prawns[1].speed = 3 ;
      }, 250);
};



module.exports = World;
