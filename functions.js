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