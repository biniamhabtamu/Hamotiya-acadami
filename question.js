// Define questions and answers
const questions = [
   {
    question: "As per ethical egoism, how ought we to act?",
    options: [
      "We ought to act as guardians of others",
      "We ought to act selflessly",
      "We ought to act as common good advocators",
      "We ought to act selfishly"
    ],
    correctAnswer: 3
  },
  {
    question: "Which one is correct about Mill's and Bentham's moral philosophy?",
    options: [
      "Bentham invented hedonic calculus to know what action brings how much hedons of pleasure",
      "Bentham defines happiness in higher-order pleasure",
      "Mill has been advocating the so-called Pig philosophy",
      "Mill considers pleasure merely sensual"
    ],
    correctAnswer: 0
  },
  {
    question: "A vital criticism of utilitarianism requiring superhuman ability to foresee consequences is:",
    options: [
      "No rest objection",
      "Consistency objection",
      "Lying objection",
      "Comparative consequence objection"
    ],
    correctAnswer: 3
  },
  {
    question: "You stay with your mother not out of ethics but out of fear of punishment. According to Kant, this decision is:",
    options: [
      "You are acting ethically.",
      "Your concern was neither ethical action nor a moral choice.",
      "You have made a moral choice.",
      "You acted from the verse of your duty as a son/daughter."
    ],
    correctAnswer: 1
  },
  {
    question: "According to Socrates, 'we are discussing no small matter, but how we ought to live.' This is the issue of:",
    options: [
      "Civics",
      "Universe",
      "Ethics",
      "Law"
    ],
    correctAnswer: 2
  },
  {
    question: "The field of non-normative ethics investigating meaning of ethical terms is called:",
    options: [
      "Descriptive ethics",
      "Applied ethics",
      "Meta Ethics",
      "All"
    ],
    correctAnswer: 2
  },
  {
    question: "Which one is NOT true about divine command theory?",
    options: [
      "Morality indeed exists independent of divine will",
      "Morality exists independent of result or utility",
      "An action is wrong if it is contrary to God",
      "An action is morally permissible if it is allowed by God"
    ],
    correctAnswer: 0
  },
  
];
    // Add more questions here...

  
  // Timer functionality
  let timeLeft = 180; // 3 minutes (180 seconds)
  let currentQuestionIndex = 0;
  let correctAnswers = 0; // Track the number of correct answers
  
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  
  function updateCountdown() {
    const countdown = document.getElementById('countdown');
    countdown.textContent = formatTime(timeLeft);
    if (timeLeft > 0) {
      timeLeft--;
    } else {
      moveToNextQuestion(); // Automatically move to next question after timer runs out
    }
  }
  
  // Load the first question
  function loadQuestion() {
    const questionText = document.getElementById('question-text');
    const optionButtons = document.querySelectorAll('.option');
  
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
  
    optionButtons.forEach((btn, index) => {
      btn.textContent = currentQuestion.options[index];
      btn.classList.remove('correct', 'incorrect');
    });
  }
  
  // Check the answer
  function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correctAnswer;
    const optionButtons = document.querySelectorAll('.option');
    
    if (selectedIndex === correctIndex) {
      optionButtons[selectedIndex].classList.add('correct');
      correctAnswers++; // Increment correct answers counter
    } else {
      optionButtons[selectedIndex].classList.add('incorrect');
      optionButtons[correctIndex].classList.add('correct');
    }
    
    // Move to the next question after 1 second
    setTimeout(moveToNextQuestion, 1000);
  }
  
  // Move to the next question or show score
  function moveToNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      loadQuestion();
      timeLeft = 180; // Reset timer for the next question
    } else {
      showResults();
    }
  }
  
  // Display the results with score and feedback
  function showResults() {
    const totalQuestions = questions.length;
    const percentage = (correctAnswers / totalQuestions) * 100;
  
    let feedbackMessage = '';
    if (percentage >= 95) {
      feedbackMessage = "You are an A+ student! 🎉 Keep it up!";
    } else if (percentage >= 85) {
      feedbackMessage = "You are an A student! 👍 Nice work!";
    } else {
      feedbackMessage = "So lazy... You should read more, the mid is difficult! 📚";
    }
  
    // Show the score and feedback
    alert(`Your score: ${correctAnswers}/${totalQuestions} (${percentage.toFixed(2)}%)\n${feedbackMessage}`);
  }
  
  // Initialize the page
  setInterval(updateCountdown, 1000);
  loadQuestion();
  
