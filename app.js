// Globe Icon 
// Press to show game and hide button
// function showGame(){
//     let globe = document.getElementById('startGame');
//     let gameScreen = document.getElementById('game')
//     if (gameScreen.style.display = 'none'){
//         gameScreen.style.display = 'block';
//         globe.style.display = 'none';
//     } else {
//         gameScreen.style.display = 'none';
//         globe.style.display = 'block';
//     }
    
// }


//Game Space 
// Location Info
//Level One
//Seven Continents so seven rounds
let score = 0


const consoletoScreen=(alts)=>{

}

function showDirections(){
    let howtoPlay = document.querySelector(".directions");
    if(howtoPlay.style.display == 'none'){
        howtoPlay.style.display = 'block';
    }else {
        howtoPlay.style.display = 'none';
    }
}


function showQuiz1(){
    let ice = document.querySelector(".antarcticaQ");
    if(ice.style.display == 'none'){
        ice.style.display = 'block';
    }else {
        ice.style.display = 'none';
    }
}
let q1 = { 
    titleOne: "Antarctica contains what percentage of total ice on Earth?",
    a1: [{ text: "50%", isCorrect: false },
    { text: "20%", isCorrect: false },
    { text: "90%", isCorrect: true },
    { text: "70%", isCorrect: false },
    ]
}

// a -> 0, b -> 1 , c -> 2,.... d, e
// list of continents -> [a, b, c, d, e....]
// list of correct answers -> [2, 3, 0, 1, ...]
// list of questions ->
// [
    // [
        //  "question 1",
        //  "question 2"
        // ].
    // [
    //  "question 1",
    //  "question 2"
    // ].
    // [
    //  "question 1",
    //  "question 2"
    // ].
    // ...
// 
// ]

let questionList =
    [
        'Antarctica contains what percentage of total ice on Earth?',
        'The worlds largest source of oxygen comes from where in South America',
        'What is considered the lowest geographical point in North America?',
        'Which river in Africa is the planets longest?',
        'In Australia, what is the largest ecosystem in the world?',
        'Asia holds the largest percentage of the worlds population. Which Asian country has the most people?',
        'The most visited attraction in Europe is ______________'

    ]
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
            "Great Salt Lake"
        ],
        // Africa Answers
        [
            "Zambezi River",
            "Nile River",
            "Snake River",
            "Congo River"
        ],
        // Australia Answers
        [
            "The Outback",
            "The Bush",
            "Great Barrier Reef",
            "Australian Alps"  
        ],
        // Asia Answers
        [
            "China",
            "India",
            "Vietnam",
            "Bangladesh"
        ],
        // europe answers
        [
            "Stone Henge",
            "The Louvre",
            "Eiffel Tower",
            "Rome Colusseum"
        ]
    ]

function showQuestion(index, elementId, selector) {

    let titleDiv = document.getElementById(elementId);
    titleDiv.textContent = questionList[index];

    consoleToScreen(selector, answerList[index])
}

function consoleToScreen(selector, answerList) {
    let answerOne = document.getElementById(`${selector}AnswerOne`);
    answerOne.textContent = answerList[0]

    let answerTwo = document.getElementById(selector + 'AnswerTwo');
    answerTwo.textContent = answerList[1]

    let answerThree = document.getElementById(selector + 'AnswerThree');
    answerThree.textContent = answerList[2]

    let answerFour = document.getElementById(selector + 'AnswerFour');
    answerFour.textContent = answerList[3]
}

// // TODO - could be deleted
// function showQuestion() {
//     let titleDiv = document.getElementById('questionsAN');
//     titleDiv.textContent = q1.titleOne;
  
//     let alts = document.querySelectorAll('.answersAN');
//     consoletoScreen(`${alts}`);
//     alts.forEach(function(element, index){
//         element.textContent = q1.a1[index];
//     });
// }
showQuestion(0, 'questionsAN', 'antarctica');
showQuestion(1, 'questionsSA', 'southAmerica');
showQuestion(2, 'questionsNA', 'northAmerica');
showQuestion(3, 'questionsAF', 'africa');
showQuestion(4, 'questionsAU', 'australia');
showQuestion(5, 'questionsAA', 'asia');
showQuestion(6, 'questionsEU', 'europe');



function showQuiz2(){
    let jungle = document.querySelector(".southAQuiz");
    if(jungle.style.display == 'none'){
        jungle.style.display = 'block';
    } else {
        jungle.style.display = 'none';
    }
}
let q2 = {
    title2: "The world's largest source of oxygen comes from where in South America?",
    a2:[{ text: "Andes Mountains", isCorrect: false },
    { text: "Patagonia Chile", isCorrect: false },
    { text: "Lake Titicaka", isCorrect: false },
    { text: "Amazon Rainforest", isCorrect: true }
    ]
}

// TODO - could be deleted

//   showQuestion2();

function showQuiz3(){
    let canyon = document.querySelector(".northAQuiz");
    if(canyon.style.display == 'none'){
        canyon.style.display = 'block';
    }else {
        canyon.style.display = 'none';
    }
}
let q3 = {
    title3: "What is considered the lowest geographical point in North America?",
    a3: [{ text: "Death Valley", isCorrect: true },
    { text: "Mexico City", isCorrect: false },
    { text: "New Orleans, Lousiana", isCorrect: false },
    { text: "Great Salt Lake", isCorrect: false }
    ]  
}

// TODO - could be deleted


function showQuiz4(){
    let lion = document.querySelector(".africaQuiz");
    if(lion.style.display == 'none'){
        lion.style.display = 'block';
    }else {
        lion.style.display = 'none';
    }
}
let q4 = {
    title4: "Which river in Africa is the planet's longest?",
    a4: [{ text: "Zambezi River", isCorrect: false },
    { text: "Nile River", isCorrect: true },
    { text: "Snake River", isCorrect: false },
    { text: "Congo River", isCorrect: false }
    ]  
}

// TODO - could be deleted


function showQuiz5(){
    let koala = document.querySelector(".australiaQ");
    if(koala.style.display == 'none'){
        koala.style.display = 'block';
    }else {
        koala.style.display = 'none';
    }
}
let q5 = {
    title5: [{ text: "The Outback", isCorrect: false },
    { text: "The Bush", isCorrect: false },
    { text: "Great Barrier Reef", isCorrect: true },
    { text: "Australian Alps", isCorrect: false }
    ]
} 

// TODO - could be deleted


function showQuiz6(){
    let everest = document.querySelector(".asiaQuiz");
    if(everest.style.display == 'none'){
        everest.style.display = 'block';
    }else {
        everest.style.display = 'none';
    }
}
let q6 = {
    title6: "Asia holds the largest percentage of the world's population. Which Asian country has the most people?",
    a5: [{ text: "China", isCorrect: false },
    { text: "India", isCorrect: true },
    { text: "Vietnam", isCorrect: false },
    { text: "Bangladesh", isCorrect: false }
    ]  
} 


// TODO - could be deleted



function showQuiz7(){
    let tower = document.querySelector(".europeQuiz");
    if(tower.style.display == 'none'){
        tower.style.display = 'block';
    }else {
        tower.style.display = 'none';
    }
}
let q7 = {
    title7: "The most visited attraction in Europe is ______________",
    a7: [{ text: "Stone Henge", isCorrect: false },
    { text: "The Louvre", isCorrect: true },
    { text: "Eiffel Tower", isCorrect: false },
    { text: "Rome Colusseum", isCorrect: false }
    ] 
}

let answerOption = document.querySelector('.answerList li');
let submitButton = document.querySelector('.submit');


answerOption.forEach(option => {
    option.addEventListener('click', function () {
        console.log(submitButton.getAttribute('type'));

        answerSelect(option, submitButton, answerOption);
    });
});







