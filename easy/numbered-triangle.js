// Numbered Triangle - Dcoder Algo Yo Easy
// author evg1n

/*
Problem statement
=================
You need to print this pattern upto N.
For N = 4,
1
1 2
1 2 3
1 2 3 4

Input
=====
A single positive integer N.

Output
======
Numbered Triangle upto N.
Do not leave trailing whitespaces at the end of each line.

Constraint
==========
1 ≤ N ≤ 9

Sample Input
============
3
Sample Output
=============
1
1 2
1 2 3
*/

// Solution:

// get custom input
process.stdin.resume();

process.stdin.setEncoding('utf8');
                          
process.stdin.on('data', userInput => {
// check if input is valid
    checkInput(userInput);
})

let triangleInput = undefined;

const pyramid = (rows) => {
    let str = new String;
// draw rows and trim whitespace
    for (let i = 1; i < rows + 1; i++){
        str = str + i + " ";
        let trimmed = str.trim();
        console.log(trimmed);
    }
}

// check if input is valid: is a number and 1<=N<=9
const checkInput = input => {
    
    if (!input){
        console.log('1');
    } else if (isNaN(input)) {
        console.log('2');
    } else if (input < 1 || input > 9) {
        console.log('3');
    } else {
        triangleInput = parseInt(input);
    }
    pyramid(triangleInput);
}
