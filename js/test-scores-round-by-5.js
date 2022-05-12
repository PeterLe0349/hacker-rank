"use strict";
console.log("hello from test 5");

// ROUNDING UP at 5 for grades
function gradingStudents(grades) {
    // Write your code here
    for(let i= 0; i < grades.length; i++){
        if(grades[i] < 38){
            continue;
        } else if( grades[i] == 100){
            continue;
        } else {
            let roundedUp = Math.ceil(grades[i]/5) * 5;
            if( (roundedUp - grades[i]) < 3   ){
                grades[i] = roundedUp;
            }else {
                continue;
            }
        }
return grades;
    }

}