var questionsArr = [
    {question:'Harry Potter is a Muggle.', 
    answer:false
    },
    {question:'There are four houses at Hogwarts School of Witchcraft and Wizardry.', 
    answer: true
    },
    {question:'Harry is the Seeker for the Hufflepuff Quidditch team.', 
    answer: false
    },
    {question:'During his first game as Seeker, Harry caught his first Golden Snitch with his hand.', 
    answer:false
    },
    {question:'Harry, Ron, and Herminone are best friends.', 
    answer: true
    },
    {question:'J.K. Rowling said there will be seven Harry Potter Books.', 
    answer: true
    },
]
var numOfCorrect = 0
function runQuiz(){
    for ( i = 0; i < questionsArr.length; i++){
        if (confirm (questionsArr[i].question) === questionsArr[i].answer){
            numOfCorrect++
        }
    }
    var percentage = Math.round(100 * (numOfCorrect / questionsArr.length))
    alert("Nice Job! Your score is "+ percentage + "%")

    numOfCorrect = 0
}
