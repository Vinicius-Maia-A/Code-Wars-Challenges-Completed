/*
Staircase detail

This is a staircase of size n=4:
   #
  ##
 ###
####

Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Function Description

Complete the staircase function with the following parameter(s):

int n: an integer
Print

Print a staircase as described above. No value should be returned.
Note: The last line is not preceded by spaces. All lines are right-aligned.

Input Format

A single integer, , denoting the size of the staircase.

Constraints

0 < n <= 100 .

*/

function staircase (n)
{
    for(let i = 0; i < n; i++)
    {
        console.log('*'.padStart(n - i,' ') + '*'.repeat(i));
    }
}

staircase(6);
// console.log('*'.repeat(5));