/* ===========================
   TYPING EFFECT (Tagline)
=========================== */
const tagline = document.getElementById("tagline");
const texts = [
    "Equal parts ambition & empathy.",
    "Debugging code & life.",
    "Making the first move easier.",
    "Engineering a better future."
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        tagline.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        tagline.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2500; // Longer pause to read
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}
document.addEventListener("DOMContentLoaded", typeEffect);


/* ===========================
   INTERACTIONS
=========================== */
const heroNotice = document.getElementById("heroNotice");
const likeBtn = document.getElementById("likeBtn");
const connectBtn = document.getElementById("connectBtn");

// 1. LIKE BUTTON
let likeCount = 0;
likeBtn.addEventListener("click", () => {
    likeCount++;
    fireConfetti();
    
    if (likeCount === 1) {
        heroNotice.textContent = "Thanks! The feeling is mutual. 😉";
    } else if (likeCount === 2) {
        heroNotice.textContent = "You have great taste.";
    } else {
        heroNotice.textContent = "Okay, now you definitely need to say hi!";
    }
    
    heroNotice.classList.add("visible");
    setTimeout(() => heroNotice.classList.remove("visible"), 3000);
});

// 2. CONNECT BUTTON
connectBtn.addEventListener("click", () => {
    connectBtn.textContent = "Opening DMs...";
    heroNotice.textContent = "Don't be shy, say 'Hello'!";
    heroNotice.classList.add("visible");
    
    setTimeout(() => {
        connectBtn.textContent = "💬 Let's Talk";
        heroNotice.classList.remove("visible");
    }, 2000);
});


/* ===========================
   VIBE CHECK (Witty & Charming)
=========================== */
const icebreakerBtn = document.getElementById("icebreakerBtn");
const whyBtn = document.getElementById("whyBtn");
const funDisplay = document.getElementById("funDisplay");

const icebreakers = [
    "What's the one travel destination on your bucket list?",
    "Coffee date or long drive? What's your pick?",
    "If you could have dinner with any historical figure, who would it be?",
    "What's a skill you've always wanted to learn?"
];

const reasons = [
    "I'm ambitious, but I always make time for the people I care about.",
    "I can fix your WiFi and probably your bad day.",
    "I believe chivalry isn't dead.",
    "I make really good decisions (mostly about food)."
];

icebreakerBtn.addEventListener("click", () => {
    const text = icebreakers[Math.floor(Math.random() * icebreakers.length)];
    animateText(text);
});

whyBtn.addEventListener("click", () => {
    const text = reasons[Math.floor(Math.random() * reasons.length)];
    animateText(text);
});

function animateText(text) {
    funDisplay.style.opacity = 0;
    setTimeout(() => {
        funDisplay.textContent = `> ${text}`;
        funDisplay.style.opacity = 1;
    }, 200);
}


/* ===========================
   CONFETTI ENGINE
=========================== */
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiParticles = [];

function fireConfetti() {
    for (let i = 0; i < 40; i++) {
        confettiParticles.push({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            w: Math.random() * 8 + 4,
            h: Math.random() * 8 + 4,
            vx: Math.random() * 10 - 5,
            vy: Math.random() * 10 - 5,
            color: `hsl(${Math.random() * 360}, 80%, 60%)`,
            life: 80
        });
    }
}

function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    confettiParticles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.3; 
        p.life--;

        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.w, p.h);

        if (p.life <= 0) confettiParticles.splice(index, 1);
    });

    requestAnimationFrame(updateConfetti);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

updateConfetti();