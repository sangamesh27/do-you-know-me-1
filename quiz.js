var readLineSync = require("readline-sync")
var userName = readLineSync.question("What is your name? ")
var score = 0
console.log("Welcome " + userName +" to the quiz")
function play(question,answer){
  var userAnswer = readLineSync.question(question)
  if(userAnswer === answer){
    console.log("You are right")
    score = score + 1
  }
  else{
    console.log("You are wrong")
    score = score 

  }
    console.log(score) 
}
var questions = [{
  question:"Where do I live? ",
  answer:"Hyderabad"
},
{
  question:"Where do I work? ",
  answer:"Paytm"
},
{
  question:"What is my favourite anime? ",
  answer:"Naruto"
},
{
  question:"What is my DOB? ",
  answer:"27/02/2002"
},
]
//loop
for (var i = 0; i<questions.length;i++){
  var currentQuestion = questions[i]
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("Your final Score is: ",score)
if(score === 4){
    console.log("congrats You have won the quiz")
  }
  else{
    console.log("Try again you can win!")
  }
