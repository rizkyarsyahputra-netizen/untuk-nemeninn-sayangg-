const startScreen = document.getElementById("startScreen");
const fadeLayer = document.getElementById("fadeLayer");
const music = document.getElementById("bgm1");
const sceneText = document.getElementById("sceneText");

const photos = {
    p1: document.querySelector(".p1"),
    p2: document.querySelector(".p2"),
    p3: document.querySelector(".p3"),
    p4: document.querySelector(".p4"),
    p5: document.querySelector(".p5")
};

let started = false;

const sceneTexts = [
    "our memories 🤍",
    "thank you for staying",
    "still my favorite person"
];

function setSceneText(text){
    sceneText.style.opacity = "0";

    setTimeout(()=>{
        sceneText.innerText = text;
        sceneText.style.opacity = "1";
    }, 250);
}

function floatify(el){
    setTimeout(()=>{
        el.style.animation += ", floatPhoto 4s ease-in-out infinite";
    }, 1200);
}

function animateSequence(){
    setSceneText(sceneTexts[0]);

    photos.p1.style.animation = "slideLeft 1.6s cubic-bezier(.22,1,.36,1) forwards";
    floatify(photos.p1);

    setTimeout(()=>{
        photos.p2.style.animation = "slideRight 1.6s cubic-bezier(.22,1,.36,1) forwards";
        floatify(photos.p2);
    }, 1400);

    setTimeout(()=>{
        setSceneText(sceneTexts[1]);
        photos.p3.style.animation = "slideUp 1.6s cubic-bezier(.22,1,.36,1) forwards";
        floatify(photos.p3);
    }, 2900);

    setTimeout(()=>{
        photos.p4.style.animation = "slideDown 1.6s cubic-bezier(.22,1,.36,1) forwards";
        floatify(photos.p4);
    }, 4300);

    setTimeout(()=>{
        setSceneText(sceneTexts[2]);
        photos.p5.style.animation = "zoomCenter 2s cubic-bezier(.22,1,.36,1) forwards";
    }, 6000);

    // Fade out
    setTimeout(()=>{
        fadeLayer.style.opacity = "1";

        let vol = music.volume;

        const fadeAudio = setInterval(()=>{
            vol -= 0.03;
            if(vol <= 0){
                music.volume = 0;
                clearInterval(fadeAudio);
                music.pause();
            } else {
                music.volume = vol;
            }
        }, 110);
    }, 9800);

    // Move page
    setTimeout(()=>{
        window.location.href = "message.html";
    }, 12200);
}

startScreen.addEventListener("click", ()=>{
    if(started) return;
    started = true;

    music.play().catch(()=>{});

    startScreen.style.opacity = "0";

    setTimeout(()=>{
        startScreen.style.display = "none";
        animateSequence();
    }, 700);
});