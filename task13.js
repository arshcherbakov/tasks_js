/* 
13. Напишите функцию, которая преобразует массив вида let arr = [{name: 'width', value: 300}, {name: 'height', value: 100}]; 
в объект let obj = {width:300, height: 100}; Количество объектов в массиве неограниченно.
Input:
[{name: 'width', value: 300}, {name: 'height', value: 100}];
Output:
{width:300, height: 100}

*/

const convertArrayInObject = (array) => {
  let resultObj = {};
  for (let obj of array) {
    if (!resultObj[obj.name]) {
      resultObj[obj.name] = obj.value;
    }
  }
  return resultObj;
}

console.log(convertArrayInObject([{ name: 'width', value: 300 }, { name: 'height', value: 100 }]));
console.log(convertArrayInObject([{ name: 'width', value: 300 }, { name: 'height', value: 100 }, { name: 'height', value: 900 }, { name: 'long', value: 4698 }]));
