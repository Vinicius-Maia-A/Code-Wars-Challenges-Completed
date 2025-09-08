/*
You are in charge of the cake for a child's birthday. It will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Your task is to count how many candles are the tallest.

Example: candles = [4,4,1,3]


The tallest candles are 4 units high. There are 2 candles with this height, so the function should return 2.

Function Description

Complete the function birthdayCakeCandles with the following parameter(s):

int candles[n]: the candle heights
Returns

int: the number of candles that are tallest
Input Format

The first line contains a single integer,n , the size of candles[].
The second line contains n space-separated integers, where each integer i describes the height of candles[].
*/

function birthdayCakeCandles(candles) {

    let maxValue = candles[0];
    let res = 0;
    candles.forEach((n) => {
        if(n == maxValue) res ++;
        if(n > maxValue) 
        {
            maxValue = n;
            res = 1;
        }
    });

    return res;

    // return candles
    // .filter((n) => n == Math.max(...candles))
    // .length;
}

console.log(birthdayCakeCandles([1,5,3,2,6,6,6,6]));