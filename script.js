document.addEventListener("DOMContentLoaded", () => {
    const homeSection = document.querySelector("#home");
    const sideNav = document.querySelector(".scroll-nav");

    window.addEventListener("scroll", () => {
        const homeHeight = homeSection.offsetHeight;
        const scrollY = window.scrollY;

        if (scrollY > homeHeight) {
            sideNav.classList.add("active"); // mostrar
        } else {
            sideNav.classList.remove("active"); // ocultar
        }
    });
});