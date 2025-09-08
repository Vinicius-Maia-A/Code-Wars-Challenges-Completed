/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example: arr = [1,3,5,7,9]

The minimum sum is 1+3+5+7=16 and the maximum sum is 3+5+7+9 = 24. The function prints

16 24
Function Description

Complete the minimunSum function with the following parameter(s):

arr[5]: an array of  integers
Print

Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.No value should be returned.

Note For some languages, like C, C++, and Java, the sums may require that you use a long integer due to their size.

Input Format

A single line of five space-separated integers.

Constraints
*/

function miniMaxSum(arr) {
    // Write your code here
    sortedArr = arr.sort((a,b) => {return a - b});

    let minSum = 0;
    let maxSum = 0;

    for(let i = 0; i < 4; i++)
    {
        minSum += sortedArr[i];
        maxSum += sortedArr[sortedArr.length - i - 1];
    }

    return `${minSum} ${maxSum}`;
}

function miniMaxSum(arr) {
    let minValue = arr[0];
    let maxValue = arr[0];
    let totalSum = arr.reduce((ac, cv) => {
        if(cv < minValue) minValue = cv;
        if(cv > maxValue) maxValue = cv;
        return ac + cv;
    }, 0);

    return `${totalSum - maxValue} ${totalSum - minValue}`;
}

console.log(miniMaxSum([1,2,3,4,5]));