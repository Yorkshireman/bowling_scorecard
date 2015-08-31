describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("when game starts", function() {
    it('the game is on frame 1', function() {
      expect(game.frame).toEqual(1);
    });

    describe("when player scores a 3 and a 6", function() {
      beforeEach(function() {
        game.bowl(3);
        game.bowl(6);
      });

      it("the current finalScore is 9", function() {
        expect(game.finalScore).toEqual(9);
      })

      it("the current frame is 2", function() {
        expect(game.frame).toEqual(2);
      })

      it("strike status is null", function() {
        expect(game.strike).toEqual(null);
      })
    });

    describe("when a player scores a spare and then a 2 and a 4", function() {
      beforeEach(function() {
        game.bowl(4);
        game.bowl(6);
        game.bowl(2);
        game.bowl(4);
      });

      it("the current finalScore is 20", function() {
        expect(game.finalScore).toEqual(20);
      });
    });

    describe("when a player scores a double strike, then a 9, then a zero", function() {
      beforeEach(function() {
        game.bowl(10);
        game.bowl(10);
        game.bowl(9);
        game.bowl(0);
      });

      it("the current finalScore is 57", function() {
        expect(game.finalScore).toEqual(57);
      });

      it("the current frame is 4", function() {
        expect(game.frame).toEqual(4);
      });

      describe("if player then scores a 3 and a 5", function() {
        beforeEach(function() {
          game.bowl(3)
          game.bowl(5)
        })

        it("the current finalScore is 65", function() {
          expect(game.finalScore).toEqual(65);
        });
      });
    });

    describe("when a player scores a triple strike, then a 0, then a 9", function() {
      beforeEach(function() {
        game.bowl(10);
        game.bowl(10);
        game.bowl(10);
        game.bowl(0);
        game.bowl(9);
      });

      it("the current finalScore is 78", function() {
        expect(game.finalScore).toEqual(78);
      })
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
          game.bowl(3);
          game.bowl(2);
        });

        it('the game is correctly scored', function() {
          expect(game.finalScore).toEqual(5);
        });

        it("no more balls can be played", function() {
          game.bowl(2);
          expect(game.finalScore).toEqual(5);
        });
      });

      describe("when a spare is achieved", function() {
        beforeEach(function() {
          game.bowl(6);
          game.bowl(4);
        });

        it("the game is on frame 11", function() {
          expect(game.frame).toEqual(11);
        })

        it("there is 1 ball left to play", function() {
          expect(game.bowlsLeftInFrame).toEqual(1);
        })

        it("the current finalScore is 10", function() {
          expect(game.finalScore).toEqual(10);
        })

        describe("if the player then bowls an 8", function() {
          beforeEach(function() {
            game.bowl(8);
          });

          it("the final score is 18", function() {
            expect(game.finalScore).toEqual(18);
          })

          it("cannot score anymore points", function() {
            game.bowl(3);
            expect(game.finalScore).toEqual(18);
          });
        });
      });

      describe("when first ball bowls a strike", function() {
        beforeEach(function() {
          game.bowl(10);
        });

        it('the game is on frame 11', function() {
          expect(game.frame).toEqual(11);
        });

        it("there are two balls left to play", function() {
          expect(game.bowlsLeftInFrame).toEqual(2);
        });

        it("the current finalScore is 10", function() {
          expect(game.finalScore).toEqual(10);
        });

        describe("if player then bowls a 3 and 6", function() {
          beforeEach(function() {
            game.bowl(3);
            game.bowl(6);
          });

          it("the finalScore is 28", function() {
            expect(game.finalScore).toEqual(28);
          });

          it("cannot score anymore points", function() {
            game.bowl(4);
            expect(game.finalScore).toEqual(28);
          });
        })
      });
    });
  });
});
