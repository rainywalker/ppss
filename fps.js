/**
 * Created by jaelomin on 15. 5. 15..
 */

addEventListener("DOMContentLoaded",function(){
  var fps, avg = 0, sum = 0, count = 1, calcFPS, prevTime = 0; //0으로 초기화함
  var fps_view = document.getElementById("fps");
  
  calcFPS = function( currTime ){//인자로 시간이 들어옴
      fps = 1000 / ( currTime - prevTime );
      prevTime = currTime;
      //평균계산
      avg = ( sum += fps ) / count++;
      requestAnimationFrame( calcFPS );
      fps_view.innerHTML =  parseInt(avg);

      //console.log(avg)
  };
  requestAnimationFrame( calcFPS );
});
