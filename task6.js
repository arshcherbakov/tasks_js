/*
  6. Сгруппировать объекты заказов по имени
Input:
  [
     {name: 'test', price: 200},
     {name: 'test1', price: 300},
     {name: 'test', price: 100},
     {name: 'test', price: 600}
  ]
Output:
  [
     {name: 'test', price: 900},
     {name: 'test1', price: 300}
  ]

*/

const groupObject = (arrayObjects) => {
  const groupArray = [];
  let flag = false;
  for (let obj of arrayObjects) {
    for (let groupObj of groupArray) {
      if (groupObj.name === obj.name) {
        groupObj.price += obj.price;
        flag = true;
        break;
      }
    }
    if (!flag) {
      groupArray.push(obj);
      flag = false;
    }
  }
  return groupArray;
}


console.log(groupObject([
  { name: 'test', price: 200 },
  { name: 'test1', price: 300 },
  { name: 'test', price: 100 },
  { name: 'test', price: 600 }
]));