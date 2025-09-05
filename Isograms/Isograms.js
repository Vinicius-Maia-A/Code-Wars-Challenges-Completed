/*

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

*/

function Isogram(str){
  
    isIsogram = true;

    str.toLowerCase()
    .split('')
    .forEach( (char, i, originalArary) => {
        if (!(originalArary.indexOf(char) == originalArary.lastIndexOf(char)))
                isIsogram = false; 
    });
    return isIsogram;
}

console.log(Isogram('Dermatoglyphics'));

//Solutions that I liked

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

function isIsogram(str){
  return !str.match(/([a-z]).*\1/i);
}
