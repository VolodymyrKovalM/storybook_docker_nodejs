/*
	Напишите функцию с двумя аргументами.
	Если сумма этих чисел от 11 до 19, то выведите в консоль результат.
	Если нет, то выведите “Result is not in range between 11 and 19”.
*/

import React from 'react';

function quizFive(a, b) {
	const sum = a + b;

	if (sum >= 11 && sum <= 19) {
		console.log(sum);
	} else {
		console.log('Result is not in range between 11 and 19');
	}
}

const BasicsTaskFive = () => (
	<div>
		<div className="task-info">Arguments are 5 and 7</div>
		<button onClick={() => { quizFive(5, 7); }}>Check numbers</button>
		<div className="task-info">Arguments are 15 and 17</div>
		<button onClick={() => { quizFive(15, 17); }}>Check numbers</button>
	</div>
);

export default BasicsTaskFive;
