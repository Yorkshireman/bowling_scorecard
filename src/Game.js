var Game = function() {
  this.finalScore = 0;
};

Game.prototype.bowl = function(numberOfPinsKnockedDown) {
  this.finalScore += numberOfPinsKnockedDown;
};