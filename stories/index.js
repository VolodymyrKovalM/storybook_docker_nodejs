/* eslint-disable import/no-extraneous-dependencies, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import BasicsTaskOne from '../src/basics/task_one';
import BasicsTaskTwo from '../src/basics/task_two';
import BasicsTaskThree from '../src/basics/task_three';
import BasicsTaskFour from '../src/basics/task_four';
import BasicsTaskFive from '../src/basics/task_five';
import BasicsTaskSix from '../src/basics/task_six';
import BasicsTaskSeven from '../src/basics/task_seven';

import FuncTaskOne from '../src/functions/task_one';
import FuncTaskTwo from '../src/functions/task_two';
import FuncTaskThree from '../src/functions/task_three';
import FuncTaskFour from '../src/functions/task_four';
import FuncTaskFive from '../src/functions/task_five';

import ObjTaskOne from '../src/objects/task_one';
import ObjTaskTwo from '../src/objects/task_two';
import ObjTaskThree from '../src/objects/task_three';
import ObjTaskFour from '../src/objects/task_four';
import ObjTaskFive from '../src/objects/task_five';
import ObjTaskSix from '../src/objects/task_six';
import ObjTaskSeven from '../src/objects/task_seven';
import ObjTaskEight from '../src/objects/task_eight';
import ObjTaskNine from '../src/objects/task_nine';

import App from '../src/http/src/components/App';

import './styles.scss';

storiesOf('Basics', module)
	.add(
		'Task one',
		withInfo(`
			Write a function with one argument. The argument should be a number between 0 and 24.
			If argument is a number between 8 and 21, output Hello into console.
			If argument is not a number, output It is not a number into console.
		`)(() => <BasicsTaskOne />),
	)
	.add(
		'Task two',
		withInfo(`
			Write a function, that accepts two arguments - array of numbers and boolean value.
			If boolean is true, output the greatest number into console, otherwise - the smallest.
		`)(() => <BasicsTaskTwo />),
	)
	.add(
		'Task three',
		withInfo(`
			Write a function, that accepts one argument.
			Checks if it is number and if so, outputs square of this number into console,
			if it can be divided into 2 without a remainder.
		`)(() => <BasicsTaskThree />),
	)
	.add(
		'Task four',
		withInfo(`
			Write a function with two arguments.
			If first is greater, output their subtraction.
			If second is greater, output their sum.
		`)(() => <BasicsTaskFour />),
	)
	.add(
		'Task five',
		withInfo(`
			Write a function with two arguments.
			If their sum is between 11 and 19, then output result.
			If not, output “Result is not in range between 11 and 19”.
		`)(() => <BasicsTaskFive />),
	)
	.add(
		'Task six',
		withInfo(`
			Write a function with two arguments.
			If one of them can be devided by another without a remainder
			output true, otherwise - false.
		`)(() => <BasicsTaskSix />),
	)
	.add(
		'Task seven',
		withInfo(`
			Output the array using different types of loops.
		`)(() => <BasicsTaskSeven />),
	);

storiesOf('Functions', module)
	.add(
		'Task one',
		withInfo(`
			- Create a function that will take any number of arguments and return their sum.
			- Make this function be able to take array as argument.
		`)(() => <FuncTaskOne />),
	)
	.add(
		'Task two',
		withInfo(`
			- Declare a private variable using IIFE.
			- Is there any other ways how to declare private variables in JavaScript ?
		`)(() => <FuncTaskTwo />),
	)
	.add(
		'Task three',
		withInfo(`
			- Create a function called celsiusToFahrenheit:
			- Store a celsius temperature into a variable.
			- Convert it to fahrenheit and output "NN°C is NN°F".

			Create a function called fahrenheitToCelsius:
			- Now store a fahrenheit temperature into a variable.
			- Convert it to celsius and output "NN°F is NN°C."
		`)(() => <FuncTaskThree />),
	)
	.add(
		'Task four',
		withInfo(`
			- Write a JavaScript function that accepts a string as a parameter
			and find the longest word within the string.
		`)(() => <FuncTaskFour />),
	)
	.add(
		'Task five',
		withInfo(`
			Write a function that can print entity details based on next model:

			{
				name: String,
				type: String,
				age: Number
			}
			Expected output: "%NAME%(%TYPE%) - %AGE%."

			Rewrite that function to use this instead of argument
			(use apply, call and bind to print the details of different entities).
		`)(() => <FuncTaskFive />),
	);

storiesOf('Objects', module)
	.add(
		'Task one',
		withInfo(`
			- Напишите функцию compareObjects, которая принимает 2 объекта
			и название числового свойства, по которому нужно выполнить
			сравнение объектов, и выводит в консоль свойство name того объекта,
			у которого значение переданного свойства больше.
			- Создайте два объекта с помощью литерала
			- Вызовите написанную функцию и передайте два созданных объекта и свойство для сравнения
		`)(() => <ObjTaskOne />),
	)
	.add(
		'Task two',
		withInfo(`
			- Create object Car with the method 'drive' and the property 'mileage'
			- Method 'drive' accepts distance as a parameter and logs
			to console 'The car has driven {distance} miles'
			- Property 'mileage' has a getter that returns total mileage after several calls of 'drive'
			- Make several calls to 'drive' and output total mileage
		`)(() => <ObjTaskTwo />),
	)
	.add(
		'Task three',
		withInfo(`
			- Modify method 'drive' to log mileage after 'distance' seconds
			- Implement container to collect callbacks to call when 'drive' is finished
			- Make several calls to 'drive' and output total mileage
		`)(() => <ObjTaskThree />),
	)
	.add(
		'Task four',
		withInfo(`
			- Create a mixin object that has the 'list' method which loops over 'props' object
			property and outputs all existing properties and their respective values,
			if a property doesn't exist on the current object, it outputs 'Property {name} doesn't exist'
			- Create two objects with 'props' property as an array of strings, where each string denotes
			a property on an object and other properties listed in the 'props' property
			- Mix in 'list' method to these objects and call it
		`)(() => <ObjTaskFour />),
	)
	.add(
		'Task five',
		withInfo(`
			- Create array of properties
			- Add all properties in the array to an object using computed property syntax
			- Loop through the properties and output their name and value
		`)(() => <ObjTaskFive />),
	)
	.add(
		'Task six',
		withInfo(`
			- Опишите конструктор объектов (класс) Calculator с двумя методами:
			add - принимает число и прибавляет его к предыдущему, getCurrentSum - принимает индекс
			и возвращает результирующее число на шаге указанном
			в индексе (если индекса нет, возвращает текущую сумму)
			- Создайте два экземпляра класса Calculator
			- Добавьте в первый объект числа 3,8,11 и во второй 5,12,17.
			- Выведите в консоль сумму:
					всех чисел всех объектов, убедитесь (56)
					сумму чисел всех объектов на втором шаге (28)
					для одного объекта сумму после третьего шага и общую результирующую сумму (должна совпадать)
		`)(() => <ObjTaskSix />),
	)
	.add(
		'Task seven',
		withInfo(`
			Modify solution for practical task 4 to share 'list' method through prototype
		`)(() => <ObjTaskSeven />),
	)
	.add(
		'Task eight',
		withInfo(`
			Create an object 'animal' with shared method 'run' that outputs
			'[name] is running', where [name] is placeholder for animal name

			Create a function constructor for Rabbit that when instantiated
			accepts the name of the animal and stores it on the instance

			Set 'animal' as a prototype for instances of the Rabbit

			Instantiate Rabbit instance and call 'run' method
		`)(() => <ObjTaskEight />),
	)
	.add(
		'Task nine',
		withInfo(`
			Modify task 8 to use classes instead of a function constructor
		`)(() => <ObjTaskNine />),
	);

storiesOf('Http', module)
	.add(
		'Star Wars App',
		withInfo(`
			Написать фронтенд приложение, которое будет общаться
			с бекендом https://swapi.co для выгрузки оттуда героев
			фильма StarWars и представления информации о них.
		`)(() => <App />),
	);
