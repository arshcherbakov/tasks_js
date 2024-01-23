/*
3. Дана строка. Если она начинается на 'abc', то заменить их на 'www', иначе добавить в конец строки 'zzz'
Input:
'abctestabctext'
Output:
'wwwtestabctext'
Input:
'testabctext'
Output:
'testabctextzzz'
*/
// Solution 1
const changeStr = (str) => {
  return str.match(/^abc/) ? 'www' + str.slice(3) : str + 'zzz';
}


// Solution 2
const changeStr = (str) => {
  return str[0] + str[1] + str[2] === 'abc' ? 'www' + str.slice(3) : str + 'zzz';
}

console.log(changeStr('abctestabctext'));
console.log(changeStr('testabctext'));
