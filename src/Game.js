var Game = function() {
  this.scoresArray = [];
};

Game.prototype.bowl = function(score) {
  var currentBallIndex = this.scoresArray.length + 1;
  var previousBallIndex = this.scoresArray.length

  // if(this.isSecondBallOfFrame && (score + this.scoresArray[previousBallIndex] === 10)) {
  //   this.scoresArray.push("/")
  // }

  this.scoresArray.push(score);  
};

Game.prototype.isFirstBallOfFrame = function() {
  if(currentBall % 2 != 0) {
    return true
  }
};

Game.prototype.isSecondBallOfFrame = function() {
  if(currentBall % 2 === 0) {
    return true
  }
};

Game.prototype.totalScore = function() {
  var i;
  var total = 0;
  for(i = 0; i < this.scoresArray.length; i++) {
    if(this.scoresArray[i] != "X" && this.scoresArray[i] != "/") {
      total += scoresArray[i];
    }
  }
  return total;
};