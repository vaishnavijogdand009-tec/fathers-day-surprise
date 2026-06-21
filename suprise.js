const text =
"Dear Dad, thank you for being my first superhero, my teacher, and my best friend.";

const typewriter = document.getElementById("typewriter");

let index = 0;

function typeEffect() {

    if(index < text.length){

        typewriter.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 60);
    }
}

typeEffect();

const surpriseBtn = document.getElementById("surpriseBtn");

surpriseBtn.addEventListener("click", () => {

    document
        .getElementById("surprise")
        .classList.remove("hidden");

    for(let i = 0; i < 50; i++){
        createHeart();
    }

});

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * window.innerWidth + "px";

    heart.style.animationDuration =
        (Math.random() * 3 + 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}
function showCard() {
    document.getElementById("surpriseCard").style.display = "block";
}

function showCard() {

    document.getElementById("surpriseCard").style.display = "block";

    for(let i = 0; i < 40; i++) {
        createHeart();
    }
}

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.animationDuration =
        (Math.random() * 3 + 2) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}