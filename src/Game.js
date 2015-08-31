var Game = function() {
  this.scoresArray = [];
};

Game.prototype.bowl = function(score) {
  this.scoresArray.push(score);  
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
}