const button = document.getElementById("unlockBtn");

button.addEventListener("click", unlockLetter);

function unlockLetter(){

    const password = document.getElementById("password").value.trim();

    if(password === "jamsen28"){

        document.getElementById("lockScreen").classList.add("hidden");

        document.getElementById("galleryScreen").classList.remove("hidden");

        const music = document.getElementById("bgMusic");

        music.play().catch(function(error){
            console.log(error);
        });

        const photos = document.querySelectorAll(".photo");

        photos.forEach(function(photo,index){

            setTimeout(function(){

                photo.classList.add("show");

            },index*1500);

        });

    }

    else{

        document.getElementById("error").textContent = "Wrong password 💔";

    }

}
