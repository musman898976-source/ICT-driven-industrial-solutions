/**
 * Industrial Readiness Calculator
 * Provides immediate feedback based on ICT maturity levels.
 */
function calculateScore() {
    let score = 0;
    const checkboxes = document.querySelectorAll('.score');
    
    checkboxes.forEach((box) => {
        if (box.checked) {
            score += parseInt(box.value);
        }
    });

    const resultElement = document.getElementById('scoreResult');
    let feedback = "";

    if (score <= 40) {
        feedback = "Level 1: Foundation Required. Focus on basic digitization before AI.";
    } else if (score <= 80) {
        feedback = "Level 2: Emerging Digital. You are ready for MES integration.";
    } else {
        feedback = "Level 3: Industry 4.0 Ready. Focus on Predictive Analytics and AI.";
    }

    resultElement.innerHTML = `<strong>Your Maturity Score: ${score}%</strong><br>${feedback}`;
    resultElement.style.padding = "15px";
    resultElement.style.marginTop = "10px";
    resultElement.style.backgroundColor = "#e8f5e9";
}

// Log for audit purposes
console.log("Industrial ICT Strategy Script Loaded Successfully.");
