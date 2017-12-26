/*
	Напишите функцию, которая принимает один аргумент.
	Проверяет число ли это и выводит в консоль данное число в квадрате,
	если его можно поделить на 2 без остатка.
*/

import React from 'react';

const n1 = 4;
const n2 = 9;
const s = 'str';

function sqrtNumber(num) {
	if (typeof num !== 'number') {
		throw new Error('It is not a number');
	}

	if (num % 2 === 0) {
		console.log(Math.sqrt(num));
	}
}

const BasicsTaskThree = () => (
	<div>
		<button onClick={() => { sqrtNumber(n1); }}>Argument is 4</button>
		<button onClick={() => { sqrtNumber(n2); }}>Argument is 9</button>
		<button onClick={() => { sqrtNumber(s); }}>Argument is a string - str</button>
	</div>
);

export default BasicsTaskThree;
