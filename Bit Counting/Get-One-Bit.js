/*
    Function that receiver a number and returns an array with the first number being the abount of ones of the binary version of the given number and the positions of the ones.
*/

function getOneBits(n) {    
    let binary =  n.toString(2);
    
    let amountOfOnes = binary.split('').filter((ch) => ch !== '0').length;
    
    let resArray = [];
    
    binary.replace(/^0+|0+$/g, '').split('').forEach((ch, idx, _) => {

        if (ch !== '0') resArray.push(idx + 1)
        });
        
    return [amountOfOnes, ...resArray];
}

console.log(getOneBits(10))