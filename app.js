


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

function showDirections(){
    let howtoPlay = document.querySelector(".directions");
    if(howtoPlay.style.display == 'none'){
        howtoPlay.style.display = 'block';
    }else {
        howtoPlay.style.display = 'none';
    }
};

function showQuiz(selector) {
    let element = document.querySelector(selector);

    if (element.style.display === 'none' || element.style.display === ''){
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}




let correctAnswerList = [2, 3, 0, 1, 2, 1, 1]
let answerList =
    [
        // Antartica answers
        [
            "50",
            '20',
            '90',
            '70'
        ],
        // South America answers
        [
            "Andes Mountains", 
            "Patagonia Chile", 
            "Lake Titicaka", 
            "Amazon Rainforest"
        ],
        // NA Answers 
        [
            "Death Valley", 
            "Mexico City",
            "New Orleans, Lousiana",
            "Great Salt Lake", 0
        ],
        // Africa Answers
        [
            "Zambezi River",
            "Nile River",
            "Snake River",
            "Congo River", 1
        ],
        // Australia Answers
        [
            "The Outback",
            "The Bush",
            "Great Barrier Reef",
            "Australian Alps", 2  
        ],
        // Asia Answers
        [
            "China",
            "India",
            "Vietnam",
            "Bangladesh", 1
        ],
        // europe answers
        [
            "Stone Henge",
            "The Louvre",
            "Eiffel Tower",
            "Rome Colusseum", 1
        ]
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

showQuestion('.antarcticaQ');
showQuestion('.southAQuiz');
showQuestion('.northAQuiz');
showQuestion('.africaQuiz');
showQuestion('.australiaQ');
showQuestion('.asiaQuiz');
showQuestion('.europeQuiz');






// let q2 = {
//     title2: "The world's largest source of oxygen comes from where in South America?",
//     a2:[{ text: "Andes Mountains", isCorrect: false },
//     { text: "Patagonia Chile", isCorrect: false },
//     { text: "Lake Titicaca", isCorrect: false },
//     { text: "Amazon Rainforest", isCorrect: true }
//     ]
// }

// TODO - could be deleted

//   showQuestion2();


// let q3 = {
//     title3: "What is considered the lowest geographical point in North America?",
//     a3: [{ text: "Death Valley", isCorrect: true },
//     { text: "Mexico City", isCorrect: false },
//     { text: "New Orleans, Lousiana", isCorrect: false },
//     { text: "Great Salt Lake", isCorrect: false }
//     ]  
// }

// TODO - could be deleted



// let q4 = {
//     title4: "Which river in Africa is the planet's longest?",
//     a4: [{ text: "Zambezi River", isCorrect: false },
//     { text: "Nile River", isCorrect: true },
//     { text: "Snake River", isCorrect: false },
//     { text: "Congo River", isCorrect: false }
//     ]  
// }

// TODO - could be deleted



// let q5 = {
//     title5: [{ text: "The Outback", isCorrect: false },
//     { text: "The Bush", isCorrect: false },
//     { text: "Great Barrier Reef", isCorrect: true },
//     { text: "Australian Alps", isCorrect: false }
//     ]
// } 

// TODO - could be deleted



// let q6 = {
//     title6: "Asia holds the largest percentage of the world's population. Which Asian country has the most people?",
//     a5: [{ button: "China", isCorrect: false },
//     { text: "India", isCorrect: true },
//     { text: "Vietnam", isCorrect: false },
//     { text: "Bangladesh", isCorrect: false }
//     ]  
// } 


// TODO - could be deleted




// let q7 = {
//     title7: "The most visited attraction in Europe is ______________",
//     a7: [{ text: "Stone Henge", isCorrect: false },
//     { text: "The Louvre", isCorrect: true },
//     { text: "Eiffel Tower", isCorrect: false },
//     { text: "Rome Colusseum", isCorrect: false }
//     ] 
// }



// Answer options for questions functionality
    
    
    // Start the quiz right away
    // loadQuestion(current);
    // loadAnswers(current);

    

