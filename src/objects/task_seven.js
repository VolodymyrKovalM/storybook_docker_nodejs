/*
	Modify solution for practical task 4 to share `list` method through prototype
*/

import React from 'react';

const mixin = {
	list() {
		const { props } = this;
		for (let i = 0, n = props.length; i < n; i++) {
			if (this[props[i]]) {
				console.log(props[i], this[props[i]]);
			} else {
				console.log(`Property ${props[i]} does not exist`);
			}
		}
	},
};

const obj1 = {
	props: ['name', 'surname', 'age', 'gender'],
	name: 'John',
	age: 25,
	gender: 'male',
};

const obj2 = {
	props: ['name', 'surname', 'age', 'gender'],
	name: 'Marry',
	surname: 'Pop',
	gender: 'Pop',
};

Object.setPrototypeOf(obj1, mixin);
Object.setPrototypeOf(obj2, mixin);

const ObjTaskSeven = () => (
	<div>
		<div className="task-info">Run list method on object 1</div>
		<button onClick={() => { obj1.list(); }}>Run</button>
		<div className="task-info">Run list method on object 2</div>
		<button onClick={() => { obj2.list(); }}>Run</button>
	</div>
);

export default ObjTaskSeven;
