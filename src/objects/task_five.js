/*
	- Create array of properties
	- Add all properties in the array to an object using computed property syntax
	- Loop through the properties and output their name and value
*/

import React from 'react';

function run() {
	const props = ['name', 'type', 'age'];

	const obj = {};

	for (let i = 0, n = props.length; i < n; i++) {
		obj[props[i]] = props[i] + 1;
	}

	for (let prop in obj) {
		console.log(prop, obj[prop]);
	}
}

const ObjTaskFive = () => (
	<div>
		<div className="task-info"> - Create array of properties</div>
		<div className="task-info"> - Add all properties in the array to an object using computed property syntax</div>
		<div className="task-info"> - Loop through the properties and output their name and value</div>
		<button onClick={run}>Run</button>
	</div>
);

export default ObjTaskFive;
