var Game = function() {
  this.scoresArray = [];
};

Game.prototype.bowl = function(score) {
  if(this.isSpare(score)) {
    this.scoresArray.push("/")
    return
  }

  this.scoresArray.push(score);
};

Game.prototype.isSpare = function(score) {
  if(this.isSecondBallOfFrame() && (score + this.previousBallScore() === 10)) {
    return true
  }
}

Game.prototype.previousBallScore = function() {
  var i = this.previousBallIndex();
  return this.scoresArray[i];
}

Game.prototype.currentBallIndex = function() {
  return this.scoresArray.length + 1;
}

Game.prototype.previousBallIndex = function() {
  return this.scoresArray.length - 1;
}

Game.prototype.isFirstBallOfFrame = function() {
  if(currentBallIndex() % 2 != 0) {
    return true
  }
};

Game.prototype.isSecondBallOfFrame = function() {
  if(this.currentBallIndex() % 2 === 0) {
    return true
  }
};

Game.prototype.totalScore = function() {
  var i;
  var total = 0;
  console.log(this.scoresArray)
  for(i = 0; i < this.scoresArray.length; i++) {
    if(this.scoresArray[i] != "X" && this.scoresArray[i] != "/") {
      total += this.scoresArray[i];
    }
  }
  return total;
};