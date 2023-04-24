const questions = [
    {
      question: "Should you wear loose clothing while cooking?",
      answer: "No"
    },
    {
      question: "Is it safe to leave cooking food unattended?",
      answer: "No"
    },
    {
      question: "Is it safe to use a knife with a dull blade?",
      answer: "No"
    },
    {
      question: "Should you touch electrical appliances with wet hands?",
      answer: "No"
    },
    {
      question: "Is it safe to use a wet oven cloth?",
      answer: "No"
    },
    {
      question: "Should you keep a fire extinguisher in the kitchen?",
      answer: "Yes"
    },
    {
      question: "Should you check the expiration date of food before cooking with it?",
      answer: "Yes"
    },
    {
      question: "Is it safe to use the same cutting board for raw meat and vegetables without washing it in between?",
      answer: "No"
    },

  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionContainer = document.getElementById("question-container");
  const submitButton = document.getElementById("submit-button");
  const resultContainer = document.getElementById("result-container");
  
  function showQuestion() {
    questionContainer.innerHTML = `
      <p>${questions[currentQuestion].question}</p>
      <label><input type="radio" name="answer" value="Yes"> Yes</label>
      <label><input type="radio" name="answer" value="No"> No</label>
    `;
  }
  
  function showResult() {
    questionContainer.style.display = "none";
    submitButton.style.display = "none";
    const scoreText = `You got ${score} out of ${questions.length} questions correct.`;
    resultContainer.innerHTML = scoreText;
    document.cookie = `quizScore=${score}`;
  }
  
  function checkAnswer() {
    const answer = document.querySelector("input[name='answer']:checked");
    if (!answer) {
      alert("Please select an answer.");
      return;
    }
  
    if (answer.value === questions[currentQuestion].answer) {
      score++;
    }
  
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  submitButton.addEventListener("click", checkAnswer);
  
  showQuestion();