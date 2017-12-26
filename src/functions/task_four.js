/*
	- Write a JavaScript function that accepts a string as a parameter
	and find the longest word within the string.
*/

import React from 'react';

const s = 'You can check strings against regular expressions with';

function findLongestWord(str) {
	const words = str.split(' ');

	const longest = words.reduce((longestWord, currentWord) => (
		currentWord.length > longestWord.length ? currentWord : longestWord
	));

	return longest;
}

const FuncTaskFour = () => (
	<div>
		<div className="task-info">Find the longest word in a string. For example string - You can check strings against regular expressions with</div>
		<button onClick={() => { console.log(findLongestWord(s)); }}>Find</button>
	</div>
);

export default FuncTaskFour;
