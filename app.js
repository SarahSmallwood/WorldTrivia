


//Game Space 
// Location Info
//Level One
//Seven Continents so seven rounds
(function () {
    
    function showQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    quizCard.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(number in currentQuestion.answers){

          // ...add an HTML radio button
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

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    quizCard.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${quizCard.length}`;
  }

  function showCard(n) {
    cards[currentCard].classList.remove('active-card');
    cards[n].classList.add('active-card');
    currentCard = n;
    if(currentCard === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentCard === cards.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
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



// Function to show game directions

function showDirections(){
    let howtoPlay = document.querySelector(".directions");
    if(howtoPlay.style.display == 'none'){
        howtoPlay.style.display = 'block';
    }else {
        howtoPlay.style.display = 'none';
    }
};

//function to show quiz
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
    

// Quiz answer Data in array 
// correct answer is underneath each quiz answer set 
// and will be called upon in later function to keep score of the quiz
const quizCard = [
    {
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
  
    // Event listeners
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousCard);
nextButton.addEventListener("click", showNextCard);


})();

// function showQuestion(selector) {

//     let titleDiv = document.getElementById(`${selector}Question`);
//     titleDiv.textContent = questionList[selector].question;
    

//     consoleToScreen(`${selector}`)
// }

// function consoleToScreen(selector) {
//     let optionOne = document.getElementById(`${selector}OptionOne`);

//     optionOne.textContent = questionList[selector].options[0]

//     let optionTwo = document.getElementById(`${selector}OptionTwo`);

//     optionTwo.textContent = questionList[selector].options[1]

//     let optionThree = document.getElementById(`${selector}OptionThree`);

//     optionThree.textContent = questionList[selector].options[2]

//     let optionFour = document.getElementById(`${selector}OptionFour`);

//     optionFour.textContent = questionList[selector].options[3]
// }
// const submitButton = document.getElementById('submit');
// const resultsContainer = document.getElementById('results');


// function checkAnswer(selector) {
//     document.getElementById(questionList.selector.answer).checked

// }

// // Calling function to show questions

// showQuestion('.antarcticaQ');
// showQuestion('.southAQuiz');
// showQuestion('.northAQuiz');
// showQuestion('.africaQuiz');
// showQuestion('.australiaQ');
// showQuestion('.asiaQuiz');
// showQuestion('.europeQuiz');




// // 


// // Answer options for questions functionality
    
    
//     // Start the quiz right away
//     // loadQuestion(current);
//     // loadAnswers(current);

    

