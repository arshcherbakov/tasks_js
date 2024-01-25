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

  const range = (array.length - 0) + 0;
  const randomIndex = Math.floor(Math.random() * range);
  
  return array[randomIndex];
}

console.log(randomNumberArray([4, 8, 2, 9, 4, 6, 5, 1, 7, 4]));
console.log(randomNumberArray([4, 8, 2, 9, 4, 6, 5, 1, 7, 4]));
