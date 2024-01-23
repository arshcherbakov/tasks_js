/*
11. Дана строка. Определить, содержит ли строка только символы 'a', 'b', 'c' или нет.
Input:
'abcbacabcbcabcbaba'

Output:
true
Input:
'abcbacabcqbcabcbnaba'
Output:
false
*/

// Solution 1 
const includesCharsOnlyABC = (str) => {
  return str.match(/[^abc]/g) ? false : true;
}

// Solution 2
const includesCharsOnlyABC = (str) => {
  for (let char of str) {
    if (char === 'a' || char === 'b' || char === 'c') {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log(includesCharsOnlyABC('abcbacabcbcabcbaba'));
console.log(includesCharsOnlyABC('abcbacabcqbcabcbnaba'))
