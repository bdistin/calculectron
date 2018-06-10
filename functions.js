function num(id) {
	var calcArea = document.getElementById('calcArea')
	calcArea.value += id
}

function calc() {
	var input = document.getElementById('calcArea').value
	document.getElementById('calcArea').value = eval(input)
	
}

function reset() {
	document.getElementById('calcArea').value = ''
}

//TODO: Add keypress handlers for keyboarding values and operators.
window.addEventListener('keypress', keyHandler, false)

function keyHandler(e) {
	var keyPressed = e.keyCode
	if (keyPressed == 88 ) {
		alert('thing')
	}
}