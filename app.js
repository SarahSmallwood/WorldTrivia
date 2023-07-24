


//Game Space 
// Location Info
//Level One
//Seven Continents so seven rounds

const questionList = {
    '.antarcticaQ': {
        'question': 'Antarctica contains what percentage of total ice on Earth?',
        'options': ["50", '20', '90', '70'],
        'answer': 'antarcticaQAnswerThree'
    },
    '.southAQuiz': {
        'question': 'The worlds largest source of oxygen comes from where in South America',
        'options': ['Andes Mountains', 'Patagonia Chile', 'Lake Titicaka', 'Amazon Rainforest'],
        'answer': 'southAQuizAnswerThree'
    },
    '.northAQuiz': {
        'question': 'What is considered the lowest geographical point in North America?',
        'options': ['Death Valley', 'Mexico City', 'New Orleans, Lousiana', 'Great Salt Lake'],
        'answer': 'northAQuizAnswerZero'
    },
    '.africaQuiz': {
        'question': 'Which river in Africa is the planets longest?',
        'options': ['Zambezi River', 'Nile River', 'Snake River', 'Congo River'],
        'answer': 'africaQuizAnswerOne'
    },
    '.australiaQ': {
        'question': 'In Australia, what is the largest ecosystem in the world?',
        'options': ['The Outback', 'The Bush', 'Great Barrier Reef', 'Australian Alps'],
        'answer': 'australiaQAnswerTwo'
    },
    '.asiaQuiz': {
        'question': 'Asia holds the largest percentage of the worlds population. Which Asian country has the most people?',
        'options': ['China', 'India', 'Vietnam', 'Bangladesh'],
        'answer': 'asiaQuizAnswerOne'
    },
    '.europeQuiz': {
        'question': 'The most visited attraction in Europe is ______________',
        'options': ['Stone Henge', 'The Louvre', 'Eiffel Tower', 'Rome Colusseum'],
        'answer': 'europeQuizAnswerOne'
    }
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

function showQuiz(selector) {
    let element = document.querySelector(selector);

    if (element.style.display === 'none' || element.style.display === ''){
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}


// Quiz answer Data in array 
// correct answer is underneath each quiz answer set 
// and will be called upon in later function to keep score of the quiz
const quizAnswers = [
    {
        a1: {
           0: "50",
           1: '20',
           2:'90',
           3:'70'
        },
        correctAnswer: 2
    },
    {
        a2: {
           0: "Andes Mountains", 
           1: "Patagonia Chile", 
           2:"Lake Titicaka", 
           3:"Amazon Rainforest"    
        },
        correctAnswer: 3
    },
    {
        a3: {
            0: "Death Valley", 
            1: "Mexico City",
            2: "New Orleans, Lousiana",
            3: "Great Salt Lake"
        },
        correctAnswer: 0

    },
    {
        a4: {
            0: "Zambezi River",
            1: "Nile River",
            2: "Snake River",
            3: "Congo River"
        },
        correctAnswer: 1
    },
    {
        a5: {
            0: "The Outback",
            1: "The Bush",
            2: "Great Barrier Reef",
            3: "Australian Alps" 
        },
        correctAnswer: 2
    },
    {
        a6: {
            0: "China",
            1: "India",
            2: "Vietnam",
            3: "Bangladesh" 
        },
        correctAnswer: 1
    },
    {
        a7: {
            0: "Stone Henge",
            1: "The Louvre",
            2: "Eiffel Tower",
            3: "Rome Colusseum", 
        },
        correctAnswer: 1
    }
]



function showQuestion(selector) {

    let titleDiv = document.getElementById(`${selector}Question`);
    titleDiv.textContent = questionList[selector].question;
    

    consoleToScreen(`${selector}`)
}

function consoleToScreen(selector) {
    let optionOne = document.getElementById(`${selector}OptionOne`);

    optionOne.textContent = questionList[selector].options[0]

    let optionTwo = document.getElementById(`${selector}OptionTwo`);

    optionTwo.textContent = questionList[selector].options[1]

    let optionThree = document.getElementById(`${selector}OptionThree`);

    optionThree.textContent = questionList[selector].options[2]

    let optionFour = document.getElementById(`${selector}OptionFour`);

    optionFour.textContent = questionList[selector].options[3]
}

function checkAnswer(selector) {
    document.getElementById(questionList.selector.answer).checked

}

// Calling function to show questions

showQuestion('.antarcticaQ');
showQuestion('.southAQuiz');
showQuestion('.northAQuiz');
showQuestion('.africaQuiz');
showQuestion('.australiaQ');
showQuestion('.asiaQuiz');
showQuestion('.europeQuiz');




// 


// Answer options for questions functionality
    
    
    // Start the quiz right away
    // loadQuestion(current);
    // loadAnswers(current);

    

