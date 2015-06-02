function submitAnswers(){
	var total = 5;
	var score = 0;
	
	//Get User Input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	
	//Validation 
	if(q1 == null || q1 == ' '){
		alert('You missed question 1');
		return false;
	}
	
}
