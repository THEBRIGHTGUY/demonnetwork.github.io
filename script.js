// Initialize Animate On Scroll
AOS.init({ 
    once: true, 
    mirror: false 
});

// Hell Mode Toggle Logic
const modeBtn = document.getElementById('modeToggle');
const dot = document.getElementById('dot');
const body = document.body;

modeBtn.addEventListener('click', () => {
    body.classList.toggle('hell-mode');
    const isHell = body.classList.contains('hell-mode');
    
    // Animate toggle switch
    dot.style.right = isHell ? '4px' : '28px';
    modeBtn.style.backgroundColor = isHell ? '#c2410c' : '#3f3f46';
});

// Copy to Clipboard Logic
const ipButton = document.getElementById('ipButton');
const buttonText = document.getElementById('buttonText');
const tooltip = document.getElementById('copyTooltip');
const serverIP = "demon.unfazium.cloud"; // Change this to your actual IP

ipButton.addEventListener('click', () => {
    navigator.clipboard.writeText(serverIP).then(() => {
        // Visual Feedback
        const originalText = buttonText.innerText;
        buttonText.innerText = "COPIED!";
        buttonText.style.color = "white";
        tooltip.style.opacity = '1';

        // Reset after 2 seconds
        setTimeout(() => {
            buttonText.innerText = originalText;
            buttonText.style.color = "";
            tooltip.style.opacity = '0';
        }, 2000);
    });
});