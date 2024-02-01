/*
10. Реализуйте функцию, которая параметром принимает строку вида '__|----|_|-|____|--'. Где '_' - это 0, а '-' - это 1. 
Нужно вернуть строку вида '00111101000011', где символы заменены на их обозначение. Длина строки может быть любой. 
Повторение одного символа тоже может быть различное количество раз.
Input:
'__|----|_|-|____|--'
Output:
'00111101000011'
Input:
'--|_|-|___|--'
Output:
'110100011'

*/

const binarySequenceNumbers = (str) => {
  let binaryString = '';
  for (let char of str) {
    if ('|' !== char) {
      '-' === char ? binaryString += '1' : binaryString += '0';
    }
  }

  return binaryString;
}

console.log(binarySequenceNumbers('__|----|_|-|____|--'));
console.log(binarySequenceNumbers('--|_|-|___|--'));