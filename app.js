// script.js
document.addEventListener('DOMContentLoaded', () => {
    const gameArea = document.getElementById('gameArea');
    const scoreDisplay = document.getElementById('score');
    let score = 0;

    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        const maxWidth = gameArea.offsetWidth - 60;
        const maxHeight = gameArea.offsetHeight - 80;
        balloon.style.left = `${Math.random() * maxWidth}px`;
        balloon.style.top = `${Math.random() * maxHeight}px`;
        balloon.style.backgroundColor = getRandomColor();
        gameArea.appendChild(balloon);

        balloon.addEventListener('click', () => {
            popBalloon(balloon);
        });
    }

    function popBalloon(balloon) {
        gameArea.removeChild(balloon);
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        createBalloon();
    }

    function getRandomColor() {
        const colors = [
            '#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#FFFF33',
            '#FF4500', '#FFD700', '#ADFF2F', '#00FF7F', '#4682B4',
            '#6A5ACD', '#FF69B4', '#FF1493', '#FFDAB9', '#CD5C5C'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    for (let i = 0; i < 5; i++) {
        createBalloon();
    }
});
