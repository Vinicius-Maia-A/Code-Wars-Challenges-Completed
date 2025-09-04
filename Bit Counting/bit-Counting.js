function countBits(n) {
  let amountOfOnes = 0;
  let binary = n.toString(2);
  for(number of binary)
      if (number === '1') 
          amountOfOnes++;
    return amountOfOnes;
}

//Solutions that I liked

//1
countBits = n => n.toString(2).split('0').join('').length;

//2
var countBits = function(n) {
  return n.toString(2).replace(/0/g,'').length;
};