//Explanation in images

const isInHouseArea = (houseInitialPos, houseFinalPos, treeLocation, distanceFromTree) =>
{
    return treeLocation + distanceFromTree <= houseFinalPos && treeLocation + distanceFromTree >= houseInitialPos;
}

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let numOfApplesInSamsHouse = 0;
    let numOfOrangesInSamsHouse = 0;
    
    apples.forEach((appleDistance) =>
    {
        if (isInHouseArea(s,t,a,appleDistance)) numOfApplesInSamsHouse++;
    });
    
    oranges.forEach((orangeDistance) =>
    {
        if (isInHouseArea(s,t,b,orangeDistance)) numOfOrangesInSamsHouse++;
    });
    
    console.log(numOfApplesInSamsHouse);
    console.log(numOfOrangesInSamsHouse);
}