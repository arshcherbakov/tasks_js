/*
9. Вернуть массив тех значений, которые есть и в первом и во втором
Input:
([5, 2, 7, 3, 6, 8, 2, 9, 1], [4, 2, 9, 4, 5, 4])
Output:
[2, 9, 5]
*/

const repeatValueArray = (arrayA, arrayB) => {
  const repeatValArr = [];
  
  for (let element of arrayA) {
    if (arrayB.includes(element)) {
      repeatValArr.push(element);
    }
  }
  
  return Array.from(new Set(repeatValArr));
}

console.log(repeatValueArray([5, 2, 7, 3, 6, 8, 2, 9, 1], [4, 2, 9, 4, 5, 4]));
console.log(repeatValueArray([4, 2, 9, 4, 5, 4], [5, 2, 7, 3, 6, 8, 2, 9, 1]));
