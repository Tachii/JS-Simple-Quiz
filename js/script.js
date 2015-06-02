function submitAnswers(){
	var total = 5;
	var score = 0;
	
	for (i = 1; i <=total; i++) {
	    if(document.forms["quizForm"]["q" + i].value == ""){
	        alert("You missed question " + i);
	        return false;
	    } else {
	    	eval('var q' + i + '= document.forms["quizForm"]["q" + i].value;');
		}
	}
}
