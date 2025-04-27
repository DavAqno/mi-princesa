const codeInput = document.getElementById("codeInput");
const unlockButton = document.getElementById("unlockButton");
const errorMessage = document.getElementById("error-message");
const content = document.getElementById("content");
const unlockSound = document.getElementById("unlockSound");
const heartsContainer = document.getElementById("hearts-container");

const correctCode = atob("VGUgYW1vIERpYW5h"); // "Te amo Diana" en Base64

// Crear corazones dinámicos
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";
  heart.style.fontSize = 20 + Math.random() * 30 + "px";
  heart.style.opacity = 0.5 + Math.random() * 0.5;
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}
setInterval(createHeart, 500);

// Manejo del botón desbloqueo
unlockButton.addEventListener("click", () => {
  if (codeInput.value.trim() === correctCode) {
    unlockContent();
  } else {
    errorMessage.textContent = "Código incorrecto. Inténtalo.";
    codeInput.classList.add("shake");
    setTimeout(() => codeInput.classList.remove("shake"), 500);
  }
});

// Desbloquear contenido
function unlockContent() {
  unlockSound.play();
  content.style.display = "block";
  codeInput.style.display = "none";
  unlockButton.style.display = "none";
  errorMessage.style.display = "none";
  document.body.style.background = "linear-gradient(135deg, #ffdde1 0%, #f6b3c7 100%)";
}

// Efecto de vibración en input
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
  }
  .shake {
    animation: shake 0.3s;
  }
`;
document.head.appendChild(style);

