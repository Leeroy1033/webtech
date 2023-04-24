const questions = [
    {
      question: "Is it important to ensure that meat, poultry, and fish reach a safe minimum internal temperature to destroy any harmful bacteria?",
      answer: "Yes"
    },
    {
      question: "Is the safe temperature for ground meat 71°C?",
      answer: "Yes"
    },
    {
      question: "Should hot foods be kept below 4°C?",
      answer: "No"
    },
    {
      question: "Should perishable foods be refrigerated within 2 hours?",
      answer: "Yes"
    },
    {
      question: "Should raw meat be stored on the top shelf of the fridge?",
      answer: "No"
    },
    {
      question: "Does cross-contamination occur when harmful bacteria from one food item are transferred to another food item?",
      answer: "Yes"
    },
    {
      question: "Should separate cutting boards be used for raw meat, poultry, and fish?",
      answer: "Yes"
    },
    {
      question: "Should perishable food be left out at room temperature for more than 2 hours?",
      answer: "No"
    }
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
    resultContainer.innerHTML = `You got ${score} out of ${questions.length} questions correct.`;
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