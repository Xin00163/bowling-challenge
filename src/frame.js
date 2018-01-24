function Frame(roll1, roll2, prevFrame){
  if(roll1 > 10) {throw new Error("First roll is greater than 10")}
  if(roll2 > 10) {throw new Error("Second roll is greater than 10")}
  if(roll1 + roll2 > 10) {throw new Error("The total of 1st and 2nd roll is greater than 10")}
  this.roll1 = roll1;
  this.roll2 = roll2;
  this.prevFrame = prevFrame;
}

Frame.prototype.isSpare = function(){
  return this.roll1 + this.roll2 === 10 && this.roll1 !== 10;
};

Frame.prototype.isStrike = function(){
  return this.roll1 === 10;
};

Frame.prototype.calculateScore = function(){
  return this.roll1 + this.roll2
}
