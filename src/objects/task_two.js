/*
	- Create object Car with the method `drive` and the property `mileage`
	- Method `drive` accepts distance as a parameter and logs
	to console `The car has driven ${distance} miles`
	- Property `mileage` has a getter that returns total mileage after several calls of `drive`
	- Make several calls to `drive` and output total mileage
*/

import React from 'react';

const ObjTaskTwo = () => {
	const Car = {
		$mileage: 0,
		drive(distance) {
			this.$mileage += distance;
			console.log(`The car has driven ${distance} miles`);
		},

		get mileage() {
			return this.$mileage;
		},
	};


	return (
		<div>
			<button onClick={() => { Car.drive(5); }}>Drive 5 miles</button>
			<button onClick={() => { console.log(Car.mileage); }}>Get total mileage</button>
		</div>
	);
};

export default ObjTaskTwo;
