/*
5. Реализуйте функцию, которая принимает на вход массив, состоящий из массивов-пар и возвращает объект, полученный из этих пар. 
Если при конструировании объекта попадаются совпадающие ключи, то берётся значение из последнего массива-пары.
Input:
[['cat', 5], ['dog', 6], ['cat', 11]]
Output:
{ 'dog': 6, 'cat': 11 }
Input:
[['name', 'test'], ['age', 12], ['country', 'RF']]
Output:
{ 'name': 'test', 'age': 12, 'country': 'RF' }
*/

const convertArrayInObject = (array) => {
  let resultObj = {};

  for (let obj of array) {
    !resultObj[obj[0]] ? resultObj[obj[0]] = obj[1] : resultObj[obj[0]] = obj[1];
  }

  return resultObj;
}

console.log(convertArrayInObject([['cat', 5], ['dog', 6], ['cat', 11]]));

console.log(convertArrayInObject([['name', 'test'], ['age', 12], ['country', 'RF']]));
