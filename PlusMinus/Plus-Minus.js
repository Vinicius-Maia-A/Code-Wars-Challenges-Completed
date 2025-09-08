/*
Given an array of integers, calculate the ratios of its elements that are positive, negatice, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.
*/

function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zeros = 0

    arr.forEach((n) => {
        if(n > 0) positive++;
        else if(n < 0) negative++;
        else zeros++;
    });

    console.log((positive/arr.length).toFixed(6));
    console.log((negative/arr.length).toFixed(6));
    console.log((zeros/arr.length).toFixed(6));
}

console.log(plusMinus([1,1,1,0,-1,-1,0]))