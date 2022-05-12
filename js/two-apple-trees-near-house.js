"use strict";

console.log("hello from apple tree");

//check if apples drop near house
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let appCount = 0;
    let orCount = 0;
    for(let i=0; i < apples.length; i++){
        let dropPoint = apples[i] + a;
        if ( (dropPoint >= s) && (dropPoint <= t)){
            appCount++;
        }
    }
    console.log(orCount);
    for(let i=0; i < oranges.length; i++){
        let dropPoint = oranges[i] + b;
        if ( (dropPoint >= s) && (dropPoint <= t)){
            orCount++;
        }
    }
    console.log(orCount);


}