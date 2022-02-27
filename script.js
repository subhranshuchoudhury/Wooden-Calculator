


function calculation(argument) {
	
	var n1 = parseInt(document.getElementById('num1').value);
	var n2 = parseInt(document.getElementById('num2').value);
	
	n1 = n1/100;
	n2 = n2/100;

	var resultcalc = (n1*n2*n2)/16;

	document.getElementById('result_display').innerHTML = "Result: " + resultcalc;

}