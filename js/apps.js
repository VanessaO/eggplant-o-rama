$(document).ready(function() {

	$("#start").click(function() {
		$("#quizQuestions, #counter").show(1000);
		$("#info").hide();
		gamePlay();
	});
		
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
	var questionTwo = new quizQuestion(
		"Q2. Eggplant is the most rich in what nutrient?", 
		"A. Potassium", 
		"B. Fiber", 
		"C. Vitamin B3");
	var questionThree = new quizQuestion(
		"Q3. Eggplant was first cultivated in what country?", 
		"A. India", 
		"B. China", 
		"C. Turkey");
	var questionFour = new quizQuestion(
		"Q4. __ pounds of eggplant contains 2mg of nicotine.", 
		"A. 20", 
		"B. 7", 
		"C. 43");
	var questionFive = new quizQuestion(
		"Q5. Are eggplants fruits or vegetables?", 
		"A. Neither", 
		"B. Vegetables", 
		"C. Fruits");
	
	//Quiz Element Variables
	var questionEl = document.getElementById('question');
	var choice1 = document.getElementById('choice1');
	var choice2 = document.getElementById('choice2');
	var choice3 = document.getElementById('choice3');
	var i = 1;
	
	//Consequence Functions
	function correct(wrongOne, wrongTwo) {
		var choice = "#" + event.target.id;
		$(choice).addClass("correct");
		$(wrongOne).fadeOut(1000);
		$(wrongTwo).fadeOut(1000);
		document.getElementById("count").innerHTML = i;
		i++;
		//Play a ding!
		//$(wrongOne).remove();
		//$(wrongTwo).remove();
	}

	function incorrect(correct, wrongTwo) {
		//alert(event.target.id);
		var choice = "#" + event.target.id;
		$(choice).addClass("incorrect");
		$(correct).fadeOut(1000);
		$(wrongTwo).fadeOut(1000);

	}

	// Quiz // PERHAPS gamePlay FUNCTION STARTS HERE??
		var One = function(){
			questionEl.textContent = questionOne.question;
			choice1.textContent = questionOne.answerOne;
			choice2.textContent = questionOne.answerTwo;
			choice3.textContent = questionOne.answerThree;
			$('#choice1, #choice2, #choice3').click(function(){
				if(this.id == "choice1") {
					correct("#choice2", "#choice3");
				}
				else if (this.id == "choice2") {
					incorrect("#choice1", "#choice3");
				}
				else if (this.id == "choice3") {
					incorrect("#choice1","#choice2");
				}
				else{alert("ok");
				}
			});
		}

		var Two = function(){
			questionEl.textContent = questionTwo.question;
			choice1.textContent = questionTwo.answerOne;
			choice2.textContent = questionTwo.answerTwo;
			choice3.textContent = questionTwo.answerThree;
			$('#choice1, #choice2, #choice3').click(function(){
				if(this.id == "choice2") {
					correct("#choice1", "#choice3");
				}
				else if (this.id == "choice1") {
					incorrect("#choice3", "#choice2");
				}
				else if (this.id == "choice3") {
					incorrect("#choice2","#choice1");
				}
				else{alert("ok");
				}
			});
		}

		var Three = function(){
			questionEl.textContent = questionThree.question;
			choice1.textContent = questionThree.answerOne;
			choice2.textContent = questionThree.answerTwo;
			choice3.textContent = questionThree.answerThree;
			$('#choice1, #choice2, #choice3').click(function(){
				if(this.id == "choice2") {
					correct("#choice1", "#choice3");
				}
				else if (this.id == "choice1") {
					incorrect("#choice3", "#choice2");
				}
				else if (this.id == "choice3") {
					incorrect("#choice2","#choice1");
				}
				else{alert("ok");
				}
			});
		}

		var Four = function(){
			questionEl.textContent = questionFour.question;
			choice1.textContent = questionFour.answerOne;
			choice2.textContent = questionFour.answerTwo;
			choice3.textContent = questionFour.answerThree;
			$('#choice1, #choice2, #choice3').click(function(){
				if(this.id == "choice1") {
					correct("#choice2", "#choice3");
				}
				else if (this.id == "choice2") {
					incorrect("#choice1", "#choice3");
				}
				else if (this.id == "choice3") {
					incorrect("#choice1","#choice2");
				}
				else{alert("ok");
				}
			});
		}

		var Five = function(){
			questionEl.textContent = questionFive.question;
			choice1.textContent = questionFive.answerOne;
			choice2.textContent = questionFive.answerTwo;
			choice3.textContent = questionFive.answerThree;
			$('#choice1, #choice2, #choice3').click(function(){
				if(this.id == "choice3") {
					correct("#choice1", "#choice2");
				}
				else if (this.id == "choice2") {
					incorrect("#choice3", "#choice1");
				}
				else if (this.id == "choice1") {
					incorrect("#choice3","#choice2");
				}
				else{alert("ok");
				}
			});
		}

	// Function that controls gameplay (or quizplay?)
	var gamePlay = function(){
		One();
		Two();
		Three();
		Four();
		Five();
	};
});