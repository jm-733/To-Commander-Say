function unlockLetter() {

    const password = document.getElementById("password").value;

    if (password === "jamsen28") {

        // Hide lock screen
        document.getElementById("lockScreen").style.display = "none";

        // Show gallery
        document.getElementById("galleryScreen").style.display = "flex";

        // Play music
        const music = document.getElementById("bgMusic");
        music.play().catch(err => console.log(err));

        // Show photos one by one
        const photos = document.querySelectorAll(".photo");

        photos.forEach((photo, index) => {
            setTimeout(() => {
                photo.classList.add("show");
            }, index * 1800);
        });

    } else {

        document.getElementById("error").innerHTML = "Wrong password 💔";

    }

}
