document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.querySelector(".sidebar");










    // Flip cards
    document.querySelectorAll(".flip-card").forEach((card) => {
      card.addEventListener("click", () => {
        card.classList.toggle("flipped");
      });
    });

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  // Modal popup logic
  const popupModal = document.getElementById("popupModal");
  const popupText = document.getElementById("popupText");
  const closeButton = document.querySelector(".close-button");

  function openPopup(text) {
    popupText.textContent = text;
    popupModal.style.display = "flex";
  }

  function closePopup() {
    popupModal.style.display = "none";
  }

  if (closeButton) {
    closeButton.addEventListener("click", closePopup);
  }

  const galleryItems = document.querySelectorAll(".gallery-item[data-popup]");

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const text = item.getAttribute("data-popup");
      openPopup(text);
    });
  });

  AOS.init();
  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });



  // Typewriter effect
  document.querySelectorAll(".typewriter").forEach((el) => {
    const fullText = el.dataset.text || el.textContent;
    el.textContent = "";
    let i = 0;
    function typeLetter() {
      if (i < fullText.length) {
        el.textContent += fullText.charAt(i);
        i++;
        setTimeout(typeLetter, 90);
      }
    }
    typeLetter();
  });





  // Canvas portrait with hover animation
  const canvas = document.getElementById("portraitCanvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "assets/img/p.jpg";

    img.onload = () => {
      const canvasSize = 200;
      const radius = 90;

      ctx.clearRect(0, 0, canvasSize, canvasSize);
      ctx.beginPath();
      ctx.arc(canvasSize / 2, canvasSize / 2, radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();

      const aspectRatio = img.width / img.height;
      let sx, sy, sWidth, sHeight;

      if (aspectRatio > 1) {
        sHeight = img.height;
        sWidth = sHeight;
        sx = (img.width - sWidth) / 2;
        sy = 0;
      } else {
        sWidth = img.width;
        sHeight = sWidth;
        sx = 0;
        sy = (img.height - sHeight) / 2;
      }

      ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, canvasSize, canvasSize);
    };

    canvas.addEventListener("mouseenter", () => {
      gsap.to(canvas, { scale: 1.05, duration: 0.3 });
    });

    canvas.addEventListener("mouseleave", () => {
      gsap.to(canvas, { scale: 1, duration: 0.3 });
    });
  }
});