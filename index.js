

var form = document.querySelector('input');
var clear = document.querySelector('.clear');
var submit = document.querySelector('.get-your-answer');
var favorite = document.querySelector('.favorite')
var eightBallImg = document.querySelector('.eight-ball-img');
var eightBallContainer = document.querySelector('.img-q-a-container');
var game = document.querySelector('.game-container');
form.addEventListener('keyup', checkForm);
submit.addEventListener('click', provideAnswer);
favorite.addEventListener('click', addFavorite);
var answer;
var userQuestion;
function addFavorite() {
  var table = `
      <div class="favorites-list">
        <div class="fav-q-a">
          <p class="fav-question">${userQuestion}</p>
          <p class="fav-answer">${answer}</p>
        </div>
      </div>`
    game.insertAdjacentHTML('afterend', table)
    favorite.setAttribute('disabled', 'disabled')

}



function provideAnswer(event) {
  eightBallContainer.innerHTML = '<p class="question"></p><h2 class="answer"></h2>';
  var questionDisplay = document.querySelector('.question');
  var answerDisplay = document.querySelector('.answer');
  userQuestion = form.value;
  questionDisplay.innerText = '"' + userQuestion + '"';
  var randomNumber = (Math.floor(Math.random() * answers.length));
  answer = answers[randomNumber];
  answerDisplay.innerText = answer;
  favorite.removeAttribute('disabled')
  form.value = '';
}


function checkForm(event) {
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
  if (eightBallContainer.innerHTML !== '<img class="eight-ball-img" src="./assets/eight-ball.png">') {
    eightBallContainer.innerHTML = '<img class="eight-ball-img" src="./assets/eight-ball.png">'
  }
  favorite.setAttribute('disabled', 'disabled')
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
