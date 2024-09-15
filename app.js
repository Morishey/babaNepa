document.addEventListener('DOMContentLoaded', () => {
    const starField = document.querySelector('.star-field');
    const numberOfStars = 10; // Number of stars
  
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
  
      // Random position within the star field
      const x = Math.random() * 100;
      const y = Math.random() * 100;
  
      // Random movement range and speed
      const xMove = (Math.random() - 0.5) * 200; // Adjust the range for movement
      const yMove = (Math.random() - 0.5) * 200;
      const speed = Math.random() * 2 + 5; // Adjust the speed range (in seconds)
  
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.setProperty('--x-move', `${xMove}px`);
      star.style.setProperty('--y-move', `${yMove}px`);
      star.style.animationDuration = `${speed}s`; // Set individual star animation speed
  
      starField.appendChild(star);
    }
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    
    confetti({
        particleCount: 120,
        spread: 100,
        origin: {x: 1, y: 0.7 },
    });
    confetti({
        particleCount: 120,
        spread: 100,
        origin: {x: 0, y: 0.7 },
    });

});