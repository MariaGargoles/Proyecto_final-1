//Menu desplegable



const DisplayMenu = () => {
    const HamburguerButton = document.getElementById("FirstBottomMenu");    
    const HamburguerMenu = document.getElementById("NavarHambuguerMenu");

    HamburguerButton.addEventListener("click", (event) => {
        console.log("Click done")
        HamburguerMenu.classList.toggle("ContainerNav__Section__2--active");
    });
}

DisplayMenu();


//Menu scroll
const scrollbar = document.getElementById("scroll__progress");

function update() {
    scrollbar.style.width = `${(window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100}%`;
    requestAnimationFrame(update);
}

window.addEventListener('load', () => {
    requestAnimationFrame(update);
});


//boton vuelta al principio

const button__scroll = document.getElementById("BtnScroll");

button__scroll.addEventListener("click", () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, 200);
});