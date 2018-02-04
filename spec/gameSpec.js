describe("Game", function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it("consists of an empty array of frames at the beginning", function() {
    expect(game.frames).toEqual([  ]);
  });

  it("calculates a gutter game", function(){
    generateFrames([0,0]);
    expect(game.score()).toEqual(0);
  });

  it("calculates a standard game", function(){
    generateFrames([1,1]);
    console.log(game)
    expect(game.score()).toEqual(20);
  });

  it("calculates strikes", function(){
    generateFrames([10], [10,10,10])
    expect(game.score()).toEqual(300);
  });

  it("calculates spares", function(){
    generateFrames([5,5], [5,5,5]);
    expect(game.score()).toEqual(150);
  });

  function generateFrames(frame, final_frame){
    for(var i = 0; i < 9; i++){
      game.roll(frame);
    }
    game.roll(final_frame || frame);
  }

});
