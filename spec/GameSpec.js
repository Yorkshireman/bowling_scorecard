describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("when in final frame", function() {
    beforeEach(function() {
      game.framesLeft = 1
    });
    
    describe("with no strikes or spares left to add on", function() {
      describe("when bowling a total of 5 points in that frame", function() {
        beforeEach(function() {
          game.bowl(3)
          game.bowl(2)
        });

        it('the game is correctly stored', function() {
          expect(game.finalScore).toEqual(5);
        });

        it('there are no frames left to play', function() {
          expect(game.framesLeft).toEqual(0);
        });
      });
    });
  });

});
