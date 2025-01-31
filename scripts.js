document.addEventListener("DOMContentLoaded", () => {
    console.log("¡Bienvenido a mi biografía futurista! 🚀");

    // Efecto al pasar el mouse sobre la imagen de perfil
    const profileImg = document.querySelector(".profile-img");

    profileImg.addEventListener("mouseover", () => {
        profileImg.style.filter = "brightness(120%)";
    });

    profileImg.addEventListener("mouseout", () => {
        profileImg.style.filter = "brightness(100%)";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("¡Bienvenido a mi biografía futurista! 🚀");

    // Partículas de fondo
    particlesJS("particles-js", {
        particles: {
            number: { value: 80 },
            color: { value: "#00ffc8" },
            shape: { type: "circle" },
            opacity: { value: 0.7 },
            size: { value: 3 },
            move: { speed: 2 }
        }
    });

    // Sonido al pasar el cursor sobre la imagen de perfil
    const profileImg = document.querySelector(".profile-img");
    const hoverSound = document.getElementById("hover-sound");

    profileImg.addEventListener("mouseover", () => hoverSound.play());
});


document.addEventListener("DOMContentLoaded", async () => {
    console.log("¡Bienvenido a mi biografía futurista! 🚀");

    // Partículas de fondo
    particlesJS("particles-js", {
        particles: {
            number: { value: 80 },
            color: { value: "#00ffc8" },
            shape: { type: "circle" },
            opacity: { value: 0.7 },
            size: { value: 3 },
            move: { speed: 2 }
        }
    });

    // Sonido al pasar el cursor sobre la imagen de perfil
    const profileImg = document.querySelector(".profile-img");
    const hoverSound = document.getElementById("hover-sound");

    profileImg.addEventListener("mouseover", () => hoverSound.play());

    // URL del artículo
    const articleUrl = "https://fox-news-48865628.hubspotpagebuilder.com/blog/c%C3%B3mo-la-ia-ayuda-al-descubrimiento-de-antibi%C3%B3ticos-y-qu%C3%A9-impacto-tiene-esto-en-la-lucha-contra-la-resistencia-bacteriana";

    try {
        // Obtener metadatos del artículo con OpenGraph
        const response = await fetch(`https://opengraph.io/api/1.1/site/${encodeURIComponent(articleUrl)}?app_id=TU_API_KEY`);
        const data = await response.json();

        document.getElementById("article-image").src = data.hybridGraph.image || "default-image.jpg";
        document.getElementById("article-title").textContent = data.hybridGraph.title || "Artículo sin título";
        document.getElementById("article-link").href = articleUrl;
    } catch (error) {
        console.error("Error al obtener el artículo:", error);
        document.getElementById("article-preview").innerHTML = "<p>No se pudo cargar el artículo.</p>";
    }
});

const text = "Jesús David Silva Rangel";
let index = 0;

function typeEffect() {
    document.getElementById("bio-text").innerHTML = text.slice(0, index++);
    if (index <= text.length) {
        setTimeout(typeEffect, 50);
    }
}

window.onload = typeEffect;


document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-music");
    const audioButton = document.getElementById("toggle-audio");
    let isPlaying = false;

    // Función para activar/desactivar el audio
    audioButton.addEventListener("click", () => {
        if (isPlaying) {
            audio.pause();
            audioButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else {
            audio.play();
            audioButton.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
        isPlaying = !isPlaying;
    });
});