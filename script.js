// ===============================
// ELEMENTS
// ===============================

const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("password");
const error = document.getElementById("error");

const lockScreen = document.getElementById("lockScreen");
const galleryScreen = document.getElementById("galleryScreen");
const continueScreen = document.getElementById("continueScreen");
const letterScreen = document.getElementById("letterScreen");
const countdownScreen = document.getElementById("countdownScreen");
const videoScreen = document.getElementById("videoScreen");

const countdownNumber = document.getElementById("countdownNumber");

const music = document.getElementById("bgMusic");
const loveVideo = document.getElementById("loveVideo");

const photos = document.querySelectorAll(".photo");

const typedLetter = document.getElementById("typedLetter");

const hearts = document.getElementById("hearts");


// ===============================
// UNLOCK PASSWORD
// ===============================

unlockBtn.addEventListener("click", unlockLetter);


passwordInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        unlockLetter();

    }

});


function unlockLetter(){

    if(passwordInput.value.trim() !== "jamsen28"){

        error.innerHTML = "Wrong password 💔";

        return;

    }


    error.innerHTML = "";


    lockScreen.classList.add("hidden");


    galleryScreen.classList.remove("hidden");


    music.play().catch(function(){

        console.log("Music requires user interaction.");

    });


    showPhotos();

}


// ===============================
// SHOW PHOTOS ONE BY ONE
// ===============================

function showPhotos(){

    photos.forEach(function(photo,index){

        setTimeout(function(){

            photo.classList.add("show");

        }, index * 1800);

    });


    let photoDuration = (photos.length * 1800) + 2000;


    setTimeout(function(){

        galleryScreen.classList.add("hidden");

        continueScreen.classList.remove("hidden");


    }, photoDuration);

}


// ===============================
// CLICK TO READ LETTER
// ===============================

continueScreen.addEventListener("click", function(){


    continueScreen.classList.add("hidden");


    letterScreen.classList.remove("hidden");


    startTyping();


});


// ===============================
// TYPE LETTER
// ===============================

let letterIndex = 0;


function startTyping(){

    typedLetter.innerHTML = "";

    letterIndex = 0;

    typeWriter();

}



function typeWriter(){

    if(letterIndex < letter.length){


        typedLetter.innerHTML += letter.charAt(letterIndex);


        letterIndex++;


        setTimeout(typeWriter,25);


    }else{


        setTimeout(function(){


            startCountdown();


        },3000);


    }

}


// ===============================
// COUNTDOWN 3 2 1
// ===============================

function startCountdown(){


    letterScreen.classList.add("hidden");


    countdownScreen.classList.remove("hidden");


    let count = 3;


    countdownNumber.innerHTML = count;



    let countdown = setInterval(function(){


        count--;


        if(count > 0){


            countdownNumber.innerHTML = count;


        }else{


            clearInterval(countdown);


countdownScreen.classList.add("hidden");

videoScreen.classList.remove("hidden");

fadeOutMusic();

loveVideo.play();


        }


    },1000);


}


// ===============================
// FLOATING HEARTS
// ===============================

function createHeart(){


    const heart = document.createElement("div");


    heart.className = "heart";


    heart.innerHTML = "💗";


    heart.style.left = Math.random() * 100 + "vw";


    heart.style.fontSize = (20 + Math.random() * 25) + "px";


    heart.style.animationDuration = (5 + Math.random() * 5) + "s";


    hearts.appendChild(heart);



    setTimeout(function(){


        heart.remove();


    },10000);


}


setInterval(createHeart,350);

function fadeOutMusic(){

    let fade = setInterval(function(){

        if(music.volume > 0.05){

            music.volume -= 0.05;

        }else{

            music.volume = 0;

            music.pause();

            clearInterval(fade);

        }

    },200);

}
