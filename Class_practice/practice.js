/*var h1 = document.getElementById("header1")
h1.style.color = "red";

function alertMessage() {
        alert("Button Pressed");
    }
*/
function createBall() {
    var ball = document.createElement("div");

    ball.classList.add("ball");

    document.querySelector(".container").appendChild(ball);
}

window.onload = createBall;
