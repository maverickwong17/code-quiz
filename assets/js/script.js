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
var questions = {
    q1 : { question : "Where is the correct place to insert a JavaScript?",
        option1: {info: "Both the <head> section and the <body> section are correct", correct: true },
        option2: {info: "The <head> section", correct : false},
        option3: {info: "The <body> section", correct : false},
        option4: {info: "Neither the <head> section or the <body> section are correct", correct : false}
    },
    q2 : { question : "How do you write \"Hello World\" in an alert box?",
        option1: {info: "msgBox(\"Hello World\");", correct : false},
        option2: {info: "alert(\"Hello World\");", correct: true },
        option3: {info: "msg(\"Hello World\");", correct : false},
        option4: {info: "alertBox(\"Hello World\");", correct : false}
    },
    q3 : { question : "How does a FOR loop start?",
        option1: {info: "for (i = 0; i <= 5)", correct : false},
        option2: {info: "for (i <= 5; i++)", correct : false},
        option3: {info: "for i = 1 to 5", correct : false},
        option1: {info: "for (i = 0; i <= 5; i++)", correct: true },
    },
    q4 : { question : "How do you create a function in JavaScript?",
        option1: {info: "function:myFunction()", correct : false},
        option2: {info: "function.myFunction()", correct : false},
        option3: {info: "function myFunction()", correct: true },
        option4: {info: "function = myFunction()", correct : false}
    },
    q5 : { question : "How to write an IF statement in JavaScript?",
        option1: {info: "if (i == 5)", correct: true },
        option2: {info: "if i = 5", correct : false},
        option3: {info: "if i = 5 then", correct : false},
        option4: {info: "if i == 5 then", correct : false}
    }
}

//Timer
var timeLeft = 61
function setTime() {
    var timerIntterval = setInterval(function(){
        timeLeft--
        timer.textContent = "Timer : " + timeLeft;
        if(timeLeft === 0){
            clearInterval(timerIntterval);
        } 
    }, 1000)
}



//begin quiz
begin.addEventListener("click", function(){
    begin.setAttribute("style", "visibility : hidden");
    setTime();
    container.setAttribute("style", "visibility: visible");
}
)