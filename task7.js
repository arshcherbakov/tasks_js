/*
7. Отфильтровать коллекцию, где у свойства есть хоть какое-то значение
Input:
  [
     {name: 'test', age: 34, country: 'RF'},
     {name: '', age: null, country: ''},
     {name: 'test1', age: null, country: ''},
     {name: '', age: 12, country: ''},
     {name: '', age: null, country: 'RF'}
  ]
Output:
  [
     {name: 'test', age: 34, country: 'RF'},
     {name: 'test1', age: null, country: ''},
     {name: '', age: 12, country: ''},
     {name: '', age: null, country: 'RF'}
  ]

*/

const filterPropertyObj = (arrayObjects) => {
  const filterArray = [];
  for (let obj of arrayObjects) {
    if (Boolean(obj.name) || Boolean(obj.age) || Boolean(obj.country)) {
      filterArray.push(obj);
    }
  }
  return filterArray;
}

console.log(filterPropertyObj([
  { name: 'test', age: 34, country: 'RF' },
  { name: '', age: null, country: '' },
  { name: 'test1', age: null, country: '' },
  { name: '', age: 12, country: '' },
  { name: '', age: null, country: 'RF' }
]));