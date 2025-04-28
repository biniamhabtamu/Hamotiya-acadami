// Define questions and answers
const questions = [
    {
    question: "Which one of the following statements BEST describes civic education?",
    options: [
      "A way of learning for effective participation in a democratic and development process.",
      "The study of the rights and responsibilities of citizens or a politically organized group of people.",
      "The knowledge of the constitutions, the principles, values, history, and application to contemporary life.",
      "The process of helping young people acquire and learn to use the skills, knowledge, and attitudes."
    ],
    correctAnswer: 0 // "A way of learning for effective participation in a democratic and development process."
  },
  {
    question: "Which of the following statements is NOT true about Ethics?",
    options: [
      "It also explores the meaning and the ranking of different ethical values.",
      "The critical examination and evaluation of what is good, evil, right, and wrong in human conduct.",
      "Ethics is a subject being studied by morality.",
      "Ethics is a specific set of principles, values, and guidelines for a particular group or organization."
    ],
    correctAnswer: 2 // "Ethics is a subject being studied by morality." (This is NOT true.)
  },
  {
    question: "Which of the following is true about morality?",
    options: [
      "Morality is the code of conduct one follows.",
      "It is a complex concept when viewed from different perspectives.",
      "Morality is norms or codes which study about morality, moral principles, and moral decision making.",
      "Morality is a discipline that studies about ethics.",
      "A and B"
    ],
    correctAnswer: 3 // "A and B" (Both statements A and B are true)
  },
  {
    question: "In which of the following political cultures do citizens have high cognitive, affective, and evaluative orientation towards the political system, but the level of participation is still minimal?",
    options: [
      "Subject Culture",
      "Parochial Culture",
      "Authoritative Culture",
      "Participant Political Culture"
    ],
    correctAnswer: 0 // "Subject Culture"
  },
   {
    question: "Aristotle's ethical approach is best characterized as:",
    options: ["Natural Right Theory", "Virtue Ethics", "Deontological Ethics", "Consequentialism"],
    correctAnswer: 1 // "Virtue Ethics"
  },
  {
    question: "As per Ross's list of prima facie duties, duties of fidelity imply:",
    options: ["The duty to make compensation", "The duty to keep promises and the obligation not to lie", "Duty to thank those who helped us", "The duty to improve the condition of others"],
    correctAnswer: 1 // "The duty to keep promises and the obligation not to lie"
  },
  {
    question: "Which one of the following is true about Cognitivism?",
    options: ["Moral judgments are capable of being true or false", "Moral judgments express non-cognitive states", "Desires and emotions are not truth-apt", "Moral judgments are not capable of being right or wrong"],
    correctAnswer: 0 // "Moral judgments are capable of being true or false"
  },
  {
    question: "The branch of ethics that is named as prescriptive ethics is:",
    options: ["Normative Ethics", "Non-normative Ethics", "Meta-ethics", "Scientific Ethics"],
    correctAnswer: 0 // "Normative Ethics"
  },
  {
    question: "The main argument of strong cognitivism's non-naturalism is:",
    options: ["A moral judgment is rendered true or false by a natural state of affairs", "There are really no moral facts and moral properties exist", "Moral properties are identical to or reducible to natural properties", "Moral facts are independent of human opinion"],
    correctAnswer: 4 // ⚠ Correction: no "option 4" — so this should match to option 3, actually: "Moral facts are independent of human opinion"
  },
  {
    question: "According to virtue ethics, the fundamental moral question is:",
    options: ["What kinds of things are intrinsically good?", "What kind of person should I be?", "What is the right thing to do?", "What would benefit most?"],
    correctAnswer: 1 // "What kind of person should I be?"
  },
  {
    question: "Morality must be the effort to create democratic citizens who know the difference between moral rightness and moral wrongness. The theory that advocates 'Morality originates with God' is:",
    options: ["Divine Command Theory", "Utilitarianism Theory", "Democratic Theory", "Egoism Theory"],
    correctAnswer: 0 // "Divine Command Theory"
  },
  {
    question: "Among ethical approaches, which one studies the existence of moral facts?",
    options: ["Deontological Ethics", "Teleological Ethics", "Meta-ethical Approach", "Categorical Ethics"],
    correctAnswer: 2 // "Meta-ethical Approach"
  },
  {
    question: "Which of the following is NOT the goal of teaching moral and citizenship education?",
    options: ["To create citizens who care about others", "To bring responsible individuals while making decisions", "To create citizens who fail to ask for their rights and discharge their obligations", "To produce individuals who respect diversity"],
    correctAnswer: 2 // "To create citizens who fail to ask for their rights and discharge their obligations"
  },
  {
    question: "Which one is correctly matched?",
    options: ["Deontological Theory — Immanuel Kant", "Consequentialism Theory — Jeremy Bentham", "Deontological Theory — John Stuart Mill", "William D. Ross — Teleological Theory"],
    correctAnswer: 0 // "Deontological Theory — Immanuel Kant"
  },
  {
    question: "According to the deontological theory of ethics, a given action is a moral action if:",
    options: ["It produces a good outcome", "It is based on the duty and rule", "It benefits others except the actor", "It accomplishes its function"],
    correctAnswer: 1 // "It is based on the duty and rule"
  },
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
  {
    question: "Under ethical ___________ objective moral principles can be rationally determined, while under ___________ morality is both context-dependent and subjective.",
    options: ["Normativity, Relativism", "Relativism, Absolutism", "Absolutism, Relativism", "Absolutism, Normativity"],
    correctAnswer: 2 // "Absolutism, Relativism"
  },
  {
    question: "In ___________ political culture, citizens are endowed with low cognitive, affective, and evaluative orientation towards the political system. This contrasts with ___________ culture where citizens have both the competences and the will to engage in politics.",
    options: ["Parochial, Participant", "Participant, Subject", "Subject, Parochial", "Subject, Participant"],
    correctAnswer: 0 // "Parochial, Participant"
  },
  {
    question: "Deontological theories define a morally right action in terms of:",
    options: ["Its consequences", "Its conformity to certain moral rules", "The virtuousness of the agent", "The costs and benefits of the action"],
    correctAnswer: 1 // "Its conformity to certain moral rules"
  },
  {
    question: "According to Socrates, virtue is:",
    options: ["Knowledge", "Excellence of a thing", "Justice", "Avoiding extremes"],
    correctAnswer: 0 // "Knowledge"
  },
  {
    question: "In judging the conduct or action of human beings, we have to take into consideration all of the following, except:",
    options: ["The moral situation of the agent", "The consequences", "The means", "None"],
    correctAnswer: 3 // "None"
  },
  {
    question: "Among the following ethical theories, one holds that internal and mind pleasure is better than bodily pleasure:",
    options: ["Epicureanism", "Psychological Egoism", "Cyrenaicism", "None"],
    correctAnswer: 0 // "Epicureanism"
  },
  {
    question: "One is not an applied ethical issue:",
    options: ["Abortion", "Euthanasia", "Establishing School", "Owning Weapon"],
    correctAnswer: 2 // "Establishing School"
  },
  {
    question: "In Bentham’s hedonic calculus, the term extent refers to:",
    options: ["How near at hand pleasure is", "How likely pleasure is to occur", "The number of people affected by pleasure", "Its freedom from pain"],
    correctAnswer: 2 // "The number of people affected by pleasure"
  },
  {
    question: "Which ethical theory adopts the principle “the means justifies the end”?",
    options: ["Altruism", "Utilitarianism", "Egoism", "Categorical Imperative"],
    correctAnswer: 1 // "Utilitarianism"
  },
  {
    question: "One is not the objective of teaching civics and ethical education:",
    options: ["The need for democracy", "The need to build peace", "The need for religion", "All"],
    correctAnswer: 2 // "The need for religion"
  },
  {
    question: "When J.S. Mill advocates “greatest balance of happiness for the greatest number of people,” the term greatest refers to:",
    options: ["The best", "The most", "The least", "Too much"],
    correctAnswer: 1 // "The most"
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
  
