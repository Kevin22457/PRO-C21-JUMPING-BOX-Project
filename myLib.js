function istouching(object1,object2){
    if (abs(object1.x-object2.x)<(object1.width + object2.width)/2 &&
       abs(object1.y-object2.y)<(object1.height + object2.height)/2){
       return true;
    }
    else {
      return false;
    } 
  }
  
  
  function bounceoff(object1,object2){
    if (abs(object1.x-object2.x)<(object1.width + object2.width)/2 &&
        abs(object1.y-object2.y)<(object1.height + object2.height)/2){
        object1.velocityX = object1.velocityX * (-1);
        object2.velocityX = object2.velocityX * (-1);
    }
  }