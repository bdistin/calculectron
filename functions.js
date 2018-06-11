/* eslint-disable no-undef, no-unused-vars, id-length, no-inline-comments, func-names */

// Add the value for the clicked button to the calcArea text input
function num(id) {
	var calcArea = document.getElementById('calcArea');
	calcArea.value += id;
}

// Evalutates input from the calcArea text input, and displays it
function calc() {
	var input = document.getElementById('calcArea').value;
	document.getElementById('calcArea').value = eval(input);
}

// Resets the calcArea text input to a contentless state
function reset() {
	document.getElementById('calcArea').value = '';
}

// On keyDownEvent, get the value, and add it to the calcArea text input
// Allows keys to be used even when the calcArea text input is not active
window.onkeydown = function (e) {
	var key = e.keyCode ? e.keyCode : e.which;
	var calcArea = document.getElementById('calcArea');
	var keyValue = String.fromCharCode(key);

	// Check for shift key alterations first
	if (e.shiftKey) {
		switch (key) {
			case 48:	// keyValue == )
				calcArea.value += ')';
				break;
			case 56:	// keyValue == *
				calcArea.value += '*';
				break;
			case 57:	// keyValue == (
				calcArea.value += '(';
				break;
			case 187:	// keyValue == +
				calcArea.value += '+';
				break;
		}
	}

	// Bind keyEvents for all Calc feature needs
	switch (key) {
		case 13:	// keyValue == Enter
			calc();
			break;
		case 48:	// keyValue == 0
			calcArea.value += keyValue;
			break;
		case 49:	// keyValue == 1
			calcArea.value += keyValue;
			break;
		case 50:	// keyValue == 2
			calcArea.value += keyValue;
			break;
		case 51:	// keyValue == 3
			calcArea.value += keyValue;
			break;
		case 52:	// keyValue == 4
			calcArea.value += keyValue;
			break;
		case 53:	// keyValye == 5
			calcArea.value += keyValue;
			break;
		case 54:	// keyValye == 6
			calcArea.value += keyValue;
			break;
		case 55:	// keyValue == 7
			calcArea.value += keyValue;
			break;
		case 56:	// keyValue == 8
			calcArea.value += keyValue;
			break;
		case 57:	// keyValue == 9
			calcArea.value += keyValue;
			break;
		case 106:	// keyValue == *
			calcArea.value += keyValue;
			break;
		case 189:	// keyValue == -
			calcArea.value += '-';
			break;
	}
};
