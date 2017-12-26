/*
	Напишите функцию, которая принимает массив и булево значение в качестве аргументов.
	Если булево значение true, выведите в консоль наибольшее число, если false наименьшее.
*/

import React from 'react';

const a = [12, 15, 4, 9, 45, 27];

function checkArray(arr, b) {
	if (b) {
		const max = Math.max(...a);
		console.log(max);
	} else {
		const min = Math.min(...a);
		console.log(min);
	}
}

const BasicsTaskTwo = () => (
	<div>
		<div className="task-info">Array is: [12, 15, 4, 9, 45, 27]</div>
		<button onClick={() => { checkArray(a, true); }}>The greatest</button>
		<button onClick={() => { checkArray(a, false); }}>The smallest</button>
	</div>
);

export default BasicsTaskTwo;
