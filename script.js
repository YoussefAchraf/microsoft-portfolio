document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector("nav ul");

    hamburger.addEventListener("click", () => {
        navList.classList.toggle("show");
    });

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();

            const target = document.querySelector(link.getAttribute("href"));

            target.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    document.querySelectorAll(".project-card img").forEach(image => {

        image.addEventListener("click", () => {

            const modal = document.createElement("div");

            modal.className = "lightbox";

            modal.innerHTML = `
                <img src="${image.src}" alt="${image.alt}">
            `;

            document.body.appendChild(modal);

            modal.addEventListener("click", () => {
                modal.remove();
            });

        });

    });

    const form = document.querySelector("form");

    form.addEventListener("submit", e => {

        e.preventDefault();

        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const message = document.querySelector("#message");

        if (
            name.value.trim() === "" ||
            email.value.trim() === "" ||
            message.value.trim() === ""
        ) {
            alert("Please complete all fields.");
            return;
        }

        alert("Message sent successfully.");
        form.reset();
    });

    document.querySelectorAll("input, textarea").forEach(field => {

        field.addEventListener("input", () => {

            field.style.borderColor =
                field.value.trim() === ""
                    ? "red"
                    : "green";

        });

    });

});

function filterProjects(category) {

    document.querySelectorAll(".project-card").forEach(project => {

        if (
            category === "all" ||
            project.dataset.category === category
        ) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }

    });

}
