// Special Array - Dcoder Algo Yo Easy
// author evg1n

/*
Problem statement
=================
Natural numbers are the set of positive integers, which ranges from 1 to infinity excluding fractional part. Natural numbers are whole numbers excluding zero. Zero is the only whole number which is not a natural number. An array is special if all the elements are natural numbers. Find whether the given array is special or not.

Input
=====
The first line of input contains a single integer N denoting the array size.
The second line of input contains N-space separated integers denoting the array.

Output
======
Print "Yes" if the array is special else print "No".

Constraint
==========
1<=N<=100.
0<=Arrays elements<=100.

Sample Input
============
4
0 1 2 3

Sample Output
=============
No
*/

// Solution:

// get custom input
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => passInput(data));

// pass input
const passInput = (data) => {
// divide array into two seperate lines
    let arrayLength = data.split("\n")[0];
// parse integer from elements of array
    let array = data.split("\n")[1].split(" ").map(x => parseInt(x));
// check if array length is correct
    if (array.length != arrayLength || arrayLength < 1 || arrayLength > 100) {
        console.log("error")
    } else{
        special(array);
    }
}

// check if array is special or not
const special = (inputArray) => {
    let message = "";
    let regularArray = inputArray.filter(check);
    
    if (regularArray.length > 0){
        message = "No";
    } else {
        message = "Yes";
    }
    console.log(message);
}

//check if array elements meet requirements

const check = (unit) => {
    if (unit < 0 || unit > 100) {
        throw Error;
    } else if(unit < 1){
        return true
    }
}

