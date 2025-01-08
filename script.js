const boardStatus= (function(){
  const topLeft="mek mek";
  const topCenter="";
  const topRight="";
  const middleLeft="";
  const middleCenter="";
  const middleRight="";
  const bottomLeft="";
  const bottomCenter="";
  const bottomRight="";
  return {topLeft,topCenter,topRight,middleLeft,middleCenter,middleRight,bottomLeft,bottomCenter,bottomRight};
})();

const boardFunctions=(function() {
  const currentBoardState=Object.values(boardStatus);


  return {currentBoardState};
})();

const mek=document.getElementById("top-left");

mek.textContent=boardStatus.topLeft;
function resetBoard(){
  boardStatus.topLeft="";
  boardStatus.topCenter="";
  boardStatus.topRight="";
  boardStatus.middleLeft="";
  boardStatus.middleCenter="";
  boardStatus.middleRight="";
  boardStatus.bottomLeft="";
  boardStatus.bottomCenter="";
  boardStatus.bottomRight="";
};

function createPlayer(name) {
  const playerName=name;
  let score = 0;
  const getScore= () => score;
  const addScore= () => score++;

  return{ name, playerName,getScore, addScore};
};


const playerOne=createPlayer("yoda");
playerOne.addScore();

playerOne.getScore();
const score=document.getElementById("score");

while (playerOne.getScore()<5) {
  let currentScore=playerOne.getScore();
  score.textContent=currentScore;
}


if (playerOne.getScore()>5){
  console.log("you win");
}

