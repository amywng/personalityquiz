var questionsAnswered = 0;
var pbScore = 0;
var jellyScore = 0;

var showResult = document.getElementById("showResult");
var result = document.getElementById("result");
var restart = document.getElementById("restart");
var explanation = document.getElementById("explanation");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

q1a1.addEventListener("click", peanutButter);
q1a1.addEventListener("click", disableButton);

q1a2.addEventListener("click", jelly);
q1a2.addEventListener("click", disableButton);

q2a1.addEventListener("click", jelly);
q2a1.addEventListener("click", disableButton);

q2a2.addEventListener("click", peanutButter);
q2a2.addEventListener("click", disableButton);

q3a1.addEventListener("click", peanutButter);
q3a1.addEventListener("click", disableButton);

q3a2.addEventListener("click", jelly);
q3a2.addEventListener("click", disableButton);

q4a1.addEventListener("click", jelly);
q4a1.addEventListener("click", disableButton);

q4a2.addEventListener("click", peanutButter);
q4a2.addEventListener("click", disableButton);

q5a1.addEventListener("click", peanutButter);
q5a1.addEventListener("click", disableButton);

q5a2.addEventListener("click", jelly);
q5a2.addEventListener("click", disableButton);


restart.addEventListener("click", restartQuiz);

function peanutButter() {
  pbScore +=1;
  questionsAnswered+=1;
  console.log("questionsAnswered=" + questionsAnswered + "pbScore=" + pbScore);
  if (questionsAnswered==5) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function jelly() {
  jellyScore +=1;
  questionsAnswered+=1;
  console.log("questionsAnswered=" + questionsAnswered + "jellyScore=" + jellyScore);
  if (questionsAnswered==5) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function displayResult() {
  if (jellyScore>pbScore) {
    console.log("You are jelly.");
    result.innerHTML = "You are jelly!";
    explanation.innerHTML = "You're super sweet, versatile, and well-liked!"
  }
  else {
    console.log("You are peanut butter.");
    result.innerHTML = "You are peanut butter!";
    explanation.innerHTML = "You're bold, sophisticated, and popular! Whether you're crunchy and determined or creamy and calm, you're always full of personality!"
  }
}

function updateResult() {
  showResult.addEventListener("click", displayResult);
}

function restartQuiz() {
  result.innerHTML = "Your result is..."
  var questionsAnswered = 0;
  var pbScore = 0;
  var jellyScore = 0;
  console.log("questionsAnswered=" + questionsAnswered + "pbScore=" + pbScore);
  enableQuestions();
  explanation.innerHTML = "";
  changeBorders();
}

function disableButton() {
  buttons = document.getElementsByClassName(this.className);
  buttons[0].disabled = true;
  buttons[1].disabled = true;
  this.style.borderColor = "purple";
}

function enableQuestions() {
  q1a1.disabled = false; 
  q1a2.disabled = false; 
  q2a1.disabled = false; 
  q2a2.disabled = false;
  q3a1.disabled = false; 
  q3a2.disabled = false;
  q4a1.disabled = false; 
  q4a2.disabled = false;
  q5a1.disabled = false; 
  q5a2.disabled = false;
}

function changeBorders() {
  buttons = document.getElementsByClassName("choice");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.borderColor = "white";
  }
}