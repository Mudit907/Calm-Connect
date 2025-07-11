// Timer Functionality
let timerInterval;
document.getElementById("start-timer").addEventListener("click", function() {
  const timeInput = document.getElementById("timer").value;
  let timeRemaining = parseInt(timeInput);
  
  // Clear previous intervals
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    document.getElementById("timer-display").textContent = 
      `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
    } else {
      timeRemaining--;
    }
  }, 1000);
});

// Breathing Prompt Functionality
let isInhale = true;

setInterval(() => {
  if (isInhale) {
    document.getElementById("breathing-prompt").textContent = "Inhale";
  } else {
    document.getElementById("breathing-prompt").textContent = "Exhale";
  }
  isInhale = !isInhale;
}, 4000);  // 4 seconds for inhale/exhale switch

let breathingCircle = document.getElementById('breathing-circle');
let breathePrompt = document.getElementById('breathe-prompt');

let isInhaling = true;  // Track if we are inhaling or exhaling
let isBreathing = false; // Track if the exercise is active

// Function to start the breathing exercise
function startBreathing() {
    if (isBreathing) return;  // If already breathing, don't start again

    isBreathing = true;
    breathePrompt.innerText = 'Inhale';  // Show inhale prompt

    // Start inhale phase
    breathingCircle.classList.add('inhale');
    setTimeout(() => {
        breathingCircle.classList.remove('inhale');
        breathePrompt.innerText = 'Exhale';  // Show exhale prompt

        // Start exhale phase
        breathingCircle.classList.add('exhale');
        setTimeout(() => {
            breathingCircle.classList.remove('exhale');
            breathePrompt.innerText = 'Inhale';  // Show inhale prompt again
            isBreathing = false; // End of the breathing cycle
        }, 5000);  // Exhale for 5 seconds
    }, 5000);  // Inhale for 5 seconds
}
