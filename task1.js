/*
1. Отсортировать массив чисел по возрастанию или убыванию
Input:
[6, 43, -6, 3, 0, 5, 2, 7]
Output:
[-6, 0, 2, 3, 5, 6, 7, 43]
Input:
[6, 43, -6, 3, 0, 5, 2, 7]
Output:
[43, 7, 6, 5, 3, 2, 0, -6]
Пример использования:
const sortElements = (arr, direction) => {
  // ....
}
const elements = [6, 43, -6, 3, 0, 5, 2, 7];
const sortedArray = sortElements(elements, 'asc');
console.log(sortedArray);
// Выводит [-6, 0, 2, 3, 5, 6, 7, 43]
*/

const sortElements = (arr, direction) => {
  return direction === 'asc' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
}

const elements = [6, 43, -6, 3, 0, 5, 2, 7];
const sortedArray = sortElements(elements, 'asc');
console.log(sortedArray);

const elements1 = [6, 43, -6, 3, 0, 5, 2, 7];
const sortedArray1 = sortElements(elements, 'des');
console.log(sortedArray1);

