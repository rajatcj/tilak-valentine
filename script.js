// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

function moveButton() {
    const btn = noBtn;

    const padding = 20; // keep some margin from edges

    const btnRect = btn.getBoundingClientRect();
    const btnWidth = btnRect.width;
    const btnHeight = btnRect.height;

    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;

    const minX = padding;
    const minY = padding;

    const randomX = Math.random() * (maxX - minX) + minX;
    const randomY = Math.random() * (maxY - minY) + minY;

    btn.style.position = "fixed"; // important for viewport positioning
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;

    btn.style.transition = "all 0.3s ease";
}

// Desktop hover
noBtn.addEventListener("mouseover", moveButton);

// Mobile touch
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // prevent accidental click
    moveButton();
});

// Click fallback
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveButton();
});

// Logic to make YES btn to grow

let yesScale = 1;

 yesBtn.style.position = "relative"
yesBtn.style.transformOrigin = "center center";
 yesBtn.style.transition = "transform 0.3s ease";

noBtn.addEventListener("click", () => {
     yesScale += 2;

    if (yesBtn.style.position !== "fixed") {
        yesBtn.style.position = "fixed";
         yesBtn.style.top = "50%";      
        yesBtn.style.left = "50%";
         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
     }else{
         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
     }
 });

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
