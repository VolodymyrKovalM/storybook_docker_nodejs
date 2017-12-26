/*
	Напишите функцию с двумя аргументами.
	Если один из них делится без остатка на другой. выведите true, если нет false.
*/

import React from 'react';

function quizSix(a, b) {
	const firstResult = a % b === 0;
	const secondResult = b % a === 0;

	if (firstResult || secondResult) {
		console.log(true);
	} else {
		console.log(false);
	}
}

const BasicsTaskSix = () => (
	<div>
		<div className="task-info">Arguments are 12 and 4</div>
		<button onClick={() => { quizSix(12, 4); }}>Check numbers</button>
		<div className="task-info">Arguments are 11 and 4</div>
		<button onClick={() => { quizSix(11, 4); }}>Check numbers</button>
	</div>
);

export default BasicsTaskSix;
