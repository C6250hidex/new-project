const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}
document.addEventListener('DOMContentLoaded', initApp);
// scrolling efect
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
       }, {
        rootMargin: '0px 0px -100px 0px', 
        threshold: [0, 0.5, 1.0]
    });
    sections.forEach(section => {
        observer.observe(section);
    });
});
// typing o hello, i'm nnamani....
 document.addEventListener('DOMContentLoaded', () => {
    const textToAnimate = "Hello, I'm Nnamani Chidera Emmanuel a Front-End Developer. ";
    const textElement = document.querySelector('.typewriter-text');   
            // Define the range for the randomized typing speed (in milliseconds)
    const minTypewriterSpeed = 50;
    const maxTypewriterSpeed = 150;
    const endPause = 2000; 
    let index = 0;
    function typeWriter() {
        if (index < textToAnimate.length) {
            textElement.textContent += textToAnimate.charAt(index);
            index++;
            // Generate a random speed for the next character
            const randomSpeed = Math.random() * (maxTypewriterSpeed - minTypewriterSpeed) + minTypewriterSpeed;
            setTimeout(typeWriter, randomSpeed);
        } else {
            setTimeout(() => {
                textElement.textContent = '';
                index = 0;
                typeWriter();
            }, endPause);
        }
    }
    typeWriter();
});

// for welcome message
document.addEventListener('DOMContentLoaded', () => {
  const welcomeContainer = document.getElementById('welcome-message-container');
  const typedTextElement = document.getElementById('typed-text');
  const cursor = document.getElementById('cursor');
  const mainContent = document.getElementById('main-content');

  const message = "Welcome to my page! I'm Nnamani Chidera Emmanuel.";
  const typingSpeed = 75;
  welcomeContainer.classList.remove('opacity-0');

  let i = 0;
  const typeWriter = () => {
    if (i < message.length) {
      typedTextElement.textContent += message.charAt(i);
      i++;
      setTimeout(typeWriter, typingSpeed);
    } else {
      cursor.classList.remove('animate-blink');
      setTimeout(() => {
        cursor.style.display = 'none';

        // Automatically close the pop-up after a short delay
        setTimeout(() => {
          welcomeContainer.classList.add('opacity-0');
          setTimeout(() => {
            welcomeContainer.style.display = 'none';
            // Reveal the main content
            mainContent.classList.remove('hidden', 'opacity-0');
          }, 700);
        }, 1500); // Wait 1.5 seconds after typing finishes
      }, 500);
    }
  };

  setTimeout(typeWriter, 1500);
});