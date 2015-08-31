var Game = function() {
  this.finalScore = 0;
  this.bowlsLeftInFrame = 2;
  this.framesLeft = 10;
  this.frame = 1;
  this.spare = null;
  this.strike = null;
  this.firstBall = null;
};

Game.prototype.bowl = function(numberOfPinsKnockedDown) {

  if(this.isStrikeInTenthFrame(numberOfPinsKnockedDown)) {
    this.strike = true;
    this.bowlsLeftInFrame = 2;
    this.finalScore += 10;
    this.frame = 11
    return;
  }

  if(this.isSpareInTenthFrame(numberOfPinsKnockedDown)) {
    this.frame = 11;
    this.bowlsLeftInFrame = 1;
    this.finalScore += numberOfPinsKnockedDown;
    return
  }

  if(this.frame === 11 && this.bowlsLeftInFrame > 0) {
    this.finalScore += numberOfPinsKnockedDown;
    this.bowlsLeftInFrame -= 1;

    if(this.strike === true) { 
      this.finalScore += numberOfPinsKnockedDown;
    }
  }

  if(this.bowlsLeftInFrame === 1 && this.frame < 11) {
    if(this.firstBall + numberOfPinsKnockedDown === 10) {
      this.spare = true;
    }

    this.finalScore += numberOfPinsKnockedDown;
    this.framesLeft -= 1;
    this.frame += 1;
    this.bowlsLeftInFrame = 2;
    return
  }
  
  if(this.bowlsLeftInFrame === 2 && this.frame != 11) {
    this.firstBall = numberOfPinsKnockedDown;

    if(this.spare === true) {
      this.finalScore += (numberOfPinsKnockedDown + this.firstBall * 2);
      this.spare = null;
    } else {
      this.finalScore += numberOfPinsKnockedDown;
    }

    this.bowlsLeftInFrame -= 1;
  }
};

Game.prototype.isStrikeInTenthFrame = function(numberOfPinsKnockedDown) {
  if(this.frame === 10 && this.bowlsLeftInFrame === 2 && numberOfPinsKnockedDown === 10) {
    return true;
  }
};

Game.prototype.isSpareInTenthFrame = function(numberOfPinsKnockedDown) {
  if(this.frame === 10 && this.bowlsLeftInFrame === 1 && this.finalScore + numberOfPinsKnockedDown === 10) {
    return true;
  }
};