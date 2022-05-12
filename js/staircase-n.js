"use strict";
console.log("hello from stairs");


function staircase(n) {
    for (let i = 0; i < n; i++) {
        let a = "1".repeat(n-1-i);
        let b= "#".repeat(i+1)
        console.log(a.concat(b));
    }
}



console.log(staircase(3));