document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.slide');
    let currentStep = 0;

    function showStep(step) {
        steps.forEach((slide, index) => {
            if (index === step) {
                slide.classList.add('visible', 'fade-in', 'slide-up');
                slide.style.transform = 'scale(1)';
                slide.style.opacity = '1'; // Ensure full opacity for the visible step
            } else {
                slide.classList.remove('visible', 'fade-in', 'slide-up');
                slide.style.transform = 'scale(0.9)';
                slide.style.opacity = '0'; // Hide non-visible steps
            }
        });
    }

    function nextStep() {
        currentStep = (currentStep + 1) % steps.length; // Loop back to the first step
        showStep(currentStep);
    }

    // Initialize with the first step
    showStep(currentStep);

    // Move to the next step every 9 seconds
    setInterval(nextStep, 10000);

    // Optional: Add event listeners for manual step control
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            nextStep(); // Move to the next step
        } else if (event.key === 'ArrowLeft') {
            currentStep = (currentStep - 1 + steps.length) % steps.length; // Move to the previous step
            showStep(currentStep);
        }
    });
});
