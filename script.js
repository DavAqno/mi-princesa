const codes = {
  "mi niña": {
    title: "Mi niña",
    text: `
    La primera vez que te vi, fue de tu apariencia tan hermosa de la que me enamoré...
    (Aquí pondrías TODO tu texto completo de la carta que mandaste primero.)
    `
  },
  "nuestra primera cita": {
    title: "Nuestra Primera Cita",
    text: `
    Recuerdo ese día como si fuera ayer. Nervioso, emocionado y decidido a ser yo mismo...
    `
  },
  "eres mi mundo": {
    title: "Eres mi mundo",
    text: `
    Cada sonrisa tuya ilumina mis días más oscuros...
    `
  },
  "siempre juntos": {
    title: "Siempre Juntos",
    text: `
    Este amor no tiene final, porque contigo siempre será un nuevo comienzo...
    `
  }
};

let unlocked = new Set();

const codeInput = document.getElementById("codeInput");
const unlockButton = document.getElementById("unlockButton");
const errorMessage = document.getElementById("error-message");
const unlockSound = document.getElementById("unlockSound");
const unlockedContent = document.getElementById("unlocked-content");
const unlockedTitle = document.getElementById("unlocked-title");
const unlockedText = document.getElementById("unlocked-text");
const counter = document.getElementById("counter");

// Manejar desbloqueo
unlockButton.addEventListener("click", () => {
  const input = normalize(codeInput.value);
  if (codes[input]) {
    displayUnlocked(codes[input]);
    unlocked.add(input);
    updateCounter();
    unlockSound.play();
    codeInput.value = "";
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = "Código incorrecto. Inténtalo.";
  }
});

// Mostrar carta desbloqueada
function displayUnlocked(data) {
  unlockedContent.style.display = "block";
  unlockedTitle.textContent = data.title;
  unlockedText.textContent = data.text.trim();
}

// Actualizar contador
function updateCounter() {
  counter.textContent = `Cartas desbloqueadas: ${unlocked.size} / ${Object.keys(codes).length}`;
}

// Normalizar texto
function normalize(text) {
  return text.trim().toLowerCase().replace(/\s+/g, ' ');
}

// Crear corazones
const heartsContainer = document.getElementById("hearts-container");
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";
  heart.style.fontSize = 20 + Math.random() * 30 + "px";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}
setInterval(createHeart, 500);
