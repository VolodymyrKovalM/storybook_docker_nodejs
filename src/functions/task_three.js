/*
	- Create a function called celsiusToFahrenheit:
	- Store a celsius temperature into a variable.
	- Convert it to fahrenheit and output "NN°C is NN°F".

	Create a function called fahrenheitToCelsius:
	- Now store a fahrenheit temperature into a variable.
	- Convert it to celsius and output "NN°F is NN°C."
*/

import React from 'react';

function celsiusToFahrenheit(cel) {
	const fahrenheits = Math.round(cel * 1.8 + 32);
	return `${cel}&ordm;C is ${fahrenheits}&ordm;F`;
}

function fahrenheitToCelsius(f) {
	const celsius = Math.round((f - 32) / 1.8);
	return `${f}&ordm;F is ${celsius}&ordm;C`;
}

const FuncTaskThree = () => (
	<div>
		<div className="task-info">Convert celsius 22 to fahrenheit (must equal 72)</div>
		<button onClick={() => { console.log(celsiusToFahrenheit(22)); }}>Run</button>
		<div className="task-info">Convert fahrenheit 75 to celsius (must equal 24)</div>
		<button onClick={() => { console.log(fahrenheitToCelsius(75)); }}>Run</button>
	</div>
);

export default FuncTaskThree;
