const quizdata = [
    {
        question: "What is the full form of CSS?",
        a: "Casscading Style sheets",
        b: "Cascading style sheets",
        c: "Hypertext mark up lanuage",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What is the most used programming language?",
        a: "java",
        b: "Kotlin",
        c: "JavaScript",
        d: "python",
        correct: "c",
    },
    {
        question: "What is my Name?",
        a: "Riu",
        b: "Anjli",
        c: "Priya",
        d: "Riya",
        correct: "d" ,
    },
    {
        question: "Which year javascript launched?",
        a: "1995",
        b: "1993",
        c: "1996",
        d: "1997",
        correct: "a",
    },
    {
        question: "What is my Age?",
        a: "12",
        b: "18",
        c: "21",
        d: "30",
        correct: "c" ,
    },
];

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentquiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    
    deSelect();

    const currentquizData = quizdata[currentquiz];
   
    questionEl.innerText = currentquizData.question;
   
    a_text.innerText = currentquizData.a;
    b_text.innerText = currentquizData.b;
    c_text.innerText = currentquizData.c;
    d_text.innerText = currentquizData.d;

}
function getSelect(){
    
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;

}
function deSelect(){
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
        
    });

}

submitBtn.addEventListener("click", () => {
    
    const answer = getSelect();
    
    console.log(answer);

    if(answer){
        if(answer == quizdata[currentquiz].correct){
            score++;
            
        }
        currentquiz++;
         if(currentquiz < quizdata.length){
             loadQuiz();
            }else{
                quiz.innerHTML = `<h2>You have 
                answered correctly at ${score}/${quizdata.length} 
                questions.</h2> 
                
                <button onclick="location.reload()">Reload</button>`;
             }
            }
});