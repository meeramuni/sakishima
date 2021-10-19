$(document).ready(function () { 

  var questionBank=new Array;
  var currentQuestionNumber;
  var currentAnswer;
  var numberOfQuestions;
  var gamePosition;
  var score;

  // Get data from JSON file
  $.getJSON('soundcorrespondences/vocab.json', function(data) {
    numberOfQuestions=data.vocab.length;
    for(i=0;i<data.vocab.length;i++){ 
      typeArray=[];
      typeArray[0]=data.vocab[i].japanese;
      typeArray[1]=data.vocab[i].meera;      
      typeArray[2]=data.vocab[i].jp_hint;      
      questionBank[i]=typeArray;
    }
    // alert(questionBank);
    gamePosition=1;
    resetGame();
    updateQuestion();
  })//getJSON

  // Resets the whole game
  function resetGame(){
      currentQuestionNumber=0;
      score=0;
      $("#gameArea").empty();
      $("#gameArea").append('<h1>推測してみてください！</h1>'); 
      $("#gameArea").append('<p>下の言葉はめーらむにで何と言うと思いますか？</p>'); 
      $("#gameArea").append('<p id="wordBox"></p>');
      // $("#gameArea").append(new Array('<p><b>「', questionBank[currentQuestionNumber][0], '」</b>をめーらむにで何と言うと思いますか？</p>').join(""));
      $("#gameArea").append('<input type="text" id="inputBox">');
      $("#gameArea").append('<div id="feedback"></div>');
      $("#gameArea").append('<p id="message"></p>');
  }//reset game

  // Updates to next question
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
     $("#inputBox").click(function(e) {e.stopPropagation();});  
     currentAnswer=questionBank[currentQuestionNumber][1];
     currentJpHint=questionBank[currentQuestionNumber][2];
     currentQuestionNumber++;   
     gamePosition=1;
  }//updateQuestion

  // Captures entering of answer
  $(document).on("keyup",function(e){
    if(e.which==13){gameControl();};
  });

  // $("#gameArea").on("click tap",function(){
  //     gameControl();      
  // });//tap

  // Controls the state of the game
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

  // Check the answer and give feedback
  function checkAnswer(){
    myAnswer=$('#inputBox').val();  
    if(myAnswer.slice(myAnswer.length-1,myAnswer.length)==" "){
      myAnswer=myAnswer.slice(0,myAnswer.length-1);}
    if(currentAnswer==myAnswer){
      score++;
      $('#feedback').append('<img src="tick.png">');
      $('#inputBox').css("background-color","green");
      $('#inputBox').css("color","white");
      $('#inputBox').val($('#inputBox').val()+"（正解！）");
    }
    else{
      $('#feedback').append('<img src="cross.png">');
      $('#inputBox').css("background-color","red");
      $('#inputBox').css("color","white");
      $('#inputBox').val($('#inputBox').val()+"（正解："+currentAnswer+"）");
    }
    $('#message').append('続けるため、エンターキーを押してください！');
    $("#inputBox").prop('disabled', true);
    $("#gameArea").focus();
    gamePosition=2;
    if(currentQuestionNumber==numberOfQuestions){gamePosition=3;}
  }//checkanswer

  function scorePage(){
    $("#gameArea").empty();
    $("#gameArea").append("<h1>終わりです！</h1><br><br>");  
    $("#gameArea").append("点数: "+score+ ' | '+numberOfQuestions+'<br><br>');
    $("#gameArea").append("もう一度するため、エンターキーを押してください！");
    gamePosition=4;  
  }//scorePage  

  // document.getElementById('textbox1').focus(); 
  window.scrollTo(0,0);
});