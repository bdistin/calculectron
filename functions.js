/* eslint-disable no-undef, no-unused-vars, id-length, no-inline-comments, func-names */
const eshiftValues = {
	48: ')',
	56: '*',
	57: '(',
	187: '+'
};

// Add the value for the clicked button to the calcArea text input
function num(id) {
	const calcArea = document.getElementById('calcArea');
	calcArea.value += id;
}

// Evalutates input from the calcArea text input, and displays it
function calc() {
	const input = document.getElementById('calcArea').value;
	document.getElementById('calcArea').value = eval(input);
}

// Resets the calcArea text input to a contentless state
function reset() {
	document.getElementById('calcArea').value = '';
}

// On keyDownEvent, get the value, and add it to the calcArea text input
// Allows keys to be used even when the calcArea text input is not active
window.onkeydown = function (e) {
	const key = e.keyCode ? e.keyCode : e.which;
	const calcArea = document.getElementById('calcArea');
	const keyValue = String.fromCharCode(key);

	// Check for shift key alterations first
	if (e.shiftKey) calcArea.value += eshiftValues[key] || '';
	else if (key === 13) calc();
	else if ((key >= 48 && key <= 57) || key === 106) calcArea.value += keyValue;
	else if (key === 189) calcArea.value += '-';
};
