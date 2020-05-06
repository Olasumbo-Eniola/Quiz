
var i = 0;
var ans1 = document.getElementById('Answer1');
var ans2 = document.getElementById('Answer2');
var ans3 = document.getElementById('Answer3');
function NextQu(){
  i++;
  document.getElementById("QuestionQuiz").innerHTML = "Question "+(i+1)+": "+Questions[i];
  document.getElementById('Next').style.display = "none";
  document.getElementById('CurrentQuScore').style.display = 'none';
  ans1.style.display = "inline";
  ans1.style.backgroundColor = "white"
  ans2.style.backgroundColor = 'white';
  ans3.style.backgroundColor = 'white';
  ans2.style.display = "inline";
  ans3.style.display ="inline";
  ans1.style.color = 'black';
  ans2.style.color = 'black';
  ans3.style.color = 'black';
  ans1.innerHTML=Answers[i][0];
  ans2.innerHTML=Answers[i][1];
  ans3.innerHTML=Answers[i][2];
ans1.disabled = false;
ans2.disabled = false;
ans3.disabled = false;
document.getElementById("Next").style.display = "none";
}
function FinishQu() {
  document.getElementById("Rolling Score").style.display="inline";
  document.getElementById("QuestionQuiz").style.display="none";
  ans1.style.display="none";
  ans2.style.display="none";
  ans3.style.display="none";
  document.getElementById("CurrentQuScore").style.display="none";
  document.getElementById("Finish").style.display="none";
  }
var j;
var ScoreTotal = [];


var Q1 = 'Which planet is known as the red planet';
var Q2 = 'What is the closest planet to the sun?';
var Q3 = 'Where can sun be classified?';
var Q4 = 'Which galaxy is earth located?';
var Q5 = ' What is the name of NASA’s most famous space telescope?';
var Questions = [Q1, Q2, Q3, Q4, Q5];

var A1 = ['Jupiter', 'Saturn', 'Mars']
var A2 = ['Uranus', 'Saturn', 'Mercury'];
var A3 = ['Planet', 'No idea', 'Star'];
var A4 = ['Andromeda Galaxy', 'Whirlpool Galaxy', 'The Milky Way Galaxy'];
var A5 = ['James Webb telescope', 'Spitzer space telescope', 'Hubble Space telescope'];
var Answers = [A1, A2, A3, A4, A5];

 
var SC1 = [0, 0, 10];
var SC2 = [0, 0, 10];
var SC3 = [0, 0, 10];
var SC4 = [0, 0, 10];
var SC5 = [0, 0, 10];
var SC6 = [0, 0, 10];
var score = [SC1, SC2, SC3, SC4, SC5, SC6];
function getSum(a, b){
  return a + b;
}
document.getElementById("QuestionQuiz").innerHTML = "Question 1:"+Questions[i];
document.getElementById("QuestionQuiz").style.display = 'block';
ans1.innerHTML=Answers[i][0];
ans2.innerHTML=Answers[i][1];
ans3.innerHTML=Answers[i][2];
function Answer1Select(){
  if (i < Questions.length - 1){
  j=0;
  ans1.style.backgroundColor = 'red';
  ans3.style.backgroundColor = 'greenyellow';
      ans1.style.color = 'white';
      ans3.style.color = 'white';
  document.getElementById('Next').style.display = "inline";
  ans1.disabled = true;
  ans2.disabled = true;
  ans3.disabled = true;
  document.getElementById('CurrentQuScore').style.display = 'block';
  document.getElementById('CurrentQuScore').innerHTML = "You have " + score[i][j] + ' points on this question';
  ScoreTotal.push(score[i][j])
  document.getElementById("Rolling Score").innerHTML="Thanks for taking this quiz " +"Your total score is"+'<br>'+ScoreTotal.reduce(getSum);
      
  }else{
    ans1.style.color = 'white';
    ans3.style.color = 'white';
    document.getElementById('intro').style.display = 'none';
      ans1.style.backgroundColor = 'red';
      document.getElementById('Answer3').style.backgroundColor = 'greenyellow';
    document.getElementById("Finish").style.display = "inline";
  document.getElementById("CurrentQuScore").style.display = "block";
  ans1.disabled = true;
  ans2.disabled = true;
  ans3.disabled = true;
  ScoreTotal.push(score[i][j])
  document.getElementById('CurrentQuScore').innerHTML = "You have " + score[i][j] + ' points on this question';
  document.getElementById("Rolling Score").innerHTML="Thanks for taking this quiz " +"Your total score is"+'<br>'+ScoreTotal.reduce(getSum);
  }
  
}
function Answer2Select(){
  if (i < Questions.length - 1){
    j=1;
    ans2.style.color = 'white';
    ans3.style.color = 'white';
    ans2.style.backgroundColor = 'red';
    ans3.style.backgroundColor = 'greenyellow';
    document.getElementById('Next').style.display = "inline";
    ans1.disabled = true;
    ans2.disabled = true;
    ans3.disabled = true;
    document.getElementById('CurrentQuScore').style.display = 'block';
    document.getElementById('CurrentQuScore').innerHTML = "You have " + score[i][j] + ' points on this question';
    ScoreTotal.push(score[i][j])
    document.getElementById("Rolling Score").innerHTML="Thanks for taking this quiz " +"Thanks for taking this quiz " +"Your total score is"+'<br>'+ScoreTotal.reduce(getSum);
    }else{
      ans2.style.color = 'white';
      ans3.style.color = 'white';
      document.getElementById('intro').style.display = 'none';
      ans2.style.backgroundColor = 'red';
      ans3.style.backgroundColor = 'greenyellow';
      document.getElementById("Finish").style.display = "inline";
    document.getElementById("CurrentQuScore").style.display = "block";
          ans1.disabled = true;
          ans2.disabled = true;
    ans3.disabled = true;
    ScoreTotal.push(score[i][j])
    document.getElementById('CurrentQuScore').innerHTML = "You have " + score[i][j] + ' points on this question';
    document.getElementById("Rolling Score").innerHTML="Thanks for taking this quiz " + " Your total score is"+'<br>'+ScoreTotal.reduce(getSum);
    }
}
function Answer3Select(){
  if (i < Questions.length - 1){
    j=2;
    ans3.style.color = 'white';
    ans3.style.backgroundColor = 'greenyellow';
    document.getElementById('Next').style.display = "inline";
    ans1.disabled = true;
    document.getElementById('Answer2').disabled = true;
    document.getElementById('Answer3').disabled = true;
    document.getElementById('CurrentQuScore').style.display = 'block';
    document.getElementById('CurrentQuScore').innerHTML = "You have " + score[i][j] + ' points on this question';
    ScoreTotal.push(score[i][j])
    document.getElementById("Rolling Score").innerHTML="Thanks for taking this quiz " +"Your total score is"+'<br>'+ScoreTotal.reduce(getSum);
    }else{
      ans3.style.color = 'white';
      document.getElementById('intro').style.display = 'none';
      ans3.style.backgroundColor = 'greenyellow';
      document.getElementById("Finish").style.display = "inline";
    document.getElementById("CurrentQuScore").style.display = "block";
          ans1.disabled = true;
          ans2.disabled = true;
    ans3.disabled = true;
    ScoreTotal.push(score[i][j])
    document.getElementById('CurrentQuScore').innerHTML = "You have " + score[i][j] + ' points on this question';
    document.getElementById("Rolling Score").innerHTML="Thanks for taking this quiz " +"Your total score is"+'<br>'+ScoreTotal.reduce(getSum);
    }
}