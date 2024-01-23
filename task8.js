/*  
8. Отсортировать коллекцию по конкретному свойству объекта и переданным параметром (asc, desc). 
Если параметр (asc, desc) не передан, по умолчанию сортировка asc.

Input:
const arr = [
    {name: 'test', age: 34, country: 'RF'},
    {name: 'test2', age: 12, country: 'RF'},
    {name: 'test1', age: 54, country: 'RF'}
  ]
func (arr, 'age', asc);
Output:
[
   {name: 'test2', age: 12, country: 'RF'},
   {name: 'test', age: 34, country: 'RF'},
   {name: 'test1', age: 54, country: 'RF'}
]
Где:
asc - сортировка по возрастанию
desc -  сортировка по убыванию

*/ 

const sortArray = (arr, propertyObj, direction='asc') => {
  return direction === 'asc' ? arr.sort((a, b) => a[propertyObj] - b[propertyObj]) : arr.sort((a, b) => b[propertyObj] - a[propertyObj]);
}

const arr = [
  {name: 'test', age: 34, country: 'RF'},
  {name: 'test2', age: 12, country: 'RF'},
  {name: 'test1', age: 54, country: 'RF'}
];
const asc = 'asc';
const desc = 'desc';
console.log(sortArray(arr, 'age', asc));