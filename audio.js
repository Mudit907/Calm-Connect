// Typing Animation
new Typed('.typing', {
    strings: ["Welcome to Your Audio Therapy Space."],
    typeSpeed: 60,
    backSpeed: 40,
    loop: false
  });
  
  // Dark Mode Toggle
  document.getElementById('darkToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
  
  // Particles JS
  particlesJS.load('particles-js', 'particles.json', () => {
    console.log('Particles loaded.');
  });
  
  // Audio Therapy Logic
  const therapyAudios = {
    rain: document.getElementById('rain'),
    forest: document.getElementById('forest'),
    waves: document.getElementById('waves')
  };
  
  const instrumentAudios = {
    guitar: document.getElementById('guitar'),
    piano: document.getElementById('piano'),
    flute: document.getElementById('flute')
  };
  
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const instrument = card.getAttribute('data-instrument');
      stopAllAudio(instrumentAudios); // stops other audios
      instrumentAudios[instrument].play();
    });
  });
  
  function stopAllAudio(audios) {
    Object.values(audios).forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
  }
  
  function playTherapy(type) {
    stopAllAudio(therapyAudios);
    therapyAudios[type].play();
  }
  
  function playInstrument(type) {
    stopAllAudio(instrumentAudios);
    instrumentAudios[type].play();
  }
  
  // Visualizer Bars
  document.querySelectorAll('.visualizer').forEach(container => {
    for (let i = 0; i < 5; i++) {
      const bar = document.createElement('span');
      container.appendChild(bar);
    }
  });
 