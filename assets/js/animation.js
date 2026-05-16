const projetos = document.querySelector(".projetos");

/* cria linha verde */

const fill = document.createElement("div");

fill.classList.add("timeline-fill");

projetos.appendChild(fill);

/* pontos */

const points = document.querySelectorAll(".timeline-point");

/* scroll */

window.addEventListener("scroll", () => {
    const rect = projetos.getBoundingClientRect();

    const scrollStart = window.innerHeight * 0.665;

    const total = projetos.offsetHeight;

    let progress = ((scrollStart - rect.top) / total) * total;

    progress = Math.max(0, Math.min(progress, total));

    fill.style.height = `${progress}px`;

    points.forEach((point) => {
        const pointRect = point.getBoundingClientRect();

        if (pointRect.top < window.innerHeight * 0.5) {
            point.classList.add("active");
        } else {
            point.classList.remove("active");
        }
    });

    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        const rect = card.getBoundingClientRect();

        if (
            rect.top < window.innerHeight * 0.8 &&
            rect.bottom > window.innerHeight * 0.2
        ) {
            card.classList.add("show");
        } else {
            card.classList.remove("show");
        }
    });
});
