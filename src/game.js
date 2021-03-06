function Game() {
  this.frames = [];
}

Game.prototype.roll = function(rolls) {
  frame = new Frame(rolls);
  this.frames.push(frame)
};

Game.prototype.score = function() {
  return this.frames.reduce(function(score, frame, index, frames) {
    return score + frame.calculateScore(frames[index + 1], frames[index + 2]);
  }, 0);
};
