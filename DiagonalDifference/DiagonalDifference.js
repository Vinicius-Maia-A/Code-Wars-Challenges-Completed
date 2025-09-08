function diagonalDifference(arr) {
    let leftRightDiag = 0;
    let rightLeftDiag = 0;

    for (let i in arr)
    {
        leftRightDiag += arr[i][i];
        rightLeftDiag += arr[arr.length - 1 - i][i];

        console.log(`op diag iteration:element[${arr.length - 1 - i}][${i}]`)
    }
    return Math.sqrt(Math.pow(leftRightDiag - rightLeftDiag,2));
}

console.log(diagonalDifference([[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]]));