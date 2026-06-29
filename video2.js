const video = document.getElementById("memoryVideo");
const waSection = document.getElementById("waSection");

function showWA(){
    waSection.classList.add("show");
}

function createParticle(){
    const particle = document.createElement("div");

    particle.innerHTML = Math.random() > 0.5 ? "✨" : "🤍";
    particle.style.position = "fixed";
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = "100vh";
    particle.style.fontSize = (Math.random() * 12 + 14) + "px";
    particle.style.opacity = "0.85";
    particle.style.pointerEvents = "none";
    particle.style.zIndex = "3";
    particle.style.transition = "transform 7s linear, opacity 7s linear";

    document.body.appendChild(particle);

    requestAnimationFrame(() => {
        particle.style.transform =
            `translateY(-120vh) translateX(${Math.random()*80-40}px)`;
        particle.style.opacity = "0";
    });

    setTimeout(() => {
        particle.remove();
    }, 7000);
}

setInterval(createParticle, 900);

window.addEventListener("click", () => {
    if (video.paused) {
        video.play().catch(() => {});
    }
}, { once: true });

window.addEventListener("load", () => {
    video.play().catch(() => {});
});

video.addEventListener("ended", showWA);

// fallback kalau user drag ke akhir video
video.addEventListener("timeupdate", () => {
    if (
        video.duration &&
        video.currentTime >= video.duration - 1.2
    ) {
        showWA();
    }
});