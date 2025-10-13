// toggle menu
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
}
mobileMenuBtn.addEventListener("click", toggleMenu);
mobileMenu.addEventListener("click", (event) => {
    if (event.target.tagName === 'A') {
        mobileMenu.classList.add("hidden"); 
    }
});
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
// ========== Welcome Message Animation ==========
document.addEventListener('DOMContentLoaded', () => {
  const welcomeContainer = document.getElementById('welcome-message-container');
  const typedTextElement = document.getElementById('typed-text');
  const cursor = document.getElementById('cursor');
  const mainContent = document.getElementById('main-content');

  const message = `Hello, i'm Emmanuel. welcome to my porfolio`;
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

            // ✅ Start Header Typewriter AFTER welcome closes
            startHeaderTypewriter();

          }, 700);
        }, 1500); // Wait 1.5 seconds after typing finishes
      }, 500);
    }
  };

  setTimeout(typeWriter, 1500);
});


// ========== Header Typewriter (runs once) ==========
function startHeaderTypewriter() {
  const textToAnimate = "Hello, I'm Nnamani Chidera Emmanuel a Front-End Developer.";
  const textElement = document.querySelector('.typewriter-text');   
  
  const minTypewriterSpeed = 50;
  const maxTypewriterSpeed = 150;

  let index = 0;

  function typeWriter() {
    if (index < textToAnimate.length) {
      textElement.textContent += textToAnimate.charAt(index);
      index++;
      const randomSpeed = Math.random() * (maxTypewriterSpeed - minTypewriterSpeed) + minTypewriterSpeed;
      setTimeout(typeWriter, randomSpeed);
    } 
    // ✅ no reset → runs only once
  }

  typeWriter();
}
// fillter 
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons and add it to the clicked one
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.dataset.filter;

        projectCards.forEach(card => {
            const categories = card.dataset.category.split(' ');
    
            if (filter === 'all' || categories.includes(filter)) {
                card.classList.remove('hidden');
                card.classList.add('block');
            } else {
                card.classList.add('hidden');
                card.classList.remove('block');
            }
        });
    });
});
 // Allow users to close the ad
    document.getElementById("close-ad").addEventListener("click", function() {
      document.getElementById("shoe-ad-banner").style.display = "none";
    });
    
    // Close shoe section ad
    document.getElementById("close-section-ad").addEventListener("click", function() {
      document.getElementById("shoe-ad-section").style.display = "none";
    });