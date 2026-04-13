
// Subtle tilt animation for the tech boxes
const boxes = document.querySelectorAll('.tech-box');
boxes.forEach(box => {
    box.addEventListener('mousemove', (e) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        box.style.transform = `translateX(${x/10}px)`;
    });
    box.addEventListener('mouseleave', () => {
        box.style.transform = `translateX(0px)`;
    });
});
const glassElements = document.querySelectorAll('.glass');
glassElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = "translateY(-5px)";
        element.style.boxShadow = "0 10px 40px rgba(0,0,0,0.5)";
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = "translateY(0)";
        element.style.boxShadow = "none";
    });
});
const progressBars = document.querySelectorAll('.fill');
const animateSkills = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Get the width from the inline style and apply it
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.width = width;
                entry.target.style.transition = 'width 1.5s ease-in-out';
            }, 100);
            observer.unobserve(entry.target);
        }
    });
};
const observer = new IntersectionObserver(animateSkills, { threshold: 0.5 });
progressBars.forEach(bar => observer.observe(bar));
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.background = "rgba(255, 255, 255, 0.08)";
    });
    card.addEventListener('mouseleave', () => {
        card.style.background = "rgba(255, 255, 255, 0.03)";
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scroll for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // 2. Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    // Apply to cards and boxes
    const animatedElements = document.querySelectorAll('.project-card, .info-box, .skill-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
    // 3. Simple Form Handling
    const form = document.getElementById('portfolioContact');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.send-btn');
        btn.innerText = 'Message Sent!';
        btn.style.background = '#27ae60';
        form.reset();
        setTimeout(() => {
            btn.innerHTML = 'Send a message <i class="bi bi-send-fill"></i>';
            btn.style.background = '#9b67e6';
        }, 3000);
    });
});
