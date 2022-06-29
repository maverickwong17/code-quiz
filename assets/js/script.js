//define elements within the DOM
var container = document.querySelector("#container");
var questionhead = document.querySelector("#questionhead");
var answer = document.querySelectorAll(".answer");
var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var a4 = document.querySelector("#a4");
var timer = document.getElementById("timer")
var begin = document.getElementById("begin")

// container.setAttribute("style", "visibility: hidden");

// questions object to refer back to
var questions = [
    q1 = { question : "Where is the correct place to insert a JavaScript?",
        option : [{info: "Both the <head> section and the <body> section are correct", correct: true },
                  {info: "The <head> section", correct : false},
                  {info: "The <body> section", correct : false},
                  {info: "Neither the <head> section or the <body> section are correct", correct : false}
                ]
    },
    q2 = { question : "How do you write \"Hello World\" in an alert box?",
        option : [{info: "msgBox(\"Hello World\");", correct : false},
                  {info: "alert(\"Hello World\");", correct: true },
                  {info: "msg(\"Hello World\");", correct : false},
                  {info: "alertBox(\"Hello World\");", correct : false}
                ]
    },
    q3 = { question : "How does a FOR loop start?",
        option : [{info: "for (i = 0; i <= 5)", correct : false},
                  {info: "for (i <= 5; i++)", correct : false},
                  {info: "for i = 1 to 5", correct : false},
                  {info: "for (i = 0; i <= 5; i++)", correct: true }]
    },
    q4 = { question : "How do you create a function in JavaScript?",
        option : [{info: "function:myFunction()", correct : false},
                  {info: "function.myFunction()", correct : false},
                  {info: "function myFunction()", correct: true },
                  {info: "function = myFunction()", correct : false}
                ]
    },
    q5 = { question : "How to write an IF statement in JavaScript?",
        option : [{info: "if (i == 5)", correct: true },
                  {info: "if i = 5", correct : false},
                  {info: "if i = 5 then", correct : false},
                  {info: "if i == 5 then", correct : false}
                ]
    }
]

//Timer
var timeLeft = 46
function setTime() {
    var timerIntterval = setInterval(function(){
        timeLeft--
        timer.textContent = "Timer : " + timeLeft;
        // Gamer over
        if(timeLeft === 0 || id === 5){
            clearInterval(timerIntterval);
            quizOver()
        } 
    }, 1000)
}


//begin quiz through begin button
begin.addEventListener("click", function(){
    begin.setAttribute("style", "visibility : hidden");
    id = 0
    timeLeft = 46
    correct = 0
    setTime();
    container.setAttribute("style", "visibility: visible");
    addQA()
}
)

var id = 0
//Display questions and answers
function addQA() {
    questionhead.textContent = questions[id].question;
    a1.textContent = questions[id].option[0].info;
    a2.textContent = questions[id].option[1].info;
    a3.textContent = questions[id].option[2].info;
    a4.textContent = questions[id].option[3].info;
}  

ansArr = ["a1","a2",'a3','a4']
var correct = 0
//click answer
container.addEventListener("click", function(event){
    var element = event.target
    //data validate
    if(element.matches(".answer")){
        var ansID = ansArr.indexOf(element.id)
        //correct answer
        if (questions[id].option[ansID].correct){
        console.log(questions[id].option[ansID].correct)
        correct ++
        }
        //wrong answer
        else {timeLeft = timeLeft - 10;
        console.log("incorrect")}
        id++
        if (id <5)
        addQA()
    } 
})


var player = []
//gameover
function quizOver(){
    container.setAttribute("style", "visibility : hidden");
    console.log(timeLeft)
    var userInfo = prompt ("Enter your initials to save your score")
    var scoreInfo = {
        initials : userInfo,
        score : timeLeft
    }
    player[player.length + 1] = scoreInfo
    localStorage.setItem("playerStringify" , JSON.stringify (player))
    localStorage.setItem("scoreInfoStringify" , JSON.stringify (scoreInfo))

//quiz over go to highscore screen
    viewScoreEl.setAttribute("style", "display : reset");
    returnEl.setAttribute("style", "display : reset");
    clearEl.setAttribute("style", "display : reset");
}


var viewScoreEl = document.querySelector("#view-score")
//View Highscores
function viewscore(){
    
    var player = JSON.parse(localStorage.getItem("playerStringify"))
    console.log(player)
    // console.log(scoreInfo.initials)
    // console.log(scoreInfo.score)
}


// view/close highscore area
var viewHighscore = document.querySelector("#viewHighscore")
var returnEl = document.querySelector("#return")
var clearEl = document.querySelector("#clear")

viewHighscore.addEventListener("click", function(){
    begin.setAttribute("style", "visibility : hidden");
    viewScoreEl.setAttribute("style", "display : reset");
    returnEl.setAttribute("style", "display : reset");
    clearEl.setAttribute("style", "display : reset");
}
)

returnEl.addEventListener("click", function(){
    begin.setAttribute("style", "visibility : visible");
    viewScoreEl.setAttribute("style", "display : none");
    returnEl.setAttribute("style", "display : none");
    clearEl.setAttribute("style", "display : none");
}
)

// clear highscores
clearEl.addEventListener('click', function(){
    player = []
    localStorage.setItem("playerStringify" , JSON.stringify (player))
    console.log(player)
})


//initialize the page
function init(){
    container.setAttribute("style", "visibility: hidden");
    viewScoreEl.setAttribute("style", "display:none");
    returnEl.setAttribute("style", "display:none");
    clearEl.setAttribute("style", "display : none");
    viewscore()
}

init()