
function ChangeImageAndBack(){

  imgback();
  
  ThreeSecChange2();
}
function ThreeSecChange2(){
  setTimeout("imgchange2()",3000);
}
function imgchange2(){
  document.getElementById('img12').src ='./image/josai.png';
}
function imgback(){
  document.getElementById('img12').src ='./image/bulbon.gif';
}