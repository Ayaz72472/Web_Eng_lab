const container = document.getElementById("container")
const addButton = document.getElementById('addButton');

addButton.addEventListener('click', () => {
            const newBall = document.createElement('div');
            newBall.classList.add('ball');
            container.appendChild(newBall);
});