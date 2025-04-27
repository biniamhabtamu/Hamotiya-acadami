// Define questions and answers
const questions = [
  
  {
    question: "English _________ all over the world.",
    options: ["speaks", "is spoken", "was spoken", "has been spoken"],
    correctAnswer: 1
  },
  {
    question: "My children _____ with their homework.",
    options: ["helped", "help", "are helping", "aren’t helped"],
    correctAnswer: 1
  },
  {
    question: "_______________________________ last night?",
    options: ["Have the plants been watered", "Did the plants water", "Were the plants watered", "Are they watered"],
    correctAnswer: 2
  },
  {
    question: "Driving should _____ in city centers.",
    options: ["ban", "be banned", "banned", "being ban"],
    correctAnswer: 1
  },
  {
    question: "America _____ by Christopher Columbus.",
    options: ["has discovered", "have discovered", "had been discovered", "was discovered"],
    correctAnswer: 3
  },
  {
    question: "The house is going _____.",
    options: ["to knock down", "to be knocked down", "to been knocked down", "knocking down"],
    correctAnswer: 1
  },
  {
    question: "If I ____ younger, I ____ to play the piano, but I’m too old now.",
    options: ["am / will learn", "will be / are learning", "were / would", "were / would learn"],
    correctAnswer: 3
  },
  {
    question: "If I _____ Prime Minister, I _____ increase tax for rich people.",
    options: ["would be / shall", "will be / will", "am / would", "were / would"],
    correctAnswer: 3
  },
  {
    question: "If I _____ in a big house, I _____ a party.",
    options: ["lived / would have", "am / am having", "will live / have", "would live / will have"],
    correctAnswer: 0
  },
  {
    question: "If she _____ a lot of clothes, she _____ money.",
    options: ["bought / would have", "would buy / has", "wouldn’t bought / had", "didn’t buy / would have"],
    correctAnswer: 0
  },
  {
    question: "If he _____ a watch, he _____ always late.",
    options: ["will have / won’t be", "had / isn’t", "has / is", "had / wouldn’t be"],
    correctAnswer: 3
  },
  {
    question: "They _____ their baby Lily, but they aren’t sure yet.",
    options: ["will call", "are calling", "call", "might call"],
    correctAnswer: 3
  },
  {
    question: "I’d visit you more often if you _____ so far away.",
    options: ["will be living", "didn’t live", "don’t live", "wouldn’t live"],
    correctAnswer: 1
  },
  {
    question: "If I _____ perfect English, I _____ in this class.",
    options: ["could spoke / won’t be", "can speak / would be", "could speak / wouldn’t be", "can’t speak / will not"],
    correctAnswer: 2
  }
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
  