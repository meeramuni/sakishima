$(document).ready(function () {
							 
	var questionBank=new Array;
	var currentQuestionNumber;
	var currentAnswer;
	var numberOfQuestions;
	var gamePosition;
	var score;

	// $.getJSON('data.json', function(data) { 
	// 	numberOfQuestions=data.quizlist.length;
	// 	for(i=0;i<data.quizlist.length;i++){  
	// 		typeArray=[];
	// 		typeArray[0]=data.quizlist[i].question;			
	// 		typeArray[1]=data.quizlist[i].response;
	// 		questionBank[i]=typeArray; 
	// 	}
	// 	alert(questionBank);
	// 	gamePosition=1; 
	//  	resetGame();
	//   	updateQuestion();
		
	// })//getJSON

	$.getJSON('examples.json', function(data) { 
		numberOfQuestions=data.examples.length;
		for(i=0;i<data.examples.length;i++){  
			typeArray=[];
			typeArray[0]=data.examples[i].japanese;			
			typeArray[1]=data.examples[i].meera;
			questionBank[i]=typeArray; 
		}
		alert(questionBank);
		gamePosition=1; 
	 	resetGame();
	  	updateQuestion();
		
	})//getJSON
			
	function resetGame(){
		currentQuestionNumber=0;
		score=0;
		$("#gameArea").empty();
		$("#gameArea").append('<h1>Quiz</h1>');
		$("#gameArea").append('<p>Do you know the capital city of this country? Type the answer in the space and press ENTER:</p>');
		$("#gameArea").append('<p id="wordBox">Sentence 1</p>');
		$("#gameArea").append('<input type="text" id="inputBox">');
		$("#gameArea").append('<div id="feedback"></div>');
		$("#gameArea").append('<p id="message"></p>');
	};//resetGame
	
	function updateQuestion(){
		$('#wordBox').empty();
		$('#wordBox').append(questionBank[currentQuestionNumber][0]);
    	$('#message').empty();
		$('#feedback').empty();
		$('#inputBox').empty();
		$('#inputBox').prop("disabled",false);
		$('#inputBox').val('');
		$('#inputBox').css("background-color","white");
		$('#inputBox').css("color","black"); 
		$('#inputBox').focus();
		currentAnswer=questionBank[currentQuestionNumber][1];
		currentQuestionNumber++;
		gamePosition=1;
	}//updateQuestion
			
	$(document).on("keyup",function(e){
		if(e.which==13){gameControl();};						  
	});
	
	$(document).on("click tap",function(){
		gameControl();
	});//tap
								
	function gameControl(){		
		switch (gamePosition) { 
			case 1: 
				checkAnswer();
				break;
			case 2: 
				updateQuestion();
				break;
			case 3: 
				scorePage();
				break;		
			case 4: 
				resetGame();
				updateQuestion();
				break;		
		}//switch	
	}//gamecontrol
		
	function checkAnswer(){
		myAnswer=$('#inputBox').val();
		if(myAnswer.slice(myAnswer.length-1,myAnswer.length)==" "){
			myAnswer=myAnswer.slice(0,myAnswer.length-1);}
		if(currentAnswer==myAnswer){
			score++;
			$('#feedback').append('<img src="tick.png">');
			$('#inputBox').css("background-color","green");
			$('#inputBox').css("color","white");
		}
		else{
			$('#feedback').append('<img src="cross.png">');
			$('#inputBox').css("background-color","red");
			$('#inputBox').css("color","white");
			$('#inputBox').val($('#inputBox').val()+" (ans= "+currentAnswer+")");
		}
		$('#message').append('Press ENTER or tap the screen again to continue');
		$("#inputBox").prop('disabled', true);
		$("#gameArea").focus();
		gamePosition=2;
		if(currentQuestionNumber==numberOfQuestions){gamePosition=3;}
	}//checkAnswer
								
	function scorePage(){
		$("#gameArea").empty();
		$("#gameArea").append("<h1>You have finished the quiz.</h1><br><br>");
		$("#gameArea").append("Final score: "+score+ ' | '+numberOfQuestions+'<br><br>');
		$("#gameArea").append("Press ENTER or tap the screen to try again.");
		gamePosition=4;
	}//scorePage
		 

});//doc ready