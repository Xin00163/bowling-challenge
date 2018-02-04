describe("Frame", function() {

  it("calculates one spare", function() {
    var frame = new Frame([5, 5])
    expect(frame.isSpare()).toBe(true);
  });

  it("calculates one strike", function() {
    var frame = new Frame([10])
    expect(frame.isStrike()).toBe(true);
  });

  it("calculates a normal game", function() {
    var frame = new Frame([8, 0])
    expect(frame.calculateScore()).toEqual(8);

    var frame = new Frame([0, 7])
    expect(frame.calculateScore()).toEqual(7);

    var frame = new Frame([7, 2])
    expect(frame.calculateScore()).toEqual(9);
  });

  it("throws an error if the first roll is greater than 10", function() {
    expect(function() {
      var frame = new Frame([11, 0]);
    }).toThrow(new Error("First roll is greater than 10"));
  })

  it("throws an error if the second roll is greater than 10", function() {
    expect(function() {
      var frame = new Frame([0, 11]);
    }).toThrow(new Error("Second roll is greater than 10"));
  })

  // it("throws an error if the total of the first and the second roll is greater than 10", function() {
  //   expect(function() {
  //     var frame = new Frame([5, 6]);
  //   }).toThrow(new Error("The total of 1st and 2nd roll is greater than 10"));
  // })

  it("calculate the score when it is a spare", function() {
    var frame = new Frame([5, 5])
    var nextFrame = new Frame([5, 1])
    expect(frame.calculateScore(nextFrame)).toEqual(15)
  })

  it("calculate the score when it is a strike", function() {
    var frame = new Frame([10])
    var nextFrame = new Frame([5, 1])
    expect(frame.calculateScore(nextFrame)).toEqual(16);
  })


})
