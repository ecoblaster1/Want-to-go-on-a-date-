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
      "Maybe next time! Let me know if you change your mind.";
    document.getElementById("name").style.display = "none";

    // Optional: You can also add a timeout to reset the position after a few seconds
    setTimeout(() => {
      resetNoButtonPosition();
    }, 5000); // Adjust the time delay (in milliseconds) as per your requirement
  }

  if (response === "Yes") {
    // Remove name message and no button
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    // Update text content, show message, and change image source to "dance.gif"
    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "Awesome!! When do you finish work?";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/dance.gif";

    // Remove yes button
    document.getElementById("yesButton").remove();
  }
}

function resetNoButtonPosition() {
  const noButton = document.getElementById("no-button");
  noButton.style.position = "static";
  document.getElementsByClassName("image")[0].src = "images/catflower.jpg";
  document.getElementById("question").textContent = "Would you like to go on a date?";
  document.getElementById("name").style.display = "block";
}
