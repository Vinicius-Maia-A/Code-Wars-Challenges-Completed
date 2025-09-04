/* In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.
Example

Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" */

// let string = 'Z';
// console.log(string.codePointAt(string));

// for (let i = 65; i < 65+26; i++)
// {
//     console.log(String.fromCharCode(i));
// }

alphabetPosition  = (text) => [...text
    .toUpperCase()
    .replace(/[^A-Z]/g, '')]
        
    .map( letter => letter.codePointAt(0) - 64)
    .join(' ');


//Solutions that I liked

let alphabetPosition = (text) => 
    text.toUpperCase()
    .replace(/[^A-Z]/g, '')
    .split('')
    .map(ch => ch.charCodeAt(0) - 64)
    .join(' ');
