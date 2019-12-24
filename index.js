

var form = document.querySelector('input');
var clear = document.querySelector('.clear');
var submit = document.querySelector('.get-your-answer');
var questionDisplay = document.querySelector('.question');
var answerDisplay = document.querySelector('.answer');
var eightBallImg = document.querySelector('.eight-ball-img');
var eightBallContainer = document.querySelector('.img-container');

form.addEventListener('keyup', checkForm);
submit.addEventListener('click', provideAnswer);

function provideAnswer(event) {
  eightBallContainer.innerHTML = '';
  var userQuestion = form.value;
  questionDisplay.innerText = '"' + userQuestion + '"';
  var randomNumber = (Math.floor(Math.random() * answers.length));
  answerDisplay.innerText = answers[randomNumber];
}


function checkForm(event) {
  console.log(event.target.value)
  if (event.target.value !== "") {
    clear.removeAttribute('disabled');
    submit.removeAttribute('disabled');
  } else {
    clear.setAttribute('disabled', 'disabled');
    submit.setAttribute('disabled', 'disabled');
  }
}

clear.addEventListener('click', clearForm);

function clearForm() {
  form.value = '';
  questionDisplay.innerText = '';
  answerDisplay.innerText = '';
  if (eightBallContainer.innerHTML === '') {
    eightBallContainer.innerHTML = '<img class="eight-ball-img" src="./assets/eight-ball.png">'
  }
}


var answers = [
"It is certain.",
"It is decidedly so.",
"Without a doubt.",
"Yes - definitely.",
"You may rely on it.",
"As I see it, yes.",
"Most likely.",
"Outlook good.",
"Yes.",
"Signs point to yes.",
"Reply hazy, try again.",
"Ask again later.",
"Better not tell you now.",
"Cannot predict now.",
"Concentrate and ask again.",
"Don't count on it.",
"My reply is no.",
"My sources say no.",
"Outlook not so good.",
"Very doubtful."]
