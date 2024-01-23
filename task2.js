/*
2. Дана строка. Вывести первые три символа и последние три символа, если длина строки больше 5. Иначе вывести первый символ столько раз, какова длина строки.
Input:
'test education part 2'
Output:
'test 2'
Input:
'text'
Output:
'tttt'

*/

const inputCharString = (str) => {
	const length_str = str.length;

	if (length_str > 5) {
		return str[0] + str[1] + str[2] + str[length_str - 3] + str[length_str - 2] + str[length_str - 1];
	} else {
		let new_str = '';
		for (let i = 0; i < length_str; i++) {
			new_str += str[0];
		}
		return new_str;
	}
}

console.log(inputCharString('test education part 2'));

console.log(inputCharString('text'));