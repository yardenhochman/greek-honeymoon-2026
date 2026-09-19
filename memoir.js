document.querySelectorAll(".reveal").forEach(el => el.classList.add("is-visible"));
document.querySelector("[data-print]").addEventListener("click", () => window.print());
