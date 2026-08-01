function unlockLetter(){

    const password = document.getElementById("password").value;

    if(password === "jamsen28"){

        document.getElementById("lockScreen").style.display = "none";

        document.getElementById("galleryScreen").style.display = "flex";

    }

    else{

        document.getElementById("error").innerHTML = "Wrong password 💔";

    }

}
