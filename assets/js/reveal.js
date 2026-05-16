const reveals = document.querySelectorAll(".reveal");

function revealScroll() {
    reveals.forEach((reveal) => {
        const rect = reveal.getBoundingClientRect();

        if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
            reveal.classList.add("show");
        } else {
            reveal.classList.remove("show");
        }
    });
}

window.addEventListener("scroll", revealScroll);

revealScroll();