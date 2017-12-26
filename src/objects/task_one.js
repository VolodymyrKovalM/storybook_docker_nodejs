/*
	- Напишите функцию compareObjects, которая принимает 2 объекта
	и название числового свойства, по которому нужно выполнить
	сравнение объектов, и выводит в консоль свойство name того объекта,
	у которого значение переданного свойства больше.
	- Создайте два объекта с помощью литерала
	- Вызовите написанную функцию и передайте два созданных объекта и свойство для сравнения
*/

import React from 'react';

const obj1 = {
	name: 'John',
	age: 25,
};

const obj2 = {
	name: 'Marry',
	age: 18,
};

function compareObjects(objOne, objTwo, propName) {
	return objOne[propName] > objTwo[propName] ? objOne.name : objTwo.name;
}

const ObjTaskOne = () => (
	<div>
		<div className="task-info">Compare two objects {JSON.stringify(obj1)} and {JSON.stringify(obj2)}</div>
		<div className="task-info">Output name property of object, in which property age is greater</div>
		<button onClick={() => { console.log(compareObjects(obj1, obj2, 'age')); }}>Compare</button>
	</div>
);

export default ObjTaskOne;
