/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */

var countStudents = function(students, sandwiches) {
    let hungry = 0;

    while(students.length) {
        if (students[0] === sandwiches[0]){
            students.shift();
            sandwiches.shift();
            hungry = 0;
        } else {
            students.push(students.shift());
            hungry++;

            if (hungry === students.length) break;
        }   
    }

    return students.length;
};