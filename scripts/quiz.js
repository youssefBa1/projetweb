// Simple Quiz Script - No JSON, questions are in HTML
const submitBtn = document.getElementById("submit-btn");
const quizSection = document.getElementById("quiz-section");
const resultSection = document.getElementById("result-section");
const finalScore = document.getElementById("final-score");
const resultMessage = document.getElementById("result-message");

submitBtn.addEventListener("click", function () {
  // Check if all questions are answered
  let allAnswered = true;
  for (let i = 1; i <= 15; i++) {
    const answered = document.querySelector('input[name="q' + i + '"]:checked');
    if (!answered) {
      allAnswered = false;
      break;
    }
  }

  if (!allAnswered) {
    alert("Please answer all questions before submitting!");
    return;
  }

  // Calculate score by checking data-correct attribute
  let score = 0;
  for (let i = 1; i <= 15; i++) {
    const selected = document.querySelector('input[name="q' + i + '"]:checked');
    if (selected && selected.hasAttribute("data-correct")) {
      score++;
    }
  }

  // Show results
  quizSection.style.display = "none";
  resultSection.style.display = "block";
  finalScore.textContent = score;

  const percentage = (score / 15) * 100;

  if (percentage >= 90) {
    resultMessage.textContent =
      "Excellent! You're a web development master! 🏆";
  } else if (percentage >= 70) {
    resultMessage.textContent = "Great job! Keep it up! 👍";
  } else if (percentage >= 50) {
    resultMessage.textContent = "Good effort! Practice more! 📚";
  } else {
    resultMessage.textContent = "Keep learning! You'll get better! 💪";
  }
});
