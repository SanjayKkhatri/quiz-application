var quizQuestions = [
    {
        num: 1,
        question: "HTML stand for",
        Option: {
            a: "Hyper Text Markup Language",
            b: "Hyper Text Programming Language",
            c: "Hyper Text Styling Language",
            d: "Hyper Text Scripting Language",
        },
        answer: "Hyper Text Markup Language",
    },
    {
        num: 2,
        question: "Which type of Javascript language is",
        Option: {
            a: "Object-Oriented",
            b: "Object-Base",
            c: "Assembly Language",
            d: "High Level",
        },
        answer: "Object-Base",
    },
    {
        mum: 3,
        question: "The 'function' and 'var' are known as:",
        Option: {
            a: "Keywords",
            b: "Data Types",
            c: "Declaration Statements",
            d: "Prototypes",
        },
        answer: "Declaration Statements",
    },
    {
        num: 4,
        question: "Who is the current President of Pakistan",
        Option: {
            a: "Arif Alvi",
            b: "Imran Khan",
            c: "Nawaz Sharif",
            d: "Asif Zardari",
        },
        answer: "Arif Alvi",
    },
    {
        num: 5,
        question: "How many prayers are in a day",
        Option:{
            a: "6",
            b: "5",
            c: "3",
            d: "none",
        },
        answer: "5",
    },
    {
        num: 6,
        question: "How many total surah are in Quran",
        Option:{
            a: "113",
            b: "114",
            c: "112",
            d: "111",
        },
        answer: "114",
    },
    {
        num: 7,
        question: "The correct squence of HTML tags for starting a webpage is",
        Option: {
            a: "Head, Title, HTML, Body",
            b: "HTML, Body, Title, Head",
            c: "HTML, Head, Title, Body",
            d: "HTML, Title, Head, Body",
        },
        answer: "HTML, Head, Title, Body",
    },

];

var htmlQuestion = document.getElementById("htmlQuestion");
var htmlOptionLists = document.getElementsByClassName("htmlOptionList");
var nextQuesBtn = document.getElementById("nextQuesBtn");
var counterValue = document.getElementById("counterValue");
var quizBox = document.getElementById("quizBox");
var counter = 0;
var score = 0;
var resultValue = document.getElementById("resultValue");

function setQuestion() {
    htmlQuestion.innerHTML = quizQuestions[counter].question;
    htmlOptionLists[0].innerHTML = quizQuestions[counter].Option.a;
    htmlOptionLists[1].innerHTML = quizQuestions[counter].Option.b;
    htmlOptionLists[2].innerHTML = quizQuestions[counter].Option.c;
    htmlOptionLists[3].innerHTML = quizQuestions[counter].Option.d;
}

function nextQes(){
    counter++;

    console.log(counter);
    if(counter < quizQuestions.length){
        setQuestion();
        counterValue.innerHTML = counter + 1 + " / " + quizQuestions.length;
    }else{
        console.log("hello");
        quizBox.style.display = "none";
        resultValue.className = "show";
        resultValue.innerHTML = "Your Score is : " + score + " / 70";
    }
    // if(counter < quizQuestions.length)
        nextQuesBtn.className = "hide"

        for(var i = 0; i < htmlOptionLists.length; i++){
            htmlOptionLists[i].classList.remove("disabled");
            htmlOptionLists[i].style.backgroundColor = "white"
        }
}

function checkAns(e){

    nextQuesBtn.className = "show";
    if(e.innerHTML == quizQuestions[counter].answer){
        score += 10;
        console.log(score);
        e.style.backgroundColor = "green";
    }else{
        e.style.backgroundColor = "red";
    

    for(var i = 0; i < htmlOptionLists.length; i++){
        if(htmlOptionLists[i].innerHTML == quizQuestions[counter].answer){
            htmlOptionLists[i].style.backgroundColor = "green";
        }
    }
}

for(var i = 0; i < htmlOptionLists.length; i++){
    htmlOptionLists[i].className += " disabled";
}
}