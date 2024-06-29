window.onload = function() {
    const image = document.getElementById('spinningImage');
    setTimeout(() => {
        image.classList.add('grow');
    }, 100); // Delay to ensure the transition works smoothly
};