 var button1 = document.getElementById("button1");
 var button2 = document.getElementById("button2");
 var button3 = document.getElementById("button3");
 var button4 = document.getElementById("button4");
 var button5 = document.getElementById("button5");
 var button6 = document.getElementById("button6");
 var button7 = document.getElementById("button7");
 var button8 = document.getElementById("button8");
 var a;
 var b;
 var c;

function changebtn(value){
  if(value==1){
  a=1;
 } else if(value==2){
  a=2;
 } else if(value==3){
  a=3;
 }
 if(value==4){
  b=1;
 }
 if(value==5){
  b=2;
 }
 if(value==6){
  c=1;
 } 
 if(value==7){
  c=2;
 }
 if(value==8){
  c=3;
 }
 
if (a=1 && b=1 && c=1) {
  button1.style.display="block";
}
 
}