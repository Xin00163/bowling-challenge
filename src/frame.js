function Frame(rolls) {
  if (rolls[0] > 10) {
    throw new Error("First roll is greater than 10")
  }
  if (rolls[1] > 10) {
    throw new Error("Second roll is greater than 10")
  }
  // if (rolls[0] + rolls[1] > 10) {
  //   throw new Error("The total of 1st and 2nd roll is greater than 10")
  // }
  this.rolls = rolls;
}

Frame.prototype.calculateScore = function(nextFrame, furtherNextFrame) {
  return this.rollScore() + this.bonus(nextFrame, furtherNextFrame);
};

Frame.prototype.bonus = function(nextFrame, furtherNextFrame) {
  if (undefined === nextFrame) {
    return 0;
  };
  if (this.isStrike()) {
    return nextFrame.strikeBonus(furtherNextFrame);
  }
  if (this.isSpare()) {
    return nextFrame.spareBonus();
  }
  return 0;
};

Frame.prototype.rollScore = function() {
  return this.rolls.reduce(function(score, roll) {
    return score + roll;
  })
};

Frame.prototype.isSpare = function() {
  return this.rollScore() == 10 && this.rolls[0] !== 10;
};

Frame.prototype.isStrike = function() {
  return this.rolls[0] === 10;
};


Frame.prototype.spareBonus = function() {
  return this.rolls[0];
};

Frame.prototype.strikeBonus = function(nextFrame) {
  if (this.isStrike() && nextFrame !== undefined) {
    return this.rollScore() + nextFrame.rolls[0];
  }
  return this.rolls[0] + this.rolls[1];
};
