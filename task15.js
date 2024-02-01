/* 
15. Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее. 
Функция параметром принимает длину массива.
Input:
7

Output:
[
  x,
  xx,
  xxx,
  xxxx,
  xxxxx,
  xxxxxx,
  xxxxxxx
]

*/

const fillingArray = (lengthArray) => {
  const array = [];
  let char = '';

  for (let i = 0; i < lengthArray; i++) {
    array.push(char += 'x');
  }
  
  return array;
}

console.log(fillingArray(7));
