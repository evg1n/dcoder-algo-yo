
// Archie And His Homework - Dcoder Algo Yo Easy
// author evg1n

/*
Problem statement
=================
Archie was given a homework by his teacher. He is given a fraction and he needs to write it in its reduced form. Archie is not good at Maths. Help Archie finish his homework.

Input
=====
2 integers separated by space denoting the numerator and denominator respectively.

Output
======
Print the reduced form of the fraction

Constraint
==========
1 ≤ N ≤ D ≤ 1000

Sample Input
============
20 40

Sample Output
=============
1 2
*/

// Solution:

// get custom input

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', userInput => {passInput(userInput)})

// find greatest common divisor, then calculate nominator and denominator
const reduce = (numerator,denominator) => {
    if (numerator >= 1 && numerator <= denominator && denominator <= 1000){
        var gcd = (a,b) => {
            return b ? gcd(b, a%b) : a;
        };
            
            gcd = gcd(numerator,denominator);
            return console.log(numerator/gcd, denominator/gcd);
        } else {
            return console.log('error');
        }
    }
// pass input to reduce function
const passInput = (data) => {
    let num = data.split(" ", 2).map(x => parseInt(x))[0];
    let denom = data.split(" ", 2).map(x => parseInt(x))[1];
    
    reduce(num, denom)
}
