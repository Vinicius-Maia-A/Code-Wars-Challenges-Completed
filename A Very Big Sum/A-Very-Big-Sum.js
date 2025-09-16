/*
In this challenge, you need to calculate and print the sum of elements in an array, considering that some integers may be very large.

Function Description

Complete the aVeryBigSum function with the following parameter(s):

int ar[n]: an array of integers
Return

long: the sum of the array elements
Input Format

The first line of the input consists of an integer n.
The next line contains n space-separated integers contained in the array.

Output Format

Return the integer sum of the elements in the array.

Constraints
1 <= n <= 10
0 <= ar[i] <= 10^10
*/

function aVeryBigSum(ar) {
    let sum = 0n;
    ar.forEach((num, idx, _) => sum += BigInt(ar[idx]));
    
    return sum;
}

console.log(aVeryBigSum([1000000001 ,1000000002, 1000000003, 1000000004, 1000000005]))