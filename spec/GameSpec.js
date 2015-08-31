describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("when game starts", function() {
    describe("when player scores a 3 and a 6", function() {
      beforeEach(function() {
        game.bowl(3);
        game.bowl(6);
      });

      it("the currentScore is 9", function() {
        expect(game.totalScore()).toEqual(9);
      })
    });

    describe("when player scores a 4 and a 6", function() {
      beforeEach(function() {
        game.bowl(4);
        game.bowl(6);
      });

      it("scoresArray is correctly marked", function() {
        expect(game.scoresArray[0]).toEqual([10, [4, "/"]]);
      })
    });

    describe("when a player scores a 3, 2 and then a 4 and a 2", function() {
      beforeEach(function() {
        game.bowl(3);
        game.bowl(2);
        game.bowl(4);
        game.bowl(2);
      });

      it("scoresArray is correctly marked", function() {
        expect(game.scoresArray[0]).toEqual([5, [3, 2]]);
        expect(game.scoresArray[1]).toEqual([11, [4, 2]]);
      })

      it("the current totalScore is 11", function() {
        expect(game.totalScore()).toEqual(11);
      });
    });

    // describe("when a player scores a spare and then a 4 and a 2", function() {
    //   beforeEach(function() {
    //     game.bowl(7);
    //     game.bowl(3);
    //     game.bowl(4);
    //     game.bowl(2);
    //   });

    //   it("the current totalScore is 20", function() {
    //     expect(game.totalScore()).toEqual(20);
    //   });
    // });

    describe("when a player scores a double strike, then a 9, then a zero", function() {
      beforeEach(function() {
        game.bowl(10);
        game.bowl(10);
        game.bowl(9);
        game.bowl(0);
      });

      // it("the currentScore is 57", function() {
      //   expect(game.currentScore).toEqual(57);
      // });

      describe("if player then scores a 3 and a 5", function() {
        beforeEach(function() {
          game.bowl(3)
          game.bowl(5)
        })

        // it("the currentScore is 65", function() {
        //   expect(game.currentScore).toEqual(65);
        // });
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

      // it("the currentScore is 78", function() {
      //   expect(game.currentScore).toEqual(78);
      // })
    });
  });

  // describe("when in tenth frame", function() {
  //   beforeEach(function() {
  //     game.framesLeft = 1;
  //     game.frame = 10;
  //   });
    
  //   describe("with no strikes or spares left to add on", function() {
  //     describe("when bowling a total of 5 points in that frame", function() {
  //       beforeEach(function() {
  //         game.bowl(3);
  //         game.bowl(2);
  //       });

  //       it('the game is correctly scored', function() {
  //         expect(game.finalScore).toEqual(5);
  //       });

  //       it("no more balls can be played", function() {
  //         game.bowl(2);
  //         expect(game.finalScore).toEqual(5);
  //       });
  //     });

  //     describe("when a spare is achieved", function() {
  //       beforeEach(function() {
  //         game.bowl(6);
  //         game.bowl(4);
  //       });

  //       it("the game is on frame 11", function() {
  //         expect(game.frame).toEqual(11);
  //       })

  //       it("there is 1 ball left to play", function() {
  //         expect(game.bowlsLeftInFrame).toEqual(1);
  //       })

  //       it("the current finalScore is 10", function() {
  //         expect(game.finalScore).toEqual(10);
  //       })

  //       describe("if the player then bowls an 8", function() {
  //         beforeEach(function() {
  //           game.bowl(8);
  //         });

  //         it("the final score is 18", function() {
  //           expect(game.finalScore).toEqual(18);
  //         })

  //         it("cannot score anymore points", function() {
  //           game.bowl(3);
  //           expect(game.finalScore).toEqual(18);
  //         });
  //       });
  //     });

  //     describe("when first ball bowls a strike", function() {
  //       beforeEach(function() {
  //         game.bowl(10);
  //       });

  //       it('the game is on frame 11', function() {
  //         expect(game.frame).toEqual(11);
  //       });

  //       it("there are two balls left to play", function() {
  //         expect(game.bowlsLeftInFrame).toEqual(2);
  //       });

  //       it("the current finalScore is 10", function() {
  //         expect(game.finalScore).toEqual(10);
  //       });

  //       describe("if player then bowls a 3 and 6", function() {
  //         beforeEach(function() {
  //           game.bowl(3);
  //           game.bowl(6);
  //         });

  //         it("the finalScore is 28", function() {
  //           expect(game.finalScore).toEqual(28);
  //         });

  //         it("cannot score anymore points", function() {
  //           game.bowl(4);
  //           expect(game.finalScore).toEqual(28);
  //         });
  //       })
  //     });
  //   });
  // });
});
