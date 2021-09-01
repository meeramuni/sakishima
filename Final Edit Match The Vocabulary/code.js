//test features vocabularies on certain chapter
//qs format: what is ___ 
//answer format: there are four buttons; one is the asnwer/translation of the word; the rest of buttons are randomly chosen translations
//answers are randomly positioned so all correct answers shouldn't be at same button thourought game
//each qs has a point but is optional (can be remove from test if only want number of answers corrected)
var answer; 
var randomQues;
var numOfQues = 10;
var crctAnswers = 0; 
var points = 0;
var TransList = ["猫","犬","島バナナ","みかん","食べる","飲む","味噌汁","酒","これは","何"];
var answerBtns = ["answerBtn1","answerBtn2","answerBtn3","answerBtn4"];
//VocabSets shows vocab and its translation for tests
var VocabSets = [{
  meera:"まやー",
  trans:"猫",
}, {
  meera:"いん",
  trans:"犬",
}, {
  meera:"すぃま　ばそんなる	",
  trans:"島バナナ",
}, {
  meera:"ふにん",
  trans:"みかん",
}, {
  meera:"ふぉー",
  trans:"食べる"
}, {
  meera:"ぬむ",
  trans:"飲む",
}, {
  meera:"みしゅ　すぃる",
  trans:"味噌汁",
}, {
  meera:"ぐし",
  trans:"酒",
}, {
  meera:"うれー",
  trans:"これは",
}, {
  meera:"のー",
  trans:"何",
}];

//name submission; optional feature
onEvent("nameSbmtBtn", "click", function() {
  if(getText("nameInpt") === ''){
    setText("nameRequiredLbl", "名前を書いてください");
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

//changes ready screen to 
chngScreen("readyBtn", "click", "questionScr");
//function that changes screen
function chngScreen (id, type, screen) {
  onEvent(id, "click", function() {
    setScreen(screen);
  });
  
}

//changes screen to test qs
onEvent("readyBtn", "click", function() { 
  setRandomQues();
});
//checks answer see line 182
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
//moves to next qs
onEvent("crctNxtBtn","click", function(){
  if(VocabSets.length != 0){
    console.log(VocabSets.length);
    setRandomQues();
    TransList = ["猫","犬","島バナナ","みかん","食べる","飲む","味噌汁","酒","これは","何"];
  }else{
    setScreen('resulstScr');
    setText('cngrtLbl', "あなたは" + numOfQues + "問中" +crctAnswers +  "問合ってた!" );
    var sentence = getText("pntsLbl").replace('"#"', points);
    setText("pntsLbl", sentence);
  }
});

//putting question to label box and adds correct answer to button
function setRandomQues(){
  randomQues = randomNumber(0, VocabSets.length-1);
  setScreen("questionScr");
  setText("questionLbl", VocabSets[randomQues].meera +" はどういう意味ですか？ ");
  //countriesSets.splice(randomQues, 1);
  randomAnswerBtns(randomQues);
}
//assigns button a correct answer to asked word
//what if have two lists like before and have one function choose random answers except for the answer to qs
var btns = [];
function randomAnswerBtns(num){
  var count=2;
  for(var i = 0 ; i <= count ; i++){
    var randomI = randomNumber(0,answerBtns.length - 1);
    btns[i] = answerBtns[randomI];
    answerBtns.splice(randomI,1);
  }
  setText(answerBtns[0], VocabSets[num].trans);
  answer = VocabSets[randomQues].trans;
  for(var j = TransList.length -1; j >= 0 ; j--){
    if(TransList[j] == VocabSets[randomQues].trans){
        TransList.splice(j, 1);
    }}
  for(var x = 0 ; x <= btns.length-1; x++){
    setRandomTrans(btns[x]);
  }
  answerBtns = ["answerBtn1","answerBtn2","answerBtn3","answerBtn4"];
  VocabSets.splice(randomQues,1);
}
//assigns buttons other vocab
function setRandomTrans(btn){
  var random = randomNumber(0, TransList.length-1);
  setText(btn, TransList[random]);
  TransList.splice(random, 1);
}

//check answer function
function checkAnswer(btn){
  if(getText(btn) === answer){
    crctAnswers++;
    points+=2;
    hideElement("inctLbl");
    setScreen("crctIncrtScr");
    showElement("crctLbl");
    setText('motvtLbl', "やった!!");
    quesLft();
  }else{
    points--;
    hideElement("crctLbl");
    setScreen("crctIncrtScr");
    showElement("inctLbl");
    setText('motvtLbl', "おっと、 頑張って!");
    quesLft();
  }
//states how many qs left
  function quesLft(){
    if(VocabSets.length == 1){
      setText("quesLftLbl","残り" + VocabSets.length + " つの質問があります");
    }else{
      setText("quesLftLbl","残り" + VocabSets.length + " つの質問があります");
    }
  }
}

//restart button
onEvent("rstrtBtn", "click", function(){
  points= 0;
  setText("pntsLbl", '"#"分');
  crctAnswers = 0;
  setScreen("gameRestartedScr");
  VocabSets = [{
  meera:"まやー",
  trans:"猫",
}, {
  meera:"いん",
  trans:"犬",
}, {
  meera:"すぃま　ばそんなる	",
  trans:"島バナナ",
}, {
  meera:"ふにん",
  trans:"みかん",
}, {
  meera:"ふぉー",
  trans:"食べる"
}, {
  meera:"ぬむ",
  trans:"飲む",
}, {
  meera:"みしゅ　すぃる",
  trans:"味噌汁",
}, {
  meera:"ぐし",
  trans:"酒",
}, {
  meera:"うれー",
  trans:"これは",
}, {
  meera:"のー",
  trans:"何",
}];
});

//restarts random qs
onEvent("restartQuizBtn","click", function(){
  setRandomQues();
});

//exits out of game
chngScreen("extBtn", "click", "WelcomeScr");