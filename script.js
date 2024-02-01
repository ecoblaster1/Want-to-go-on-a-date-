function showMessage(response) {
    if (response === "No") {
        const noButton = document.getElementById("no-button");
        const container = document.querySelector(".container");
        const maxWidth = window.innerWidth - noButton.offsetWidth;
        const maxHeight = window.innerHeight - noButton.offsetHeight;

        // Set button position to absolute
        noButton.style.position = "absolute";

        // Change image source to "maybeNextTime.gif"
        document.getElementsByClassName("image")[0].src = "images/maybeNextTime.gif";

        // Generate random coordinates within the visible container
        const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
        const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

        // Apply new coordinates to the button
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";

        // Update text content and hide name message
        document.getElementById("question").textContent =
            "Nice try, but you can't escape that easily!";
        document.getElementById("name").style.display = "none";

        // Optional: You can also add a timeout to reset the position after a few seconds
        setTimeout(() => {
            resetNoButtonPosition();
        }, 50000); // Adjust the time delay (in milliseconds) as per your requirement
    }

    if (response === "Yes") {
        //
