
var validate = function(answer1, answer2)
{
	console.log("submit", answer1, answer2);
	if(answer1.length < 7 || answer2.length < 7)
		return false;
	return true;

	
}