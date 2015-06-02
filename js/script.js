var form = document.getElementById("quizForm");
form.addEventListener("submit", submitAnswers);

function submitAnswers(){
	var total = 5;
	var score = 0;
	var answers = ["b","a","d","b","d"];
	
	for (i = 1; i <=total; i++) {
	    if(document.forms["quizForm"]["q" + i].value == ""){
	        alert("You missed question " + i);
	        return false;
	    } else if(document.forms["quizForm"]["q" + i].value == answers[i-1]) {
	    	score++;
		}
	}
	
	//Display Results
	var results = document.getElementById('results');
	results.innerHTML = '<h3>You Scored <span>' + score + '</span> out of <span>' + total + '</span></h3>';
	parent.scrollTo(0, 0);
	return false;
}



//eval('var q' + i + '= document.forms["quizForm"]["q" + i].value;');