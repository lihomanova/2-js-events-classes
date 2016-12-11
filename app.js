var startGame=document.querySelector('.start');
var stopGame=document.querySelector('.stop');
var movingObject=document.querySelector('.movingObject');
var stepMoving=0;
var stepRotate=0;
function Application(){
  start: startGame.addEventListener('click',function(){
          movingObject.style.position='fixed';
          addEventListener('keydown', function(event) {
            var dataForMoving=document.querySelector('.dataForMoving').value;
            if (dataForMoving<10) {
              dataForMoving=10;
            };
            if (dataForMoving>50) {
              dataForMoving=50;
            };
            if (event.keyCode=='39' && event.shiftKey==false) {
              stepMoving=stepMoving+dataForMoving;
              movingObject.style.left=stepMoving+'px';
            } else if (event.keyCode=='37' && event.shiftKey==false) {
              stepMoving=stepMoving-dataForMoving;
              movingObject.style.left=stepMoving+'px';
            };
            if (event.keyCode=='39' && event.shiftKey) {
              stepRotate=stepRotate+dataForMoving;
              movingObject.style.transform='rotate('+stepRotate+'deg)';
            } else if (event.keyCode=='37' && event.shiftKey) {
              stepRotate=stepRotate-dataForMoving;
              movingObject.style.transform='rotate('+stepRotate+'deg)';
            };
            if (event.keyCode=='38' && event.shiftKey==false) {
              stepMoving=stepMoving-dataForMoving;
              movingObject.style.top=stepMoving+'px';
            } else if (event.keyCode=='40' && event.shiftKey==false) {
              stepMoving=stepMoving+dataForMoving;
              movingObject.style.top=stepMoving+'px';
            };
          });
        });
  stop: stopGame.addEventListener('click',function(){
          movingObject.style.position='static';
        });
}
var app=new Application()
