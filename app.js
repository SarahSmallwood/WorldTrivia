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

function showDirections(){
    let howtoPlay = document.querySelector(".directions");
    if(howtoPlay.style.display == 'none'){
        howtoPlay.style.display = 'block';
    }else {
        howtoPlay.style.display = 'none';
    }
}
const Qquestions = [{
    
 
},
{
    q2: "The world's largest source of oxygen comes from where in South America?",
    a2:[{ text: "Andes Mountains", isCorrect: false },
    { text: "Patagonia Chile", isCorrect: false },
    { text: "Lake Titicaka", isCorrect: false },
    { text: "Amazon Rainforest", isCorrect: true }
    ]
},
{
    q3: "What is considered the lowest geographical point in North America?",
    a3: [{ text: "Death Valley", isCorrect: true },
    { text: "Mexico City", isCorrect: false },
    { text: "New Orleans, Lousiana", isCorrect: false },
    { text: "Great Salt Lake", isCorrect: false }
    ]  
},
{
    q4: "Which river in Africa is the planet's longest?",
    a4: [{ text: "Zambezi River", isCorrect: false },
    { text: "Nile River", isCorrect: true },
    { text: "Snake River", isCorrect: false },
    { text: "Congo River", isCorrect: false }
    ]  
},
{
    q5: "Asia holds the largest percentage of the world's population. Which Asian country has the most people?",
    a5: [{ text: "China", isCorrect: false },
    { text: "India", isCorrect: true },
    { text: "Vietnam", isCorrect: false },
    { text: "Bangladesh", isCorrect: false }
    ]   
},
{
    q6: "In Australia, what is the largest ecosystem in the world?",
    a6: [{ text: "The Outback", isCorrect: false },
    { text: "The Bush", isCorrect: false },
    { text: "Great Barrier Reef", isCorrect: true },
    { text: "Australian Alps", isCorrect: false }
    ]   
},
{
    q7: "The most visited attraction in Europe is ______________",
    a7: [{ text: "Stone Henge", isCorrect: false },
    { text: "The Louvre", isCorrect: true },
    { text: "Eiffel Tower", isCorrect: false },
    { text: "Rome Colusseum", isCorrect: false }
    ]   
}
]

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
    { text: "70%", isCorrect: false }
    ]
}
function showQuestion() {
    let titleDiv = document.getElementById('questionsAN');
    titleDiv.textContent = q.titleOne;
  }
  showQuestion();



function showQuiz2(){
    let jungle = document.querySelector(".southAQuiz");
    if(jungle.style.display == 'none'){
        jungle.style.display = 'block';
    }else {
        jungle.style.display = 'none';
    }
}
function showQuiz3(){
    let canyon = document.querySelector(".northAQuiz");
    if(canyon.style.display == 'none'){
        canyon.style.display = 'block';
    }else {
        canyon.style.display = 'none';
    }
}
function showQuiz4(){
    let lion = document.querySelector(".africaQuiz");
    if(lion.style.display == 'none'){
        lion.style.display = 'block';
    }else {
        lion.style.display = 'none';
    }
}
function showQuiz5(){
    let koala = document.querySelector(".australiaQ");
    if(koala.style.display == 'none'){
        koala.style.display = 'block';
    }else {
        koala.style.display = 'none';
    }
}
function showQuiz6(){
    let everest = document.querySelector(".asiaQuiz");
    if(everest.style.display == 'none'){
        everest.style.display = 'block';
    }else {
        everest.style.display = 'none';
    }
}
function showQuiz7(){
    let tower = document.querySelector(".europeQuiz");
    if(tower.style.display == 'none'){
        tower.style.display = 'block';
    }else {
        tower.style.display = 'none';
    }
}



// let gameStage = [one, two, three, four, five, six, seven]
//Round One
// Antarctica
// Background Image change to Ice
// Button Start Round

//Ice Everywhere!! You are in danger of freezing to death
// Only your survival gear will save you
//Answer World Trivia to access survival backpack

// Trivia Box
// Question
// three answer selections
// if wrong answers, game over
//correct answer then next round


// let one = {
//     name: "Antarctica",
//     image:URL(),

// }

//Next Round

//Round Two
//South America
//Background Image change to Amazon
//Button Start Round

//Lost in the Jungle
//The trail is too thick for you to see through the jungle to find your way. You keep becoming trapped in the vines!
//Answer World Trivia to access survival backpack

// Trivia Box
// Question
// three answer selections
// if wrong answers, game over
//correct answer then next round


// let two = {
//     name: "South America",
//     image:URL(),
//     trivia:
//     results

// }

//Next Round

//Round Three
//North America
//Grand Canyon Flood
//A hike through America's greatest wonder has turned to disaster. A brutal rainstorm has filled some of the canyon and turned to a flash flood.
// Trivia Box
// Question
// three answer selections
// if wrong answers, game over
//correct answer then next round

// let three = {
//     name: "North America",
//     image: URL(),
//     trivia:
//     results:

// };

//Next Round


//Round Four
//Africa
//You've explored Africa from Mt. Kilamanjaro to Cape Town South Africa, but there is one pest you cant escape from
// MOSQUITOS!!!
// Trivia Box
// Question
// three answer selections
// if wrong answers, game over
//correct answer then next round

// let four = {
//     name: "Africa",
//     image:URL(),
//     trivia:
//     results:

// };

//Next Round

//Round Five
//Asia
//Let's try extreme tourism! How about you visit the highest point on Earth, Mt. Everest!
//The higher up you go, the harder it is to breathe
// Trivia Box
// Question
// three answer selections
// if wrong answers, game over
//correct answer then next round


// let five = {
//     name: "Asia",
//     image: URL(),
//     trivia:,
//     results:,

// };

//Next Round

//Round Six
//Australia
//Adventures on the Outback
// Crikey!! A snake bite!! 
// Trivia Box
// Question
// three answer selections
// if wrong answers, game over
//correct answer then next round


// let six = {
//     name: "Australia",
//     image: URL(),
//     trivia:,
//     results:,

// };

//Next Round

//Round Seven
//Europe
//Paris is beautiful, but climbing the Eiffel Tower was not your best idea.
//// Trivia Box
// Question
// three answer selections
// if wrong answers, game over
//correct answer then next round


// let seven = {
//     name: "Europe",
//     image: URL(),
//     trivia:,
//     results:,

// };













