/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
    
    let iteration = 0;
    
    for (let i = 0; i < arr.length; i++)
    {
        if(arr[iteration] === 0)
        {
            arr.splice(iteration, 1);
            arr.push(0);
        } else iteration++;
        
    }
    
    return arr;
}

console.log(moveZeros([ 9, 2, +0, 9, '0', 1, 0, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0]));

//Solutions that I liked

var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}

var moveZeros = function (arr) {
  return [
    ...(arr.filter(n => n !== 0)),
    ...(arr.filter(n => n === 0))
  ];
}