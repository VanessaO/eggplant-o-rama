$(document).ready(function() {

	$("#start").click(function() {
		$("#quizQuestions, #counter").show(1000);
		$("#info").hide();
		nextQuestion();
	});
	
	//Quiz Element Variables
	var questionEl = document.getElementById('question');
	var choice1 = document.getElementById('choice1');
	var choice2 = document.getElementById('choice2');
	var choice3 = document.getElementById('choice3');
	var currentQuestion = 0;
	var numCorrect = 0;

	//Quiz Questions and Answers As Objects
	var questions = [
	
		questionOne = {
			question: "Q1. What is the eggplant's latin name?", 
			choices: ["A. Solanum Melongena", "B. Solanum Lycopersicum", 
			"C. Solanum Tuberosum"],
			correct: "A. Solanum Melongena"
		},

		questionTwo = {
			question: "Q2. Eggplant is the most rich in what nutrient?", 
			choices: ["A. Potassium", "B. Fiber", "C. Vitamin B3"],
			correct: "B. Fiber"
		},

		questionThree = {
			question: "Q3. Eggplant was first cultivated in what country?", 
			choices: ["A. India", "B. China", "C. Turkey"],
			correct: "B. China"
		},

		questionFour = {
			question: "Q4. __ pounds of eggplant contains 2mg of nicotine.", 
			choices: ["A. 20", "B. 7", "C. 43"],
			correct: "A. 20"
		},

		questionFive = {
			question: "Q5. Are eggplants fruits or vegetables?", 
			choices: ["A. Neither", "B. Vegetables", "C. Fruits"],
			correct: "C. Fruits"
		}
	];
	
	function nextQuestion() {
		if (currentQuestion == 0) {
			questionEl.textContent = questionOne.question;
			choice1.textContent = questionOne['choices'][0];
			choice2.textContent = questionOne['choices'][1];
			choice3.textContent = questionOne['choices'][2];
		}
		else if (currentQuestion == 1) {
			questionEl.textContent = questionTwo.question;
			choice1.textContent = questionTwo['choices'][0];
			choice2.textContent = questionTwo['choices'][1];
			choice3.textContent = questionTwo['choices'][2];
		}
		else if (currentQuestion == 2) {
			questionEl.textContent = questionThree.question;
			choice1.textContent = questionThree['choices'][0];
			choice2.textContent = questionThree['choices'][1];
			choice3.textContent = questionThree['choices'][2];
		}
		else if (currentQuestion == 3) {
			questionEl.textContent = questionFour.question;
			choice1.textContent = questionFour['choices'][0];
			choice2.textContent = questionFour['choices'][1];
			choice3.textContent = questionFour['choices'][2];
		}
		else if (currentQuestion == 4) {
			questionEl.textContent = questionFive.question;
			choice1.textContent = questionFive['choices'][0];
			choice2.textContent = questionFive['choices'][1];
			choice3.textContent = questionFive['choices'][2];
		}
		else{
			alert("game over");
		}
	}

	$("#choices li").click(function(){
		var answer = $(this).text();
		var clickedBox = "#" + event.target.id;
		checkAnswer(answer, clickedBox);
		currentQuestion+= 1;
		var count = document.getElementById('count');
		//Sets question counter 
		count.innerHTML = currentQuestion;
		nextQuestion();
	});


	function checkAnswer(answer, clickedBox) {
		if(answer == questions[currentQuestion]['correct']) {
			numCorrect++;
			console.log(numCorrect);
			//$(clickedBox).addClass("correct");
		}
		else {
			//$(clickedBox).addClass("incorrect");
		}
	}
});