const preloader = document.querySelector("#preloader");
const body = document.body;

window.addEventListener("load", () => {
    preloader.classList.add("hidden");
    body.classList.remove("disableScrolling");
});
