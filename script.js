// script.js

// Toggle FAQ accordion
function toggleFAQ(element) {
  element.parentNode.classList.toggle('active');
}

function suggestTherapyBasedOnAge(age) {
    let suggestions = [];

    if (age >= 15 && age <= 25) {
        suggestions = [
            { name: "Laughing Therapy", link: "laughing.html" },
            { name: "Audio Therapy", link: "audio.html" }
        ];
    } else if (age > 25 && age <= 40) {
        suggestions = [
            { name: "Reading Therapy", link: "reading.html" },
            { name: "Audio Therapy", link: "audio.html" },
            { name: "Yoga & Meditation", link: "yoga.html" }
        ];
    } else if (age > 40 && age <= 60) {
        suggestions = [
            { name: "Audio Therapy", link: "audio.html" },
            { name: "Yoga & Meditation", link: "yoga.html" },
            { name: "Spiritual Therapy", link: "spirituality.html" }
        ];
    } else if (age > 60) {
        suggestions = [
            { name: "Audio Therapy", link: "audio.html" },
            { name: "Spiritual Therapy", link: "spirituality.html" }
        ];
    } else {
        return [{ name: "Explore our range of therapies", link: "#therapies" }];
    }

    if (suggestions.length > 0) {
        let suggestionText = "Based on your age, our system suggests exploring: ";
        const therapyLinksDiv = document.getElementById('therapy-links');
        const suggestionTextElement = document.getElementById('suggestion-text');
        if (!therapyLinksDiv) {
          console.error("therapyLinksDiv is null");
          return "";
        }
        therapyLinksDiv.innerHTML = '';
        suggestions.forEach((therapy, index) => {
            const link = document.createElement('a');
            link.href = therapy.link;
            link.textContent = therapy.name;
            link.classList.add('therapy-link');
            therapyLinksDiv.appendChild(link);
            suggestionText += therapy.name;
            if (index < suggestions.length - 1) {
                suggestionText += ", ";
            }
        });
        suggestionTextElement.textContent = suggestionText + ".";
        return suggestionText + ".";
    } else {
        return "We offer a variety of therapies suitable for different age groups. Feel free to explore them!";
    }
}

function getAgeAndSuggestTherapy() {
    const ageInput = document.getElementById('user-age');
    const age = parseInt(ageInput.value);
    const therapySuggestionDiv = document.getElementById('therapy-suggestion');
    const suggestionTextElement = document.getElementById('suggestion-text');
    const agePromptOverlay = document.getElementById('age-prompt-overlay');
    const mainContent = document.querySelector('.main-content');

    if (!isNaN(age) && age > 0) {
        const suggestion = suggestTherapyBasedOnAge(age);
        suggestionTextElement.textContent = suggestion;
        therapySuggestionDiv.style.display = 'flex';
        agePromptOverlay.style.display = 'none';
        if (mainContent) {
            mainContent.style.display = 'block';
            mainContent.classList.add('visible');
        }
    } else {
        alert('Please enter a valid age.');
    }
}



document.addEventListener('DOMContentLoaded', () => {
    const agePromptOverlay = document.getElementById('age-prompt-overlay');
    const therapySuggestionDiv = document.getElementById('therapy-suggestion');
    const mainContent = document.querySelector('.main-content');

    if (agePromptOverlay) {
        agePromptOverlay.style.display = 'flex';
    }
    if (therapySuggestionDiv) {
        therapySuggestionDiv.style.display = 'none';
    }
    if (mainContent) {
        mainContent.style.display = 'none';
    }


    const scrollDown = document.querySelector('.scroll-down');
    if (scrollDown) {
        scrollDown.addEventListener('click', () => {
            if (mainContent) {
                window.scrollTo({
                    top: mainContent.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }


    window.addEventListener('scroll', () => {
        if (mainContent && mainContent.style.display === 'block' && mainContent.getBoundingClientRect().top < window.innerHeight - 100) {
            mainContent.classList.add('visible');
        }
    });
});
