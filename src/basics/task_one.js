/*
	Напишите функцию с одним аргументом. Аргумент должен быть числом от 0 до 24.
	Если аргумент число от 8 до 21, выведите в консоль ‘Hello’.
	В другом случае выведите в консоль ‘It is not good time for that’.
	Если аргумент не число, выведите в консоль ‘It is not a number’.
*/

/* eslint-disable import/no-extraneous-dependencies, import/extensions */

import React from 'react';

function firstQuiz() {
	const hour = +prompt('Enter time') || 9;

	if (typeof hour !== 'number') {
		throw new Error('It is not a number');
	}

	if (hour < 0 || hour > 24) {
		throw new Error('Enter a number from 0 to 24');
	}

	if (hour > 8 && hour < 24) {
		console.log('Hello');
	} else {
		console.log('It is not good time for that');
	}
}

const BasicsTaskOne = () => (
	<button onClick={firstQuiz}>Enter time</button>
);

export default BasicsTaskOne;
