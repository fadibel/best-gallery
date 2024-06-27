
let scrollcontainer = document.querySelector(".gallery");
let bachbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

scrollcontainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.detlaY;
    scrollcontainer.style.scrollBehavior = "auto";
});

nextbtn.addEventListener("click", () => {
    scrollcontainer.scrollLeft += 900;
    scrollcontainer.style.scrollBehavior = "smooth";
});

backbtn.addEventListener("click", () => {
    scrollcontainer.scrollLeft -= 900;
    scrollcontainer.style.scrollBehavior = "smooth";
});

