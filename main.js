onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const valentineContainer = document.getElementById("valentineContainer");
  const loveMessage = document.getElementById("loveMessage");
  const flowersContainer = document.getElementById("flowersContainer");

  // Show valentine prompt after flowers finish animating (5.5 seconds)
  setTimeout(() => {
    valentineContainer.classList.add("show");
  }, 5500);

  // Yes button functionality - show popup message
  yesBtn.addEventListener("click", () => {
    // Show the love message as popup
    loveMessage.classList.add("show");
  });

  // Back button functionality - return to flowers
  const backBtn = document.getElementById("backBtn");
  backBtn.addEventListener("click", () => {
    loveMessage.classList.remove("show");
  });

  // No button functionality - escape on hover
  let escapeCount = 0;
  
  noBtn.addEventListener("mouseenter", () => {
    if (escapeCount === 0) {
      // First escape: move to a random position
      const randomX = Math.random() * 300 - 150; // -150 to 150px
      const randomY = Math.random() * 300 - 150; // -150 to 150px
      
      noBtn.style.position = "relative";
      noBtn.style.left = randomX + "px";
      noBtn.style.top = randomY + "px";
      
      escapeCount++;
      
      // Reset escape count after a short delay so user can try again
      setTimeout(() => {
        escapeCount = 0;
      }, 500);
    }
  });

  // Alternative: Move the button continuously on every hover attempt
  noBtn.addEventListener("mouseover", (e) => {
    if (noBtn.matches(":hover")) {
      const randomX = (Math.random() - 0.5) * 400;
      const randomY = (Math.random() - 0.5) * 400;
      
      noBtn.style.position = "fixed";
      noBtn.style.left = (Math.random() * window.innerWidth * 0.7) + "px";
      noBtn.style.top = (Math.random() * window.innerHeight * 0.7) + "px";
    }
  });

  // Prevent clicking the No button by moving it away
  noBtn.addEventListener("mousedown", (e) => {
    if (!noBtn.style.position || noBtn.style.position === "relative") {
      e.preventDefault();
      const randomX = Math.random() * window.innerWidth * 0.6;
      const randomY = Math.random() * window.innerHeight * 0.6;
      
      noBtn.style.position = "fixed";
      noBtn.style.left = randomX + "px";
      noBtn.style.top = randomY + "px";
    }
  });
};
