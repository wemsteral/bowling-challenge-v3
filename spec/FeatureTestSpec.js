describe("feature tests", function() {
  var game;
  beforeEach(function() {
    game = new Game();
  });

  it("can roll a game of ones", function() {
    for (var i = 0; i < 10; i++) {
      game.add(1, 1);
    }
    expect(game.total()).toEqual(20);
  });

  it("can roll a game of zeros", function() {
    for (var i = 0; i < 10; i++) {
      game.add(0, 0);
    }
    expect(game.total()).toEqual(0);
  });

  it("can roll a game of ones", function() {
    for (var i = 0; i < 10; i++) {
      game.add(1, 1);
    }
    expect(game.total()).toEqual(20);
  });

  it("can roll a game of strikes", function() {
    for (var i = 0; i < 11; i++) {
      game.add(10);
    }
    expect(game.total()).toEqual(300);
  });
});
