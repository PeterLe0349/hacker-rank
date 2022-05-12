"use strict";
console.log("hello from time conversion ");

function timeConversion(s) {
    // Write your code here
    if (s.includes("AM")) {
        if (s.substring(0, 2) == "12") {
            return "00" + s.substring(2, s.length - 2);
        } else {
            return s.substring(0, s.length - 2);
        }
    } else {
        if (s.substring(0, 2) == "12") {
            return "12" + s.substring(2, s.length - 2);
        } else {
            let zuluNumber = parseInt(s.substring(0, 2)) + 12;
            return (zuluNumber + s.substring(2, s.length - 2));
        }

    }
}

// hh:mm:ssAM
console.log(timeConversion("11:32:45AM"));
console.log(timeConversion("11:32:45PM"));