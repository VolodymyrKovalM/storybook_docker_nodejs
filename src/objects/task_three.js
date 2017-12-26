/*
	- Modify method `drive` to log mileage after `distance` seconds
	- Implement container to collect callbacks to call when `drive` is finished
	- Make several calls to `drive` and output total mileage
*/

import React from 'react';

const ObjTaskThree = () => {
	const Car = {
		$mileage: 0,
		drive(distance, callback) {
			this.$mileage += distance;

			setTimeout(() => {
				callback(distance);
			}, distance * 1000);
		},

		get mileage() {
			return this.$mileage;
		},
	};

	function onDriveFinished(distance) {
		console.log(`The car has driven ${distance} miles`);
	}

	return (
		<div>
			<button onClick={() => { Car.drive(5, onDriveFinished); }}>Drive 5 miles</button>
			<button onClick={() => { console.log(Car.mileage); }}>Get total mileage</button>
		</div>
	);
};

export default ObjTaskThree;
