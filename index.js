const questions = [
    {
      question: "What is 2 + 4?",
      options: ["3", "4", "5", "6"],
      correctAnswer: 3, // Index of the correct option
    },
    {
      question: "What is the capital of Italy?",
      options: ["Madrid", "Paris", "Rome", "Berlin"],
      correctAnswer: 2,
    },
    {
      question: "Which planet is closest to the Sun?",
      options: ["Mars", "Jupiter", "Venus", "Saturn"],
      correctAnswer: 2,
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Giraffe", "Blue Whale", "Lion"],
      correctAnswer: 2,
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Hg", "Pb"],
      correctAnswer: 0,
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correctAnswer: 1,
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yen", "Dollar", "Euro", "Pound"],
      correctAnswer: 0,
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Korea", "Japan", "Vietnam"],
      correctAnswer: 2,
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Mars", "Jupiter", "Venus", "Saturn"],
      correctAnswer: 1,
    },
    {
      question: "What is the freezing point of water in Fahrenheit?",
      options: ["0°F", "32°F", "100°F", "212°F"],
      correctAnswer: 1,
    },
    // Add more questions here
  ];

    let currentQuestion = 0;
    let score = 0;


  const startBtn = document.getElementById("startBtn");
  const nextBtn = document.getElementById("nextBtn");
  const restartBtn = document.getElementById("restartBtn");

  const scoreboard = document.querySelector(".scoreboard");
  const finalScore = document.getElementById("finalScore");

  const questionText = document.getElementById("questionText");
  const quiz_container = document.getElementById("quiz_container");
  const options = document.querySelectorAll(".option");

  startBtn.addEventListener("click", ()=>{
    startBtn.parentElement.style.display = "none";
    quiz_container.classList.replace("hidden", "block")

    loadQuestion()
  })

  nextBtn.disabled = true;

  let optionClicked = false;

  function loadQuestion() {
    if (currentQuestion < questions.length) {
      questionNum.textContent = `Question ${currentQuestion+1}/ ${questions.length}`

      questionText.textContent = questions[currentQuestion].question;
      options.forEach((option, i)=>{
          option.textContent = questions[currentQuestion].options[i];
          option.classList.remove("bg-red-700")
          option.classList.replace("bg-green-700","bg-[white]-900")
          option.style.pointerEvents = "auto"
          option.addEventListener("click", function(){
            optionCheck(i)
          })
      })

      // console.log(options); 


    }
    else{
      showScoreboard();
    }
  }


  function optionCheck(optionIndex){
    const correctAnswerIndex = questions[currentQuestion].correctAnswer

    options.forEach((option) => {
      option.style.pointerEvents = "none";
      option.onclick = null;
    });
  console.log(optionIndex);
    if(optionIndex === correctAnswerIndex){
      options[correctAnswerIndex].classList.add("bg-green-700");
      score++;
      currScore.textContent = `Score: ${score}`;
      console.log(`true: ${score}`);
    }
    else{
      options[optionIndex].classList.add("bg-red-700");
      options[correctAnswerIndex].classList.add("bg-green-700");
      console.log(`false: ${score}`);

    }

    nextBtn.disabled = false;
    optionClicked = true;
  }

  function showScoreboard(){
    scoreboard.classList.remove("hidden");
    finalScore.textContent= score;

    // console.log(`scoreboard`, scoreboard);
  }

  nextBtn.addEventListener("click", function(){
    currentQuestion++;
    optionClicked= false;
    nextBtn.disabled= true;

    loadQuestion()

  })

  restartBtn.addEventListener("click", function(){
    currentQuestion=0
    optionClicked= false;
    nextBtn.disabled= true;
    score=0
    currScore.textContent = score;
    scoreboard.classList.add("hidden");
    loadQuestion()

  })