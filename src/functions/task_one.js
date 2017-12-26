/*
	- Create a function that will take any number of arguments and return their sum.
	- Make this function be able to take array as argument.
*/

import React from 'react';

function argsSum(...args) {
	let sum = 0;

	if (args[0] instanceof Array) {
		for (let i = 0, n = args[0].length; i < n; i++) {
			sum += args[0][i];
		}
	} else {
		for (let k = 0, n = args.length; k < n; k++) {
			sum += args[k];
		}
	}

	return sum;
}

const FuncTaskOne = () => (
	<div>
		<div className="task-info">Arguments are 4, 5, 7, 12, 4</div>
		<button onClick={() => { console.log(argsSum(4, 5, 7, 12, 4)); }}>Run</button>
		<div className="task-info">Argument is an array of numbers [4, 5, 7, 12, 4]</div>
		<button onClick={() => { console.log(argsSum([4, 5, 7, 12, 4])); }}>Run</button>
	</div>
);

export default FuncTaskOne;
