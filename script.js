function unlockLetter(){

    const password = document.getElementById("password").value;

    if(password === "jamsen28"){

        alert("Unlocked ❤️");

    }

    else{

        document.getElementById("error").innerHTML =
        "Wrong password 💔";

    }

}
