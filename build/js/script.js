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
        rootMargin: '0px 0px -100px 0px', // Trigger when element is 100px from the bottom of the viewport
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

// // for email sending
// function sendEmail(){
    
//         Email.send({
//          SecureToken : "3a3e27ec-3f3a-41da-a6d2-b52033232dcc",
//         To : 'chidex6250@gmail.com',
//         From : document.getElementById('email').value,
//         Subject : "My portfolio website contact form",
//         Body : "Name:"+ document.getElementById("name").value
//         + "<br> Email:"+ document.getElementById("email").value
//         + "<br> Phone number:"+ document.getElementById("phone").value
//         + "<br> Message:"+ document.getElementById("message").value
//     }).then(
//     message => alert("Message send successfully")
//     );
// }
