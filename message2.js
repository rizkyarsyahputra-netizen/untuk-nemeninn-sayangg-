const bgm = document.getElementById("bgm2");
const typing = document.getElementById("typing");
const wrapper = document.getElementById("typingWrapper");
const resultBox = document.getElementById("resultBox");

const meterFill = document.getElementById("meterFill");
const meterText = document.getElementById("meterText");

const letterModal = document.getElementById("letterModal");
const finalModal = document.getElementById("finalSceneModal");
const letterText = document.getElementById("letterText");

let meter = 0;
let typingIndex = 0;

const message = `haloo sayanggg, bayii mungill kikyyy 🤏🏻🤍

kalau sayangg lagii buka inii, berarti kikyy lagii pengen bangedd nemenin Bayii mungill kikyyy yaa ehe🤍

sebenernya kikyy lumayan bingung mau ngapain biar bisa bikin mood sayangg lebih baik lagii, tapii kikyy tetep pengen usaha ngelakuin sesuatu walau cuma hal kecill buat sayangg ehee🤏🏻🤍

makanyaa kikyy bikinin inii buat sayangg 🤍

mungkin ini tidaa seberapa ehee🤏🏻, tapi kikyy harap hal kecil inii bisa nemenin sayangg walau cuma sedikit ehee🤏🏻, atau minimal bisa bikin sudut bibir sayangg naik sikitt eheee😋🤍

kikyy tauu kooo, kadangg ada hari dimana semuanya kerasa gituu gituu aja🤏🏻
bangun, jalanin hari, terus ulang lagii

kadangg bikin bosan, kadangg bikin capee juga, bahkan tanpa alasan yang jelas 🥺

kalau sayangg cape, bete, atau suntuk...
cerita aja samaaa kikyy oteyyyyy 🤏🏻

pokoknya jangan dipendem sendirii🤏🏻🤍

kikyy mungkin tidaa selalu punya kata kata ygg sempurna
tapi satu hal ygg kikyy yakinn…

kikyy bakal tetap ada buat sayangg🤍

kikyy bersyukur bangedd bisa milikinn ssyangg ehee🤍🤍

cobaa senyumm dunggg biarr makinn maniss bayii mungilll kikyy 😋🤍`;

const gombal = [
"sayangg tau tidaaa?? notif dari sayangg itu candu buat kikyy 😼",
"jujur ajaa ehee, senyum sayangg bikin hari kikyy berbunga-bunga eheee😋🤍",
"kalau sayangg pundungg lama lama, jantung kikyy buffering🥺🤏🏻",
"orang bilang jangan candu, tapi gimana kalau candunya samaa senyumm bayii mungilll kikyy ehee😋🤍"
];

const jokes = [
"sayangg kayaa lagii curii sesuatu yaaa??... mencurii hatii kikyyy ehee🗿🤍",
"ini web nyaa keren, tapi masiii kalah sama senyum sayangg😋🤍",
"kikyy punya bug, tiap liat senyuman maniss sayangg fps drop🫪🤍",
"warning: terlalu lama liat senyummm manisss sayangg menyebabkan salting akut😖🤍"
];

const cuteLevels = [
"97% gemoy 😼",
"120% bikin kikyy salting",
"ERROR: terlalu lucu untuk dihitung"
];

const moods = [
"42/100 — ini butuh peluk darurat 🤏🏻",
"78/100 — nahh udah lumayan",
"100/100 — ini baruu Bayii mungill kikyy 🤍"
];

const secretLetter = `sayanggg...

makasii yaa udah hadir di hidup kikyy

mungkin kikyy tidaa selalu sempurna
kadang masiii banyaaa kurangnya ehee🤏🏻

tapi satu hal yang pasti

kikyy tulus sayang sama sayanggg 🤍`;

function typeWriter(){
    if(typingIndex < message.length){
        typing.innerHTML += message.charAt(typingIndex);
        typingIndex++;

        requestAnimationFrame(()=>{
            wrapper.scrollTop = wrapper.scrollHeight;
        });

        setTimeout(typeWriter, 27);
    }
}

function popResult(text){
    resultBox.style.transform = "scale(0.96)";
    resultBox.innerText = text;

    setTimeout(()=>{
        resultBox.style.transform = "scale(1)";
    },150);

    addMood();
}

function addMood(){
    meter += Math.floor(Math.random()*12)+8;
    if(meter > 100) meter = 100;

    meterFill.style.width = meter + "%";
    meterText.innerText = `Mood recovery: ${meter}%`;

    if(meter === 100){
        resultBox.innerText = "yayy sayangg senyum 😼🤍";
    }
}

function randomGombal(){
    popResult(gombal[Math.floor(Math.random()*gombal.length)]);
}

function randomJoke(){
    popResult(jokes[Math.floor(Math.random()*jokes.length)]);
}

function virtualHug(){
    popResult("peluk virtual terkirim buat sayangg 🤏🏻🤍");
}

function checkMood(){
    popResult(moods[Math.floor(Math.random()*moods.length)]);
}

function checkCuteLevel(){
    popResult(cuteLevels[Math.floor(Math.random()*cuteLevels.length)]);
}

function openLetter(){
    letterText.innerText = secretLetter;
    letterModal.style.display = "flex";
}

function closeLetter(){
    letterModal.style.display = "none";
}

function finalScene(){
    finalModal.style.display = "flex";

    setTimeout(()=>{
        window.location.href = "video.html";
    }, 2600);
}

window.addEventListener("click",()=>{
    if(bgm.paused){
        bgm.play().catch(()=>{});
    }
},{once:true});

window.addEventListener("load",()=>{
    setTimeout(typeWriter,1800);
});