/*
	Modify task 8 to use classes instead of a function constructor
*/

/* eslint-disable no-useless-constructor */

import React from 'react';

function runTask() {
	class AnimalClass {
		constructor(name) {
			this.name = name;
		}

		run() {
			console.log(`${this.name} is running`);
		}
	}

	class RabbitClass extends AnimalClass {
		constructor(name) {
			super(name);
		}
	}

	const rClass = new RabbitClass('Rab');

	console.log(rClass);
	rClass.run();
}

const ObjTaskNine = () => (
	<button onClick={runTask}>Run</button>
);

export default ObjTaskNine;
