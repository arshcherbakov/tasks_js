/*
4. Возвращает рандомный элемент массива. Рандомный - случайный элемент массива
Input:
[4, 8, 2, 9, 4, 6, 5, 1, 7, 4]
Output:
9
Input:
[4, 8, 2, 9, 4, 6, 5, 1, 7, 4]
Output:
1
*/

const randomNumberArray = (array) => {
  return array[Math.floor(Math.random() * (array.length - 0) + 0)];
}

console.log(randomNumberArray([4, 8, 2, 9, 4, 6, 5, 1, 7, 4]));
console.log(randomNumberArray([4, 8, 2, 9, 4, 6, 5, 1, 7, 4]));
