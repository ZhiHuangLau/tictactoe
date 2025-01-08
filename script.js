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

const mek=document.getElementById("top-left");

mek.textContent=boardStatus.topLeft;
