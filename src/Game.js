var Game = function() {
  this.finalScore = 0;
  this.bowlsLeftInFrame = 2;
  this.framesLeft = 10;
  this.frame = 1;
};

Game.prototype.bowl = function(numberOfPinsKnockedDown) {
  if(this.frame === 10 && this.bowlsLeftInFrame === 2 && numberOfPinsKnockedDown === 10) {
    this.bowlsLeftInFrame = 2;
    this.finalScore += 10;
    this.frame = 11
    return;
  }

  if(this.bowlsLeftInFrame > 0) {
    this.finalScore += numberOfPinsKnockedDown;
    this.bowlsLeftInFrame -= 1;
    if(this.bowlsLeftInFrame === 0) {
      this.framesLeft -= 1;
    }
  }
};