$(document).ready(function() {

	$("#start").click(function() {
		$("#quizQuestions, #counter").show(1000);
		$("#info").hide();
		gamePlay();
	});

	// Function that controls gameplay (or quizplay?)
	var gamePlay = function(){
		
		//Quiz Question Object
		function quizQuestion(question, answerOne, answerTwo, answerThree) {
			this.question = question;
			this.answerOne = answerOne;
			this.answerTwo = answerTwo;
			this.answerThree = answerThree;
		}

		//Quiz Questions and Answers
		var questionOne = new quizQuestion(
			"Q1. What is the eggplant's latin name?", 
			"A. Solanum Melongena", 
			"B. Solanum Lycopersicum", 
			"C. Solanum Tuberosum");
		var questionTwo = new quizQuestion("How is blah blah blahhh?", 
			"ichi", 
			"ni", 
			"san");
		
		//Quiz Element Variables
		var questionEl = document.getElementById('question');
		var choice1 = document.getElementById('choice1');
		var choice2 = document.getElementById('choice2');
		var choice3 = document.getElementById('choice3');

		//Consequence Functions
		function correct() {
			alert("correct!");
			//var choice = document.querySelector("#" + event.target.id);
			//addClass(choice, "correct");
		}

		// Quiz // PERHAPS gamePlay FUNCTION STARTS HERE??
		questionEl.textContent = questionOne.question;
		choice1.textContent = questionOne.answerOne;
		choice2.textContent = questionOne.answerTwo;
		choice3.textContent = questionOne.answerThree;
		quizQuestion.correct = quizQuestion.answerOne;

		choice1.addEventListener("click", correct, false);
	};
});