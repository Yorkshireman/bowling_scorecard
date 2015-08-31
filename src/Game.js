var Game = function() {
  this.scoresArray = [[0, [0, 0]], [0, [0, 0]], [0, [0, 0]], [0, [0, 0]], [0, [0, 0]], [0, [0, 0]], [0, [0, 0]], [0, [0, 0]], [0, [0, 0]], [0, [0, 0]], [0, [0, 0]], ]
  this.frame = 1;
  this.ball = 1;
};

Game.prototype.bowl = function(score) {
  if(this.isSpare(score)) {
    this.scoresArray[this.frame - 1][0] += score
    this.scoresArray[this.frame - 1][1][1] = "/"
    this.advanceToNextFrame();
    return
  }

  if(this.isFirstBall()) {
    this.scoresArray[this.frame - 1][1][0] = score;
    this.scoresArray[this.frame - 1][0] += score;
    this.advanceToNextBall();
    return
  }

  if(this.isSecondBall()) {
    this.scoresArray[this.frame - 1][1][1] = score;
    this.scoresArray[this.frame - 1][0] += score;
    this.advanceToNextFrame();
  }
};

Game.prototype.isSpare = function(score) {
  if(this.isSecondBall() && (score + this.previousBallSameFrameScore() === 10)) {
    return true
  }
}

Game.prototype.previousBallSameFrameScore = function() {
  return this.scoresArray[this.frame - 1][1][0];
}

// Game.prototype.currentBallIndex = function() {
//   return this.scoresArray.length + 1;
// }

// Game.prototype.previousBallIndex = function() {
//   return this.scoresArray.length - 1;
// }

Game.prototype.isFirstBall = function() {
  return this.ball === 1;
};

Game.prototype.isSecondBall = function() {
  return this.ball === 2;
};

Game.prototype.advanceToNextBall = function() {
  if(this.ball === 1) { 
    this.ball += 1;
  } else {
    this.ball = 1;
  }
};

Game.prototype.advanceToNextFrame = function() {
  this.scoresArray[this.frame][0] = this.scoresArray[this.frame - 1][0];
  this.frame += 1;
  this.advanceToNextBall();
};

Game.prototype.totalScore = function() {
  var total = 0;
  var i;
  for(i = 0; i < this.scoresArray.length; i++) {
    var frame = this.scoresArray[i];
    if(frame[0] > total) {
      total = frame[0]
    }
  }
  return total;
};