let messages = [
    "If you say no, I will be really sad...",
    "Please reconsider... 😢",
    "Are you sure? 💔",
    "Don't break my heart...",
    "Give me a chance... 🥺"
];
let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");
    const message = document.querySelector(".message");

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}