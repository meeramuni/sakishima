function check(){
/*takes in all answers from textbox and stores it in variables*/
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var question8 = document.quiz.question8.value;
  var question9 = document.quiz.question9.value;
  var question10 = document.quiz.question10.value;
  var correct = 0;
/*takes variables and checks it; if answer is correct textbox is white and a point is added otherwise its red;*/
  /*qs1*/
        if (question1 == "うれー みしゅ　すぃるゆ") {
          document.quiz.question1.style.backgroundColor="white";
          correct++;
        } else if (question1 == "みしゅ　すぃる") {
          document.quiz.question1.style.backgroundColor="white";
          correct++;
        }
        else
        {document.quiz.question1.style.backgroundColor="#F08080";}

  /*qs2*/
        if (question2 == "まやーや すぃま　ばそんなるどぅ ふぉー") {
          document.quiz.question2.style.backgroundColor="white";
          correct++;
        }	else if (question2 == "すぃま　ばそんなる") {
          document.quiz.question2.style.backgroundColor="white";
          correct++;
        }
        else
        {document.quiz.question2.style.backgroundColor="#F08080";}

  /*qs3*/
        if (question3 == "うれー ふにんゆ") {
          document.quiz.question3.style.backgroundColor="white";
          correct++;
        } else if (question3 == "ふにん") {
          document.quiz.question3.style.backgroundColor="white";
          correct++;
        }
        else
        {document.quiz.question3.style.backgroundColor="#F08080";}

  /*qs4*/
        if (question4 == "いんや ぐしどぅ ぬむ") {
          document.quiz.question4.style.backgroundColor="white";
          correct++;
        } else if (question4 == "ぐし") {
          document.quiz.question4.style.backgroundColor="white";
          correct++;
        }
        else
        {document.quiz.question4.style.backgroundColor="#F08080";}

  /*qs5*/
        if (question5 == "うれー ぐしゆ") {
          document.quiz.question5.style.backgroundColor="white";
          correct++;
        }	else if  (question5 == "ぐし") {
          document.quiz.question5.style.backgroundColor="white";
          correct++;
        }
        else
        {document.quiz.question5.style.backgroundColor="#F08080";}

  /*qs6*/
        if (question6 == "まやーや みしゅ　すぃるどぅ ぬむ") {
          document.quiz.question6.style.backgroundColor="white";
          correct++;
        } else if  (question6 == "みしゅ　すぃる") {
          document.quiz.question6.style.backgroundColor="white";
          correct++;
        }
        else
        {document.quiz.question6.style.backgroundColor="#F08080";}

  /*qs7*/
        if (question7 == "うれー すぃま　ばそんなるゆ") {
          document.quiz.question7.style.backgroundColor="white";
          correct++;
        } else if (question7 == "すぃま　ばそんなる") {
          document.quiz.question7.style.backgroundColor="white";
          correct++;
        }
        else
        {document.quiz.question7.style.backgroundColor="#F08080";}

  /*qs8*/
        if (question8 == "まやーや ふにんどぅ ふぉー") {
          document.quiz.question8.style.backgroundColor="white";
          correct++;
        }	else if (question8 == "ふにん") {
          document.quiz.question8.style.backgroundColor="white";
          correct++;
        }
        else
        {document.quiz.question8.style.backgroundColor="#F08080";}

  /*qs9*/
        if (question9 == "うれー いんゆ") {
          document.quiz.question9.style.backgroundColor="white";
          correct++;
        } else if (question9 == "いん") {
          document.quiz.question9.style.backgroundColor="white";
          correct++;
        }
        else
        {document.quiz.question9.style.backgroundColor="#F08080";}

  /*qs10*/
        if (question10 == "いんや ふにんどぅ ふぉー") {
          document.quiz.question10.style.backgroundColor="white";
          correct++;
        } else if (question10 == "ふにん") {
          document.quiz.question10.style.backgroundColor="white";
          correct++;
        }
        else
        {document.quiz.question10.style.backgroundColor="#F08080";}

/*comments on the score on questionairre*/
        var messages = ["大変よくできました！","よくできました！赤い答えをなおしましょう!", "第一課のページにもどって、わからなかったところを復習して下さい。"];

/*score is index/item to the list above called messages*/
        var score;

        if (correct >= 0 && correct <= 5) {
          score = 2;
        }

        if (correct >= 6 && correct <= 9) {
          score = 1;
        }

        if (correct == 10) {
          score = 0;
        }
/*displays message score once submit button is clicked on*/
  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("message").innerHTML = messages[score];
  document.getElementById("number_correct").innerHTML =  correct + "てん でした!";
}
