const lights = document.querySelectorAll('.light');
let currentLightIndex = 0;

function changeLight() {
    // Remove 'active' class from all lights
    lights.forEach(light => light.classList.remove('active'));

    // Set the current light to active
    lights[currentLightIndex].classList.add('active');

    // Update the index for the next light
    if (currentLightIndex === 0) { // Red to orange transition
        setTimeout(() => {
            currentLightIndex = 1;
            changeLight();
        }, 4000); // 4 seconds for transition
    } else if (currentLightIndex === 1) { // Orange to green transition
        setTimeout(() => {
            currentLightIndex = 2;
            changeLight();
        }, 4000); // 4 seconds for transition
    } else if (currentLightIndex === 2) { // Green stays for 30 seconds
        setTimeout(() => {
            currentLightIndex = 0; // Return to red
            changeLight();
        }, 30000); // 30 seconds for green
    }
}

// Start the traffic light sequence
changeLight(); // Initial state
