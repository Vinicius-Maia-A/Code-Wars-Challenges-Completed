/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

function duplicateEncode(str){
    const obj = {};
    wordSplit = str.toLowerCase().split('');

    wordSplit.forEach(e => obj[e] = (obj[e] || 0) + 1);

    return wordSplit
    .map(ch => obj[ch] > 1 ? ')' : '(')
    .join('');
}

console.log(duplicateEncode('abacaxi jb'));


//Solutions that I liked

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (char, i, arrOriginal) {
      return arrOriginal.indexOf(char) == w.lastIndexOf(char) ? '(' : ')'
    })
    .join('');
}

function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}