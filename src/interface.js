$(document).ready(function(){

  var game = new Game();
  var rollIndex = 0;
  var frameIndex = 0;

  var afterRoll = function(score){
    // $('#f' + frameIndex + 'score').html(game.calculateScore());
    // game.calculateScore();
    // console.log(game.score);
    $('#r' + rollIndex).html(score);
    var frameScore = Number($('#r' + (frameIndex*2)).html()) + Number($('#r' + (frameIndex*2+1)).html())
    $('#f' + frameIndex + 'score').html(frameScore);
    frameIndex += rollIndex%2;
    rollIndex++;
  };

  $('#reset').click(function() {
    location.reload();
  });

  $('.rollScore').click(function(){
    var score = $(this).html();
    game.roll(score);
    afterRoll(score);
  });

// $(document).append(buildGameView(game))
//
//   function buildGameView(game){
//     $container = ${"<div></div>"}
//     return $container
//   }
//
//   function buildScoreTable(game){
//     $table = ${"<div></div>"}
//     return $table
//   }
//
//   function buildTableHeader(game){
//     var frameView = [];
//     for (var index = 0; index < game.numberOfFrames){
//       frameViews.push(buildFrame)
//     }
//   }
});
