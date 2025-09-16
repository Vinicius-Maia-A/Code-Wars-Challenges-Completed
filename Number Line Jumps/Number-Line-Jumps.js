//Explanation in images

function kangaroo(x1, v1, x2, v2) {
    
    // if the kangaroo that started behind is slower than the one that started ahead it is impossible
    if(x1 < x2 && v2 >= v1 ||x2 < x1 && v1 >= v2) return 'NO';
    
    // if the kangaroos started at the same position and one is faster than the other it is impossible
    else if(x1 === x2 && v1 !== v2) return 'NO';
    
    // if the kangaroos started at different positions and have the same speed it is impossible
    else if(x1 !== x2 && v1 === v2) return 'NO';
    
    //ifs above could be copalsed in only 1 big if but it would be less readable
    
    let faster;
    let slower;
    
    if (v1 > v2)
    {
        faster = [x1,v1];
        slower = [x2,v2];
    } else 
    {
        slower = [x1,v1];
        faster = [x2,v2];
    }
    
    while(faster[0] < slower[0])
    {
        faster[0] += faster[1];
        slower[0] += slower[1];
        if(faster[0] === slower[0]) return 'YES';
    }
    return 'NO';
}   