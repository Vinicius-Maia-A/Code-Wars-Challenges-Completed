const magicQuare = [[7,6,5],[7,2,8],[5,3,4]];
const mod = (num) => Math.sqrt(Math.pow(num,2));

function formingMagicSquare(s) {
    
    let totalValue = 0;
        
    //all possibilities;
    /*
        The matrix below contains all the 8 possiblities to form a magic square without the middle number, which is always going to be 5.
        
        visual representation of the matrix:
        
        [
            --first possibility
            [
                [...corners],[...sides]
            ],
            --second possibility
            [
                [...corners],[...sides]
            ],
            ...
            n possibility
            [
                [...corners],[...sides]
            ]
        ]
     */
    
    const allPossibilities =[
        [[8,6,2,4],[1,7,9,3]],
        [[8,4,2,6],[3,9,7,1]],
        [[2,6,8,4],[7,1,3,9]],
        [[2,4,8,6],[9,3,1,7]],
        [[6,2,4,8],[7,9,3,1]],
        [[6,8,4,2],[1,3,9,7]],
        [[4,2,6,8],[9,7,1,3]],
        [[4,8,6,2],[3,1,7,9]]];
    
    //the total value of the given matrix will never be more than 50 if the number's range is from 1 - 9.
    let auxCornerValue = 50; 
    
    for(let i = 0; i < 8; i++)
    {
        let sumOfCorners = 
            mod(s[0][0] - allPossibilities[i][0][0]) +  
            mod(s[0][2] - allPossibilities[i][0][1]) +
            mod(s[2][2] - allPossibilities[i][0][2]) +
            mod(s[2][0] - allPossibilities[i][0][3]);
            
        let sumOfSides = 
            mod(s[0][1] - allPossibilities[i][1][0]) +  
            mod(s[1][2] - allPossibilities[i][1][1]) +
            mod(s[2][1] - allPossibilities[i][1][2]) +
            mod(s[1][0] - allPossibilities[i][1][3]);
            
        
         if( sumOfCorners + sumOfSides < auxCornerValue) 
            {
                auxCornerValue = sumOfCorners + sumOfSides
            }   
    }
    
    totalValue = auxCornerValue;
    
    //verify 5 if there is a 5 in the middle, if not, puts it and add it to total
    if(s[1][1] !== 5)
    {
        totalValue += mod(s[1][1] - 5);
    }

    return totalValue;
}

console.log(formingMagicSquare(magicQuare))