const button__scroll = document.getElementById("BtnScroll");

button__scroll.addEventListener("click", () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, 200);
});
