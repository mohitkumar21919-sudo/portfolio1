const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});

// Images load after the page builds; tell Locomotive to re-measure the height
window.addEventListener("load", () => locoScroll.update());

function projectHoverAnimation() {
    const container = document.querySelector("#elem-container");
    const fixedImage = document.querySelector("#fixed-image");

    container.addEventListener("mouseenter", () => {
        fixedImage.style.display = "block";
    });

    container.addEventListener("mouseleave", () => {
        fixedImage.style.display = "none";
    });

    document.querySelectorAll(".elem").forEach((elem) => {
        elem.addEventListener("mouseenter", () => {
            fixedImage.style.backgroundImage = `url(${elem.dataset.image})`;
        });
    });
}

function swiperAnimation() {
    new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
    });
}

function menuAnimation() {
    const menu = document.querySelector("nav h3");
    const fullScreen = document.querySelector("#full-scr");
    const navImg = document.querySelector("nav img");
    let isOpen = false;

    menu.addEventListener("click", () => {
        isOpen = !isOpen;
        fullScreen.style.top = isOpen ? "0" : "-100%";
        navImg.style.opacity = isOpen ? "0" : "1";
    });
}

function loaderAnimation() {
    const loader = document.querySelector("#loader");
    setTimeout(() => {
        loader.style.top = "-100%";
    }, 4000);
}

swiperAnimation();
projectHoverAnimation();
loaderAnimation();
menuAnimation();