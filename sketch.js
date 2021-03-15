var gameState=0, contestantCount, database, quiz, question, contestant,allcontestants;

function setup(){

  database = firebase.database();
  createCanvas(700,700);
quiz= new Quiz();
quiz.getState();
quiz.start();
}


function draw(){
 // background("black");

 /* if(contestantCount===2){
    gameState=1;
    game.updateState(1);
  }
  if(gameState===1){
    quiz.play();
  }*/
  
}
