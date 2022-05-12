"use strict";
console.log("hello from kangaroo");

// SEE IF TWO Kangaroos will meet based on starting point and velocity
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let aPoint = x1+v1;
    let bPoint = x2+v2;
    if( (aPoint == bPoint) || (x1==x2)){
        return "YES";
    }
    if ( (aPoint - bPoint) > 0 ){
        if(v2 > v1){
            if((aPoint-bPoint)%(v2-v1) == 0){  //get the actual distance gained and see if it's divisible by remaining distance
                return "YES";
            }else{
                return "NO";
            }
        }else {
            return "NO";
        }
    } else {
        if(v1 > v2){
            if((aPoint-bPoint)%(v1-v2) == 0){
                return "YES";
            }else{
                return "NO";
            }
        }else {
            return "NO";
        }
    }

}