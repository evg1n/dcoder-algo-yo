/ Archie And His Homework - Dcoder Algo Yo Easy
// author evg1n

/*
Problem statement
=================
John has created a text editor, which has lots of features but he forgot to add the conversion of Lowercase alphabet to an Uppercase Alphabet. He asks you for help to complete this task for him.

Input
=====
The first line of input consists of single integer T denoting the number of test cases.
Then in the following T lines, each line has a String s of lowercase alphabet.

Output
======
For each test case print the uppercase of given string.

Constraint
==========
1<=T<=100.
1<=String Length<=10^2.

Sample Input
============
2
dcoder
john

Sample Output
=============
DCODER
JOHN
*/

// get custom input
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => passInput(data));

//pass input
const passInput = (input) => {
    let lines = input.split("\n");
    
    check(lines);
}

// check if first line designates correct number of following lines
const check = (array) => {
   if ( array.length === (parseInt(array[0]) + 1) || !isNaN(parseInt(array[0]))){
       uppercase(array);
   } else {
       console.log("error")
   }
}

// convert array elements to uppercase and console log
const uppercase = (string) => { 
    for (let i = 1; i < string.length; i++) {
        console.log(string[i].toUpperCase());
    }
}
