/*
14. Реализуйте функцию, котора параметром принимает строку. Выведите сформированный объект из параметров строки браузера.
Input:
'https://underscorejs.org?a=4&b=8'
Output:
{a: 4, b: 8}

Input:
'https://underscorejs.org?id=123&limit=5&offset=0'
Output:
{id: 123, limit: 5, offset: 0}
*/

const urlParser = (url) => {
  const urlObj = new URL(url);
  let obj ={};
  for(let [name, value] of urlObj.searchParams) {
    obj[name] = value;
  }
  return obj;
}

console.log(urlParser('https://underscorejs.org?a=4&b=8'));
console.log(urlParser('https://underscorejs.org?id=123&limit=5&offset=0'));