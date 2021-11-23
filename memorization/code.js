$(document).ready(function () { 

  var Names = new Array;
  var Tries = 0;
  var Correct = 0;
  var Streak = 0;
  var BestStreak = 0;
  var WorldRecord = 0;
  var LessonNumber = 1;
  var Buttons = ["a1","a2","a3", "a4"];

  document.getElementById("begin").addEventListener("click", begin);


  function begin(event) {
    setScreen("SelectLesson");
  };

  onEvent("lesson1", "click", function(event) {
    // choose lesson
    LessonNumber = '1';
    setScreen("Quiz");
      showNextQuestion();
      getKeyValue("highscore", function (value) {
        WorldRecord = value;
      });
  });

  onEvent("lesson2", "click", function(event) {
    // choose lesson
    LessonNumber = '2';
    setScreen("Quiz");
      showNextQuestion();
      getKeyValue("highscore", function (value) {
        WorldRecord = value;
      });
  });

  $.getJSON('memorization/ch'+ LessonNumber + "/ch" + LessonNumber +'_vocab.json', function(data) {
    for(i=0;i<data.vocab.length;i++){ 
      Names[i] = data.vocab[i];
    }
  });
  
  function Shuffle(L) {
    for (var i = 0; i < L.length-1; i++) {
      var r = randomNumber(i, L.length-1);
      var temp = L[r];
      L[r] = L[i];
      L[i] = temp;
    }
  }  
    
    
  function resetButtonColors() {
    setProperty("a2", "background-color", "#1abc9c");
    setProperty("a3", "background-color", "#1abc9c");
    setProperty("a4", "background-color", "#1abc9c");
    
  }

  function showNewScore() {
    setText("score", "Score: "+ Streak + ".   Best: "+BestStreak+".   World record: "+WorldRecord);
    
    getKeyValue("highscore", function (value) {
      if (value > WorldRecord) {
        WorldRecord = value;
      }
    });

  }

  function showNextQuestion() {
      // shuffle the Names, so the first name is different each time
    resetButtonColors();
    Shuffle(Names);
    
    // pick the first name of the shuffled array as the answer
    var theAnswer = decodeURI(Names[0]);
    var theImage = "memorization/" + theAnswer + ".jpg";
    setImageURL("quizimage", theImage);
    
    // set the 4 buttons to the first 4 shuffled names
    var answer1 = Names[0];
    var answer2 = Names[1];
    var answer3 = Names[2];
    var answer4 = Names[3];
    
    setText("a1", answer1);
    setText("a2", answer2);
    setText("a3", answer3);
    setText("a4", answer4);
    
    // next, shuffle the button locations
    Shuffle(Buttons);
    
    setPosition(Buttons[0], 15, 265);
    setPosition(Buttons[1], 15, 340);
    setPosition(Buttons[2], 180, 265);
    setPosition(Buttons[3], 180, 340);
    
  }

  onEvent("a1", "click", function(event) {
    // right answer
    playSound("https://studio.code.org/blockly/media/example.mp3");
    setTimeout(showNextQuestion, 100);
    
    Correct++;
    Tries++;
    Streak++;
    if (Streak > BestStreak) {
      BestStreak= Streak;
      if (BestStreak > WorldRecord) {
        WorldRecord = BestStreak;
        setKeyValue("highscore", WorldRecord, function () {
          
        });
        
      }
    }
    showNewScore();
  });

  function wrongAnswer(button) {
    setProperty(button, "background-color", "red");
    Tries++;
    Streak=0;
    showNewScore();
  }

  onEvent("a2", "click", function(event) {
    // wrong answer  
    wrongAnswer("a2");
  });

  onEvent("a3", "click", function(event) {
    // wrong answer
    wrongAnswer("a3");
  });

  onEvent("a4", "click", function(event) {
    // wrong answer
    wrongAnswer("a4");
  });

});
