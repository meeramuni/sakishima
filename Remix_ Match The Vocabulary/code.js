var answer; 
var numOfQues = 11;
var crctAnswers = 0; 
var points = 0;
var EngList = ['Cat','Dog','Banana','Orange','Fish','Water','Flower','Moon','Sun','Milk','Juice'];
var answerBtns = ["answerBtn1","answerBtn2","answerBtn3","answerBtn4"];
var VocabSets = [{
  coName:"Mayaa",
  caName:"Cat",
}, {
  coName:"In",
  caName:"Dog",
}, {
  coName:"Basonnaru",
  caName:"Banana",
}, {
  coName:"Funin",
  caName:"Orange",
}, {
  coName:"Sakana",
  caName:"Fish"
}, {
  coName:"Mizu",
  caName:"Water",
}, {
  coName:"Hana",
  caName:"Flower",
}, {
  coName:"Tsuki",
  caName:"Moon",
}, {
  coName:"Taiyo",
  caName:"Sun",
}, {
  coName:"Nyuyu",
  caName:"Milk",
}, {
  coName:"Guo zhi",
  caName:"Juice",
},];

var randomQues;
var btns = [];
onEvent("nameSbmtBtn", "click", function() {
  if(getText("nameInpt") === ''){
    setText("nameRequiredLbl", "Your name is required");
  }else{
    var sName = getText("nameInpt");
    var greet = getText('grtLbl');
    var wthName = greet.replace("#name", capFrstLtr(sName));
    setText("grtLbl",wthName);
    setScreen("introScr");
  }
  function capFrstLtr(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
  } 
});

chngScreen("readyBtn", "click", "questionScr");
function chngScreen (id, type, screen) {
  onEvent(id, "click", function() {
    setScreen(screen);
  });
  
}


onEvent("readyBtn", "click", function() { 
  setRandomQues();
});
onEvent('answerBtn1',"click",function(){
  checkAnswer("answerBtn1");
});
onEvent('answerBtn2',"click",function(){
  checkAnswer("answerBtn2");
});
onEvent('answerBtn3',"click",function(){
  checkAnswer("answerBtn3");
});
onEvent('answerBtn4',"click",function(){
  checkAnswer("answerBtn4");
});
onEvent("crctNxtBtn","click", function(){
  if(VocabSets.length != 0){
    console.log(VocabSets.length);
    setRandomQues();
    EngList = ['Cat','Dog','Banana','Orange','Fish','Water','Flower','Moon','Sun','Milk','Juice'];
  }else{
    setScreen('resulstScr');
    setText('cngrtLbl', "Congrats, you answered " + crctAnswers + " out of " + numOfQues +  " questions and scored:" );
    var sentence = getText("pntsLbl").replace('"#"', points);
    setText("pntsLbl", sentence);
  }
});
onEvent("rstrtBtn", "click", function(){
  points= 0;
  setText("pntsLbl", '"#" points');
  crctAnswers = 0;
  setScreen("gameRestartedScr");
  VocabSets = [{
  coName:"Mayaa",
  caName:"Cat",
}, {
  coName:"In",
  caName:"Dog",
}, {
  coName:"Basonnaru",
  caName:"Banana",
}, {
  coName:"Funin",
  caName:"Orange",
}, {
  coName:"Sakana",
  caName:"Fish"
}, {
  coName:"Mizu",
  caName:"Water",
}, {
  coName:"Hana",
  caName:"Flower",
}, {
  coName:"Tsuki",
  caName:"Moon",
}, {
  coName:"Taiyo",
  caName:"Sun",
}, {
  coName:"Nyuyu",
  caName:"Milk",
}, {
  coName:"Guo zhi",
  caName:"Juice",
  },];
});

onEvent("rstrtStartQuizBtn","click", function(){
  setRandomQues();
});

onEvent("extBtn", "click", function(){
  var count = 0; 
  while(count<3000){
    setScreen("byeScr");
    count++;
    console.log(count);
  }
  if(count == 3000){
    setScreen("blkScr");
  }
});
function randomAnswerBtns(num){
  var count = 2;
  for(var i = 0 ; i <= count ; i++){
    var randomI = randomNumber(0,answerBtns.length - 1);
    btns[i] = answerBtns[randomI];
    answerBtns.splice(randomI,1);
  }
  for(var x = 0 ; x <= btns.length-1; x++){
    setRandomCap(btns[x]);
  }
  setText(answerBtns[0], VocabSets[num].caName);
  answer = VocabSets[randomQues].caName;
  answerBtns = ["answerBtn1","answerBtn2","answerBtn3","answerBtn4"];
  VocabSets.splice(randomQues, 1);
}
function setRandomCap(btn){
  var random = randomNumber(0, EngList.length-1);
  setText(btn, EngList[random]);
  EngList.splice(random,1);
}


function checkAnswer(btn){
  if(getText(btn) === answer){
    crctAnswers++;
    points+=2;
    hideElement("inctLbl");
    setScreen("crctIncrtScr");
    showElement("crctLbl");
    setText('motvtLbl', "You got it!!");
    quesLft();
  }else{
    points--;
    hideElement("crctLbl");
    setScreen("crctIncrtScr");
    showElement("inctLbl");
    setText('motvtLbl', "Oops, Keep trying");
    quesLft();
  }
  function quesLft(){
    if(VocabSets.length == 1){
      setText("quesLftLbl", VocabSets.length + " more question");
    }else{
      setText("quesLftLbl", VocabSets.length + " more questions");
    }
  }
}
function setRandomQues(){
  randomQues = randomNumber(0, VocabSets.length-1);
  setScreen("questionScr");
  setText("questionLbl","What is " + VocabSets[randomQues].coName + "?");
  //countriesSets.splice(randomQues, 1);
  randomAnswerBtns(randomQues);
}