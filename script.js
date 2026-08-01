// ===============================
// PASSWORD BUTTON
// ===============================

const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("password");
const error = document.getElementById("error");

const lockScreen = document.getElementById("lockScreen");
const galleryScreen = document.getElementById("galleryScreen");
const continueScreen = document.getElementById("continueScreen");
const letterScreen = document.getElementById("letterScreen");

const music = document.getElementById("bgMusic");

const photos = document.querySelectorAll(".photo");

const typedLetter = document.getElementById("typedLetter");

// ===============================
// UNLOCK
// ===============================

unlockBtn.addEventListener("click", unlockLetter);

passwordInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        unlockLetter();

    }

});

function unlockLetter(){

    if(passwordInput.value.trim() !== "jamsen28"){

        error.textContent = "Wrong password 💔";

        return;

    }

    error.textContent = "";

    lockScreen.classList.add("hidden");

    galleryScreen.classList.remove("hidden");

    music.play().catch(function(){

        console.log("Music autoplay blocked.");

    });

    showPhotos();

}

// ===============================
// PHOTO SLIDESHOW
// ===============================

function showPhotos(){

    photos.forEach(function(photo,index){

        setTimeout(function(){

            photo.classList.add("show");

        },index*1800);

    });

    const totalTime = (photos.length*1800)+2000;

    setTimeout(function(){

        galleryScreen.classList.add("hidden");

        continueScreen.classList.remove("hidden");

    },totalTime);

}

// ===============================
// CLICK TO CONTINUE
// ===============================

continueScreen.addEventListener("click",function(){

    continueScreen.classList.add("hidden");

    letterScreen.classList.remove("hidden");

    typeLetter();

});

// ===============================
// TYPEWRITER
// ===============================

let i=0;

function typeLetter(){

    typedLetter.innerHTML="";

    i=0;

    typing();

}

function typing(){

    if(i < letter.length){

        typedLetter.innerHTML += letter.charAt(i);

        i++;

        setTimeout(typing,25);

    }

    else{

        setTimeout(function(){

            letterScreen.classList.add("hidden");

            videoScreen.classList.remove("hidden");

            document.getElementById("loveVideo").play();

        },3000);

    }
const videoScreen = document.getElementById("videoScreen");
}

// ===============================
// FLOATING HEARTS
// ===============================

const hearts=document.getElementById("hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="💗";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    heart.style.animationDuration=(6+Math.random()*4)+"s";

    hearts.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },10000);

}

setInterval(createHeart,350);
