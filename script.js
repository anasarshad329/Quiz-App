const quizData = [
  {
    question: "How many people did The Professor recruit to carry out the plan to occupy the Royal Mint of Spain?",

    a: " 8",
    b: " 9",
    c: " 1",
    d: " 1",
    correct: "a",
  },
  {
    question: "How much currency does the gang print at the Royal Mint?",

    a: "  879 million euros",
    b: " 926 million euros",
    c: " 984 million euros",
    d: "  777 million euros",
    correct: "c",
  },
  {
    question: "The Professor’s first name is eventually revealed. What is it?",

    a: " Andrés",
    b: " Aníbal",
    c: " Sergio",
    d: " Racquel",
    correct: "c",
  },
  {
    question: "Before giving up on society and turning to a life of crime, what was Moscow’s occupation?",

    a: " Hacker",
    b: " Soldier",
    c: " Miner",
    d: " Clerk",
    correct: "c",
  },
  {
    question: "The show is actually called La Casa de Papel, which literally translates to what?",

    a: " House Of Paper",
    b: " The Outcasts",
    c: " The House of Outcasts",
    d: " The House",
    correct: "a",
  },
  {
    question: "In which country does Raquel track the Professor after the first heist?",

    a: " Philippines",
    b: " Thailand",
    c: " China",
    d: " Malaysia",
    correct: "a",
  },
  {
    question: "“Let the matriarchy begin”: Whose words are these?",

    a: " Tokyo",
    b: " Nairobi",
    c: " Raquel",
    d: " Professor",
    correct: "b",
  },
  {
    question: " What is the name of Berlin’s girlfriend who comes to visit at the Monastery?",

    a: " Jessica",
    b: " Maniana",
    c: " Selena",
    d: " Tatiana",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});