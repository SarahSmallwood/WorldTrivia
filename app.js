


//Game Space 
// Location Info
//Level One
//Seven Continents so seven rounds

//function to show directions
function showDirections(){
    let howtoPlay = document.querySelector(".directions");
    if(howtoPlay.style.display == 'none'){
        howtoPlay.style.display = 'block';
    }else {
        howtoPlay.style.display = 'none';
    }
};

showDirections();



(function () {
    
    
    function showQuiz(){
    
    const output = [];

    quizCard.forEach(
    (currentQuestion, questionNumber) => {

    const answers = [];
    for(number in currentQuestion.answers){

        answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${number}">
              ${number} :
              ${currentQuestion.answers[number]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="cards">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
}

  function showResults(){

    //Answer Container
    const answerContainers = quizContainer.querySelectorAll('.answers');

    //User answers
    let numCorrect = 0;

    
    quizCard.forEach( (currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
        if (numCorrect >= question.length) {

            quiz.innerHTML = "<h2>You got " + correct + " of " + question.length + " questions correct</h2>";
        
            if(correct == 0){
              quiz.innerHTML += "<h2> Catch more flights! You need more travel experience! </h2>";
            } 
          
            if(correct == 1){
              quiz.innerHTML += "<h2> Beginner World Traveler! Take more adventures! </h2>";
            } 
        
            if(correct == 2){
              quiz.innerHTML += "<h2> Travel Level : Basic </h2>";
            } 
        
            if(correct == 3){
              quiz.innerHTML += "<h2> Is this your first time around the world? </h2>";
            } 
            if(correct == 4){
                quiz.innerHTML += "<h2> You're Collecting Passport Stamps! Great Job! </h2>";
            }
            if(correct == 5){
                quiz.innerHTML += "<h2> Travel Level: Voyager! Keep up the great work! </h2>";
            }
            if(correct == 6){
                quiz.innerHTML += "<h2> Travel Level : EXPERT </h2>";
            }
            if(correct == 7){
                quiz.innerHTML += "<h2> Travel Level : EXPERT </h2>";
            }
        
            get("quiz_status").innerHTML = "Travel completed";
            //reset everything for the next quiz
            numCorrect = 0;
            correct = 0;
        
            quiz.innerHTML += "<button onclick='restartQuiz()'>BACK HOME</button>";
        
            return false;
          }
          get("quiz_status").innerHTML = "Voyage " + (numCorrect + 1) + " of " + question.length;
      } 
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${quizCard.length}`;
  }

  function showCard(n) {
    cards[currentCard].classList.remove('active-card');
    cards[n].classList.add('active-card');
    currentCard = n;
    // $("quizImage").src = quiz[currentQuestion].image;
    if(currentCard === 0){
      previousButton.style.display = 'none';
    } else{
      previousButton.style.display = 'inline-block';
    }
    if(currentCard === cards.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    } else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextCard() {
    showCard(currentCard + 1);
  }

  function showPreviousCard() {
    showCard(currentCard - 1);
  }


//function to show quiz
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
    

// Quiz answer Data in array 
// correct answer is underneath each quiz answer set 
// and will be called upon in later function to keep score of the quiz
const quizCard = [
    {
        img: "https://www.betterphotography.com/images/Blog2022/BoothIsland.gif",
        question: "Antarctica contains what percentage of total ice on Earth?",
        answers: {
           0: "50",
           1: '20',
           2:'90',
           3:'70'
        },
        correctAnswer: "2"
    },
    {
        img: "https://media0.giphy.com/media/xyvHOUQzfMfba/giphy.gif",
        question: "The worlds largest source of oxygen comes from where in South America",
        answers: {
           0: "Andes Mountains", 
           1: "Patagonia Chile", 
           2:"Lake Titicaka", 
           3:"Amazon Rainforest"    
        },
        correctAnswer: "3"
    },
    {
        img: "https://64.media.tumblr.com/a964458bee35dd2c7411a70b0125c437/tumblr_npeokel6ip1qzxxsgo1_500.gif",
        question: "What is considered the lowest geographical point in North America?",
        answers: {
            0: "Death Valley", 
            1: "Mexico City",
            2: "New Orleans, Lousiana",
            3: "Great Salt Lake"
        },
        correctAnswer: "0"

    },
    {
        img: "https://media4.giphy.com/media/2jMjVBTC1cwaiIUcN7/giphy.gif",
        question: "Which river in Africa is the planets longest?",
        answers: {
            0: "Zambezi River",
            1: "Nile River",
            2: "Snake River",
            3: "Congo River"
        },
        correctAnswer: "1"
    },
    {
        img: "https://i.gifer.com/Irq.gif",
        question: "In Australia, what is the largest ecosystem in the world?",
        answers: {
            0: "The Outback",
            1: "The Bush",
            2: "Great Barrier Reef",
            3: "Australian Alps" 
        },
        correctAnswer: "2"
    },
    {
        img: "https://media3.giphy.com/media/11MKLWSDvMVSp2/giphy.gif",
        question: "Asia holds the largest percentage of the worlds population. Which Asian country has the most people?",
        answers: {
            0: "China",
            1: "India",
            2: "Vietnam",
            3: "Bangladesh" 
        },
        correctAnswer: "1"
    },
    {
        img:"https://i.makeagif.com/media/4-01-2016/3wGcZ0.gif",
        question: "The most visited attraction in Europe is ______________",
        answers: {
            0: "Stone Henge",
            1: "The Louvre",
            2: "Eiffel Tower",
            3: "Rome Colusseum", 
        },
        correctAnswer: "1"
    }
];

showQuiz();
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const cards = document.querySelectorAll(".cards");
let currentCard = 0;  


// Show the first slide
showCard(currentCard);


submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousCard);
nextButton.addEventListener("click", showNextCard);

})();
