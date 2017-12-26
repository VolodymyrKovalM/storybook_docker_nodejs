/*
	Напишите функцию с двумя аргументами.
	Если первый больше второго, выведите в консоль их разницу.
	Если второе больше первого, сумму.
*/

import React from 'react';

function checkNumbers(a, b) {
	if (a > b) {
		console.log(a - b);
	} else {
		console.log(a + b);
	}
}

const BasicsTaskFour = () => (
	<div>
		<div className="task-info">Arguments are 2 and 5</div>
		<button onClick={() => { checkNumbers(2, 5); }}>Check numbers</button>
		<div className="task-info">Arguments are 5 and 2</div>
		<button onClick={() => { checkNumbers(5, 2); }}>Check numbers</button>
	</div>
);

export default BasicsTaskFour;
