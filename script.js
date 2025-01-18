// Toggle Menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// Quiz Functionality
const quizQuestions = [
    {
        question: "What is the largest animal on Earth?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Shark"],
        answer: "Blue Whale"
    },
    {
        question: "How many hearts does an octopus have?",
        options: ["1", "2", "3", "4"],
        answer: "3"
    },
    {
        question: "What color is an octopus's blood?",
        options: ["Red", "Blue", "Green", "Purple"],
        answer: "Blue"
    },
    {
        question: "What do dolphins use to recognize each other?",
        options: ["Colors", "Names", "Smells", "Songs"],
        answer: "Names"
    },
    {
        question: "Which sea creature has been around for over 500 million years?",
        options: ["Sharks", "Jellyfish", "Sea Turtles", "Crabs"],
        answer: "Jellyfish"
    },
    {
        question: "Which marine animal can live for more than 100 years?",
        options: ["Whale", "Sea Turtle", "Dolphin", "Octopus"],
        answer: "Sea Turtle"
    },
    {
        question: "What percentage of marine life is supported by coral reefs?",
        options: ["5%", "10%", "25%", "50%"],
        answer: "25%"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('quiz-question');
    const optionsElement = document.getElementById('quiz-options');
    const nextButton = document.getElementById('next-btn');
    const replayButton = document.getElementById('replay-btn');

    const question = quizQuestions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer();
        optionsElement.appendChild(button);
    });

    nextButton.style.display = 'none';
    replayButton.style.display = 'none';
}

function loadQuestion() {
    const questionElement = document.getElementById('quiz-question');
    const optionsElement = document.getElementById('quiz-options');
    const question = quizQuestions[currentQuestionIndex];

    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option); // Pass selected option
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const resultElement = document.getElementById("quiz-result");
    const scoreElement = document.getElementById("score");

    if (selectedOption === quizQuestions[currentQuestionIndex].answer) {
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
        score++;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        resultElement.textContent = "Incorrect. Try the next question!";
        resultElement.style.color = "red";
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        resultElement.textContent += " Quiz complete!";
        document.getElementById("quiz-form").style.display = "none";
    }
}


function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-score').style.display = 'none';
    loadQuestion();
}

// Fun Facts
const facts = [
    "Sea otters hold hands while they sleep to keep from drifting apart.",
    "Clownfish are born male, but some turn female to lead their group.",
    "Octopuses have three hearts, and their blood is blue!",
    "Dolphins have unique names for each other.",
    "The blue whale is the largest animal on Earth, even bigger than dinosaurs!",
    "A jellyfish is 95% water and has been around for over 500 million years.",
    "Sharks have been swimming in the ocean for over 400 million years.",
    "Coral reefs cover less than 1% of the ocean floor but support 25% of marine life.",
    "Sea turtles can live for more than 100 years.",
    "Humpback whales sing songs that can last for hours and travel great distances underwater."
];

function showFunFact() {
    const fact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('fun-fact-display').textContent = fact;
}

function toggleDarkMode() {
    const body = document.body;
    const button = document.querySelector('.dark-mode-toggle');

    // Toggle dark mode on the body
    body.classList.toggle('dark-mode');
    
    // Toggle dark mode for other sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.toggle('dark-mode'));
    
    // Apply dark mode to the quiz container and its elements
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.classList.toggle('dark-mode');
    
    
    // Apply dark mode to general buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.toggle('dark-mode'));
    
    // Apply dark mode to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => item.classList.toggle('dark-mode'));
    
    // Apply dark mode to fun fact display
    const funFactDisplay = document.getElementById('fun-fact-display');
    funFactDisplay.classList.toggle('dark-mode');
    
    // Apply dark mode to header
    const header = document.querySelector('header');
    header.classList.toggle('dark-mode');
    
    // Change button text based on dark mode state
    if (body.classList.contains('dark-mode')) {
        button.textContent = 'Light Mode';
    } else {
        button.textContent = 'Dark Mode';
    }
}






// Initial Load
loadQuestion();


