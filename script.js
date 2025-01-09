
/*object representing current state of the boards*/
const boardStatus= (function(){
  const topLeft="mek mek";
  const topCenter="";
  const topRight="";
  const middleLeft="X";
  const middleCenter="X";
  const middleRight="X";
  const bottomLeft="";
  const bottomCenter="";
  const bottomRight="O";
  return {topLeft,topCenter,topRight,middleLeft,middleCenter,middleRight,bottomLeft,bottomCenter,bottomRight};
})();

/* Functions to do stuff with the board*/
const boardFunctions=(function() {
  /* Returns an object showing only the values on the board right now*/
  const currentBoardState=Object.values(boardStatus);
  
  /*Function to generate a numerical array that shows board state*/
  const smh=(function()
    {const tempArr=[];
    for (let i = 0; i < currentBoardState.length; i++) {
    if (currentBoardState[i]=="X") {
      const element = 1;
      tempArr.push(element);
    }else if (currentBoardState[i]=="O"){
      const element = -1;
      tempArr.push(element);
    }else {
      const element = 0;
      tempArr.push(element);
    }}
    return(tempArr)
  })();

  const boardEval=(function(){
    const winner=[0];
    const lineValue=[smh[0]+smh[1]+smh[2],smh[3]+smh[4]+smh[5],
    smh[6]+smh[7]+smh[8],smh[0]+smh[3]+smh[6],smh[1]+smh[4]+smh[7],
    smh[2]+smh[5]+smh[8],smh[0]+smh[4]+smh[8],smh[2]+smh[4]+smh[6]];
    for (let i = 0; i < lineValue.length; i++) {
    
      if (lineValue[i]=3) {
        winner[0]++;
        break
      }else if (lineValue[i]){
        winner[0]--;
        break
      }else{
      
      }}
      return(lineValue,winner)
  })();

  

  return {currentBoardState,smh,boardEval};
})();

const mek=document.getElementById("top-left");

mek.textContent=boardStatus.topLeft;
/* Function to reset the board to empty*/
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

/* Function to create player*/
function createPlayer(name) {
  const playerName=name;
  let score = -1;
  const getScore= () => score;
  const addScore= () => score++;

  return{ name, playerName,getScore, addScore};
};


const playerOne=createPlayer("yoda");
playerOne.addScore();

playerOne.getScore();
const score=document.getElementById("score");



if (playerOne.getScore()>5){
  console.log("you win");
}

