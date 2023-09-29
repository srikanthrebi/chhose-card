
// let num1 =document.querySelector("#num-1")
// let num2 =document.querySelector("#num-2")
// let num3 =document.querySelector("#num-3")
// let num5 =document.querySelector("#num-5")
// let startbtn =document.querySelector("#start-btn")

// console.log(startbtn);
// startbtn.addEventListener('click',function(){
//   let newValue = genrateNum(10)
//   console.log(newValue);
  
// })

// function genrateNum(num){

//     return x = Math.floor(Math.random()*(num-1)+1)
   
   
// }
let timeLeft =30
let score = 0
let correctAnswer =0
let op = ["+","-","*","%"]
document.getElementById("spr").style.display="none"
function startGame(){
  let displayTime = document.getElementById("timeDisplay")
  displayTime.hidden = false
  let start =document.getElementById("start").style.display="none"
  document.getElementById("spr").style.display="block"
  
 
  let x = setInterval(function(){
  
    timeLeft--;

    displayTime.innerHTML =  `<span style="padding:0 0px 0 10px;">Left Time</span>` + timeLeft

    if(timeLeft<0){
      timeLeft =0
      displayTime.innerHTML = `<span style="padding:0 0px 0 10px;">Left Time</span>` + timeLeft
      clearInterval(x)
      document.getElementById("hidden").style.display="none"
      displayTime.style.display="none"
      
    }
  },1000)

  nextQuestion()


}

function nextQuestion(){
  let opration = document.getElementById("operation")
  let firstNum = Math.ceil(Math.random()*12)
  let secNum = Math.ceil(Math.random()*12)

  console.log(firstNum);

  
  // randoms 
  let rand= Math.floor(Math.random()*4)
  let defal=op[rand]
  console.log(defal);
  

  if(defal == "*"){
    console.log("star");
    correctAnswer = firstNum *secNum
    opration.innerHTML  = `${firstNum} <span style="padding:0 5px;">  *  <span>  ${secNum}  =  ?`
    let wrongAnswer1= Math.floor(Math.random()*12)*Math.floor(Math.random()*12);
  let wrongAnswer2= Math.floor(Math.random()*12)*Math.floor(Math.random()*12);
  let wrongAnswer3= Math.floor(Math.random()*12)*Math.floor(Math.random()*12);
  let wrongAnswer4= Math.floor(Math.random()*12)*Math.floor(Math.random()*12);

  document.getElementById("btn1").innerHTML=wrongAnswer1
  document.getElementById("btn2").innerHTML=wrongAnswer2
  document.getElementById("btn3").innerHTML=wrongAnswer3
  document.getElementById("btn4").innerHTML=wrongAnswer4

  }
  else if(defal=="-"){
    correctAnswer = firstNum -secNum
    opration.innerHTML  = `${firstNum} <span style="padding:0 5px;">  -  <span>  ${secNum}  =  ?`
    let wrongAnswer1= Math.floor(Math.random()*12)-Math.floor(Math.random()*12);
  let wrongAnswer2= Math.floor(Math.random()*12)-Math.floor(Math.random()*12);
  let wrongAnswer3= Math.floor(Math.random()*12)-Math.floor(Math.random()*12);
  let wrongAnswer4= Math.floor(Math.random()*12)-Math.floor(Math.random()*12);

  document.getElementById("btn1").innerHTML=wrongAnswer1
  document.getElementById("btn2").innerHTML=wrongAnswer2
  document.getElementById("btn3").innerHTML=wrongAnswer3
  document.getElementById("btn4").innerHTML=wrongAnswer4

  }
  else if(defal=="+"){
    correctAnswer = firstNum +secNum
    opration.innerHTML  = `${firstNum} <span style="padding:0 5px;">  +  <span>  ${secNum}  =  ?`
    let wrongAnswer1= Math.floor(Math.random()*12)+Math.floor(Math.random()*12);
  let wrongAnswer2= Math.floor(Math.random()*12)+Math.floor(Math.random()*12);
  let wrongAnswer3= Math.floor(Math.random()*12)+Math.floor(Math.random()*12);
  let wrongAnswer4= Math.floor(Math.random()*12)+Math.floor(Math.random()*12);

  document.getElementById("btn1").innerHTML=wrongAnswer1
  document.getElementById("btn2").innerHTML=wrongAnswer2
  document.getElementById("btn3").innerHTML=wrongAnswer3
  document.getElementById("btn4").innerHTML=wrongAnswer4

  }
  else if(defal=="%"){
    correctAnswer = firstNum %secNum
    opration.innerHTML  = `${firstNum} <span style="padding:0 5px;">  %  <span>  ${secNum}  =  ?`
    let wrongAnswer1= Math.floor(Math.random()*12)%Math.floor(Math.random()*12);
  let wrongAnswer2= Math.floor(Math.random()*12)%Math.floor(Math.random()*12);
  let wrongAnswer3= Math.floor(Math.random()*12)%Math.floor(Math.random()*12);
  let wrongAnswer4= Math.floor(Math.random()*12)%Math.floor(Math.random()*12);

  document.getElementById("btn1").innerHTML=wrongAnswer1
  document.getElementById("btn2").innerHTML=wrongAnswer2
  document.getElementById("btn3").innerHTML=wrongAnswer3
  document.getElementById("btn4").innerHTML=wrongAnswer4

  }
 
  let correctAnswerIndex =Math.floor(Math.random()*4)+1

  let correctAnswerId ="btn"+correctAnswerIndex

  document.getElementById(correctAnswerId).innerHTML =correctAnswer
}

function checkAnswer(btnIndex){
  let answer = document.getElementById("btn" + btnIndex).innerHTML;

  if(answer == correctAnswer){
    score+=1
    document.getElementById("currentScore").innerHTML="Your Score is" + `<span style="padding:0 5px;"></span> ${score}`
    nextQuestion()
  
  }
  // else if(score >highScore){
  //   document.getElementById("highScore").innerHTML="high score" + highScore
  //   nextQuestion()
  // }
  else{
    score-=1
    document.getElementById("currentScore").innerHTML="Your Score is" + `<span style="padding:0 5px;"></span> ${score}`
    nextQuestion()
  }

}







