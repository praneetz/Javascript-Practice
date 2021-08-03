let str="Praneet Negi"
console.log(str.length);

// includes=The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate. 
console.log(str.includes("ra"))

// endsWith=The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate. 
console.log(str.endsWith("Negi"));

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
console.log(paragraph.indexOf("o"));
console.log(paragraph.indexOf("o",13));


// lastIndexOf=he lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found. 
console.log(paragraph.lastIndexOf("o"));

// substring=The substring() method returns the part of the string between the start and end indexes, or to the end of the string. 
console.log(str.substring(1, 3));

// repeat= The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together. 

const chorus = 'Because I\'m happy. ';
// console.log(chorus.repeat(10))

// replace=The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced. 
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// console.log(p.replace('dog', 'monkey'));

// replaceAll=The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. 
// console.log(p.replaceAll("lazy","fast"));
