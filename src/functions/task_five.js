/*
	Write a function that can print entity details based on next model:

	{
		name: String,
		type: String,
		age: Number
	}
	Expected output: "%NAME%(%TYPE%) - %AGE%."

	Rewrite that function to use this instead of argument
	(use apply, call and bind to print the details of different entities).
*/

import React from 'react';

function run() {
	const j = {
		name: 'John',
		type: 'male',
		age: 25,
	};

	function printDetails(obj) {
		const { name, type, age } = obj;
		return `${name} (${type}) - ${age}`;
	}

	console.log(printDetails(j));

	/* USING this instead of argument */

	function printDetailsModified() {
		return `${this.name} (${this.type}) - ${this.age}`;
	}

	const cl = printDetailsModified.call(j);
	const apl = printDetailsModified.apply(j);
	const b = printDetailsModified.bind(j);

	console.log(`Using call: ${cl}`);
	console.log(`Using apply: ${apl}`);
	console.log(`Using bind: ${b()}`);
}

const FuncTaskFive = () => (
	<div>
		<div className="task-info">Find the longest word in a string. For example string - You can check strings against regular expressions with</div>
		<button onClick={run}>Run</button>
	</div>
);

export default FuncTaskFive;
