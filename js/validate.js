
var validateAnswers = function(answer1, answer2)
{
	if(answer1.length < 7 || answer2.length < 7)
		return false;
	return true;

	
}

var setResponseMessage = function(isValid){
	if(isValid)
		document.getElementById("errorMsg").innerHTML = "valid"
	else
		document.getElementById("errorMsg").innerHTML = "invalid"
}

var submit = function()
{
	var answer1 = document.getElementById("tbAnswer1").value; 
	var answer2 = document.getElementById("tbAnswer2").value;
	
	var validAnswers = validateAnswers(answer1, answer2);
	setResponseMessage(validAnswers);
}

