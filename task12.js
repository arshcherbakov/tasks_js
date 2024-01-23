
/*
12. Переставить местами максимальный и минимальный элемент в массиве
Input:
[5, 7, 2, 9, 5, 6, 3, 1, 8]
Output:
[5, 7, 2, 1, 5, 6, 3, 9, 8]
*/

// Solution 1
const removeMaxMinElement = (array) => {
  const maxNumber = Math.max(...array);
  const minNumber = Math.min(...array);
  const indexMaxNumber = array.indexOf(maxNumber);
  const indexMinNumber = array.indexOf(minNumber);
  array[indexMaxNumber] = minNumber;
  array[indexMinNumber] = maxNumber;
  return array;
}

// Solution 2 если не важно последовательность других елемнт. в массиве 

const removeMaxMinElement = (array) => {
  array.sort((a, b) => a - b);
  const max = array[array.length - 1];
  const min = array[0];
  array[array.length - 1] = min;
  array[0] = max;
  return array;
}


console.log(removeMaxMinElement([5, 7, 2, 9, 5, 6, 3, 1, 8]));
