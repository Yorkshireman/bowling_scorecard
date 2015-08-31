var Game = function() {
  this.finalScore = 0;
  this.bowlsLeftInFrame = 2;
  this.framesLeft = 10;
  this.frame = 1;
  this.spare = null;
  this.strike = null;
  this.firstBall = null;
};

Game.prototype.bowl = function(score) {
  if(this.frame > 11) {
    return
  }

  if(this.isSpareInTenthFrame(score)) {
    this.spare = true;
    this.advanceToNextFrame();
    this.bowlsLeftInFrame = 1;
    this.addScoreToFinalScore(score);
    return
  }

  if(this.isEleventhFrame() && this.bowlsLeftInFrame > 0) {
    if(this.spare === true) {
      this.addScoreToFinalScore(score);
      this.bowlsLeftInFrame -= 1;

      if(this.strike === true) { 
        this.addScoreToFinalScore(score);
      }
    }

    if(this.strike === true) {
      if(this.isFirstBall()) {
        this.finalScore += (score * 2);
        this.advanceToNextBall();
        return
      }

      if(this.isSecondBall()) {
        this.finalScore += (score * 2);
        this.advanceToNextFrame();
        return
      }
    }
  }

  if(this.isNotEleventhFrame()) {
    
    if(this.isFirstBall()) {
      if(score === 10) {
        this.strike = true;
        this.addScoreToFinalScore(score);
        this.advanceToNextFrame();
        return
      }

      if(this.strike === true) {
        this.finalScore += (score * 2);
        this.advanceToNextBall();
        return
      }

      if(this.spare === true) {
        this.finalScore += (score + this.firstBall);
        this.spare = null;
        this.advanceToNextBall();
        return
      } else {
        this.firstBall = score;
        this.addScoreToFinalScore(score);
        this.advanceToNextBall();
        return
      }
    }

    if(this.isSecondBall()) {
      if(this.strike === true) {
        this.finalScore += (score * 2);
        this.strike = null;
        this.advanceToNextFrame();
        return
      }

      if(this.firstBall + score === 10) {
        this.spare = true;
        this.addScoreToFinalScore(score);
        this.framesLeft -= 1;
        this.advanceToNextFrame();
        return
      }
      this.addScoreToFinalScore(score);
      this.framesLeft -= 1;
      this.advanceToNextFrame();
      return
    }
  }
};

Game.prototype.isSecondBall = function() {
  if(this.bowlsLeftInFrame === 1) {
    return true;
  };
}

Game.prototype.isFirstBall = function() {
  if(this.bowlsLeftInFrame === 2) {
    return true;
  };
}

Game.prototype.advanceToNextBall = function() {
  this.bowlsLeftInFrame -= 1;
}

Game.prototype.advanceToNextFrame = function() {
  this.frame += 1;
  if(this.bowlsLeftInFrame === 1) {
    this.bowlsLeftInFrame = 2;
  }
}

Game.prototype.isEleventhFrame = function() {
  if(this.frame === 11) {
    return true;
  };
};

Game.prototype.isNotEleventhFrame = function() {
  if(this.frame != 11) {
    return true;
  };
};

Game.prototype.addScoreToFinalScore = function(score) {
  this.finalScore += score;
};

Game.prototype.isStrikeInTenthFrame = function(score) {
  if(this.frame === 10 && this.bowlsLeftInFrame === 2 && score === 10) {
    return true;
  }
};

Game.prototype.isSpareInTenthFrame = function(numberOfPinsKnockedDown) {
  if(this.frame === 10 && this.bowlsLeftInFrame === 1 && this.finalScore + numberOfPinsKnockedDown === 10) {
    return true;
  }
};