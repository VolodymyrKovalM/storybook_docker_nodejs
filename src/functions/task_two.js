/*
	- Declare a private variable using IIFE.
	- Is there any other ways how to declare private variables in JavaScript ?
*/

import React from 'react';

function privateVars() {
	(function declarePrivate() {
		const obj = {
			any: 'some',
		};

		console.log(obj);
	}());

	try {
		console.log(obj); // will be underfined
	} catch (err) {
		console.log(err);
	}

	/* Another way using closure */

	const f = (function f() {
		let count = 0;

		return function increment() {
			count += 1;
			console.log(count);
		};
	}());

	f(); // we can not access to variable count directly

	// or

	function Person() {
		const name = 'John';

		this.getName = function getName() {
			return name;
		};
	}

	const p = new Person();
	console.log(p.name); // we can't access this way, will log undefined
	console.log(p.getName()); // John
}

const FuncTaskTwo = () => (
	<button onClick={privateVars}>Run</button>
);

export default FuncTaskTwo;
