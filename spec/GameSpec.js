describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("when game starts", function() {
    it('there are 10 frames left to play', function() {
      expect(game.framesLeft).toEqual(10);
    });

    it('the game is on frame 1', function() {
      expect(game.frame).toEqual(1);
    });
  });

  describe("when in final frame", function() {
    beforeEach(function() {
      game.framesLeft = 1;
      game.frame = 10;
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

        it("no more balls can be played", function() {
          game.bowl(2);
          expect(game.finalScore).toEqual(5);
        });
      });

      describe("when first ball bowls a strike", function() {
        beforeEach(function() {
          game.bowl(10);
        });

        it("there is 1 frame left to play", function() {
          expect(game.framesLeft).toEqual(1);
        });

        it("there are two balls left to play", function() {
          expect(game.bowlsLeftInFrame).toEqual(2);
        });

        it("the current finalScore is 10", function() {
          expect(game.finalScore).toEqual(10);
        });
      });
    });
  });

});
