/*
2. Дана строка. Вывести первые три символа и последние три символа, если длина строки больше 5. Иначе вывести первый символ столько раз, какова длина строки.
Input:
'test education part 2'
Output:
'test 2'
Input:
'text'
Output:
'tttt'

*/

const outputCharString = (str) => {
  const length_str = str.length;
  let new_str = '';
  
  if (length_str > 5) {
    return str.slice(0, 3) + str.slice(-3);
  }

  for (let i = 0; i < length_str; i++) {
    new_str += str[0];
  }

  return new_str;
}

console.log(outputCharString('test education part 2'));
console.log(outputCharString('text'));
