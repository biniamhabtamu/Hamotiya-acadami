// Define questions and answers
const questions = [
  
{
    question: "English _________ all over the world.",
    options: ["speaks", "is spoken", "was spoken", "has been spoken"],
    correctAnswer: 1
  },
  {
    question: "When did Fatih Sultan conquer Istanbul? Istanbul ________________ by Fatih Sultan in 1453.",
    options: ["was conquered", "conquered", "be conquered", "is conquered"],
    correctAnswer: 0
  },
  {
    question: "Turkish is __________ in Turkey.",
    options: ["speaks", "spoke", "spoken", "be spoken"],
    correctAnswer: 2
  },
  {
    question: "Alemu: Who wrote “War and Peace”?\nBacha: It _________ by Leo Tolstoy.",
    options: ["is written", "wrote", "writes", "was written"],
    correctAnswer: 3
  },
  {
    question: "That film has __________ on TV.",
    options: ["showed", "been shown", "shown", "showing"],
    correctAnswer: 1
  },
  {
    question: "She______ to hospital yesterday.",
    options: ["was taken", "took", "is taken", "can take"],
    correctAnswer: 0
  },
  {
    question: "They grow coffee in Brazil. Coffee is ______ in Brazil.",
    options: ["grown", "grows", "grew", "grow"],
    correctAnswer: 0
  },
  {
    question: "Sara: Where did the gunman shoot President Kennedy?\nSitra: He ______ in Dallas, Texas.",
    options: ["is shot", "shoots", "was shot", "been shot"],
    correctAnswer: 2
  },
  {
    question: "I will do everything. Everything ______ done.",
    options: ["is", "was", "has", "will be"],
    correctAnswer: 3
  },
  {
    question: "America _________ in 1492.",
    options: ["discovered", "was discovered", "has been discovered", "is discovered"],
    correctAnswer: 1
  },
  {
    question: "Many cameras ______ in Japan.",
    options: ["is made", "was made", "are made", "make"],
    correctAnswer: 2
  },
  {
    question: "The English test ______ yesterday.",
    options: ["given", "gave", "is given", "was given"],
    correctAnswer: 3
  },
  {
    question: "Gudeta: Did Alexander Graham Bell invent the telephone?\nGirma: Yes, it ______ invented by him.",
    options: ["was", "has been", "is being", "to be"],
    correctAnswer: 0
  },
  {
    question: "French ______ in our school.",
    options: ["isn’t taught", "doesn’t teach", "taught", "teaches"],
    correctAnswer: 0
  },
  {
    question: "The computer ______ delivered tomorrow.",
    options: ["are", "was", "has", "will be"],
    correctAnswer: 3
  },
  {
    question: "Experiments are often ______ by scientists.",
    options: ["do", "done", "doing", "been"],
    correctAnswer: 1
  },
  {
    question: "A patient ______ by a doctor.",
    options: ["examined", "is examining", "will examine", "is examined"],
    correctAnswer: 3
  },
  {
    question: "The electric light bulb ______ by Edison.",
    options: ["invented", "invents", "is invented", "was invented"],
    correctAnswer: 3
  },
  {
    question: "Ujulu: Who discovered penicillin?\nJulia: ________________________?",
    options: ["Penicillin was discovered by him", "It was discovered by Alexander Fleming", "It has been discovered by Fleming", "Alexander Fleming may discover penicillin"],
    correctAnswer: 1
  },
  {
    question: "John: Was Kennedy killed by Lee Harvey Oswald?\nThomas: Yes, _______________.",
    options: ["Lee Harvey Oswald was killed by Kennedy", "Lee Harvey Oswald killed Kennedy", "He is killed by Lee Harvey Oswald", "Kennedy killed Lee Harvey Oswald"],
    correctAnswer: 1
  },
  {
    question: "Who ______ next to you now?",
    options: ["sits", "is sitting", "sit", "sitting"],
    correctAnswer: 1
  },
  {
    question: "Our house ______ painted at the moment.",
    options: ["was", "is", "is being", "has been"],
    correctAnswer: 2
  },
  {
    question: "Umer: How did he die?\nSofia: He _____________ in the earthquake.",
    options: ["killed", "had killed", "was killed", "is killed"],
    correctAnswer: 2
  },
  {
    question: "The guest: Do they allow smoking?\nThe guard: No, smoking ________ inside the terminal building.",
    options: ["doesn’t allow", "wasn’t allowed", "hasn’t been allowed", "is not allowed"],
    correctAnswer: 3
  },
  {
    question: "Sena: Who does the ironing in your family?\nTsion: It_________ by grandmother.",
    options: ["is being done", "is done", "has been done", "was done"],
    correctAnswer: 1
  },
  {
    question: "Asefa: ______ they sell their car ?\nLidya: Yes, their car will be sold.",
    options: ["Will", "Do", "Did", "Are"],
    correctAnswer: 0
  },
  {
    question: "X: _____________________?\nY: Tomorrow.",
    options: ["Where was the old man taken", "When was he arrested", "Why is he going to Istanbul", "When will the hospital be opened"],
    correctAnswer: 3
  },
  {
    question: "A: Water the plants, please.\nB: _______.",
    options: ["Yes, I did", "They were watered", "They’ve already been watered", "No, not yet."],
    correctAnswer: 2
  },
  {
    question: "Someone has opened this letter. This letter _____________.",
    options: ["have been opened", "has been opened", "was opened", "has opened"],
    correctAnswer: 1
  },
  {
    question: "When ______ television ______?",
    options: ["did / invent", "was / invent", "was / invented", "is / invented"],
    correctAnswer: 2
  },
  {
    question: "The book, Gone With the Wind, ______ by Margaret Mitchell.",
    options: ["wrote", "was written", "are written", "were written"],
    correctAnswer: 1
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
  
