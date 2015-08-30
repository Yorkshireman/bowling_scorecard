var Game = function() {
  this.finalScore = 0;
  this.bowlsLeftInFrame = 2;
  this.framesLeft = 10;
  this.frame = 1;
  this.strike = null;
};

Game.prototype.bowl = function(numberOfPinsKnockedDown) {
  if(this.frame === 10 && this.bowlsLeftInFrame === 2 && numberOfPinsKnockedDown === 10) {
    this.strike = true;
    this.bowlsLeftInFrame = 2;
    this.finalScore += 10;
    this.frame = 11
    return;
  }

  if(this.frame === 11 && this.bowlsLeftInFrame > 0) {
    this.finalScore += numberOfPinsKnockedDown;
    this.bowlsLeftInFrame -= 1;

    if(this.strike === true) { 
      this.finalScore += numberOfPinsKnockedDown;
    }
  }

  if(this.bowlsLeftInFrame > 0 && this.frame != 11) {
    this.finalScore += numberOfPinsKnockedDown;
    this.bowlsLeftInFrame -= 1;
    if(this.bowlsLeftInFrame === 0) {
      this.framesLeft -= 1;
    }
  }
};