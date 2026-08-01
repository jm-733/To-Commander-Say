function unlockLetter(){

    const password=document.getElementById("password").value;

    if(password==="jamsen28"){

        document.getElementById("lockScreen").style.display="none";

        document.getElementById("galleryScreen").style.display="flex";

        document.getElementById("bgMusic").play();

        const photos=document.querySelectorAll(".photo");

        photos.forEach((photo,index)=>{

            setTimeout(()=>{

                photo.classList.add("show");

            },index*1800);

        });

    }

    else{

        document.getElementById("error").innerHTML="Wrong password 💔";

    }

}
