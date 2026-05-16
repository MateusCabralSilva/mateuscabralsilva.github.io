const menuBtn = document.getElementById("menu-btn");
      const nav = document.querySelector("header nav");

      menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        nav.classList.toggle("active");
      });

      const video = document.getElementById("bg-video");

      video.play().catch(() => {
        document.addEventListener(
          "touchstart",
          () => {
            video.play();
          },
          { once: true },
        );
      });