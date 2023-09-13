// all answer data should store in a array

const quizData = [
  {
    question: "What's your name?",
    a: "Baitul",
    b: "Md Baitul Amin",
    c: "Sakib",
    d: "Antu",
    correct: "a",
  },
  {
    question: "What's your mother name?",
    a: "Sumi",
    b: "Ferdoushe",
    c: "Jannatul",
    d: "Jannatul ferdoushe",
    correct: "d",
  },
  {
    question: "What's your father ame?",
    a: "Raju",
    b: "Amin",
    c: "Sakib",
    d: "Amin",
    correct: "a",
  },
  {
    question: "What's your pet name?",
    a: "Roy",
    b: "Ferari",
    c: "Candy",
    d: "meow",
    correct: "c",
  },
];

// declare all importnat variables here
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

// deselect all check ans for just extra click
const deselectAnswer = () => {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
};

// store the current qus and score to be updated by function
const score = 0;
const currentQuestion = 0;

loadQuiz();
function loadQuiz() {
  deselectAnswer();

  const currentQuizData = quizData[currentQuestion];

  question.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

// check the ans and compare with check

function checkAnswer() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

// update the score
submitBtn.addEventListener("click", () => {
  const answer = checkAnswer();

  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion > quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> 
            
            <button onclick="location.reload()">Reload</button>`;
    }
  }
});
