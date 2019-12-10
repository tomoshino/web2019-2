
function ChangeImageAndBack(){
  imgback();
  ThreeSecChange2();
}
function ThreeSecChange2(){
  setTimeout("imgchange2()",3000);
}
function imagechange2(){
  document.getElementById('img11').src = './image/josai.png';
}
function imgback(){
  document.getElementById('img11').src ='./image/bulbon.gif';
}