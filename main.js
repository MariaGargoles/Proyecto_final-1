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
    
}



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

//form




const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const ValidarFormulario = (event) => {
    const form = document.getElementById("form")
    const NameInput = document.getElementById("name")
    const EmailInput = document.getElementById("email")
    const checkbox =document.getElementById("checkbox")
    NameInput.addEventListener("change", (event) => {
        if (expressions.name.test(nameInput.value)) {
            nameInput.classList.remove("form__label__input--red");
            nameInput.classList.add("form__label__input--green");
            errorName.textContent = "";
        } else {
            nameInput.classList.remove("form__label__input--green");
            nameInput.classList.add("form__label__input--red");
            errorName.textContent = "Nombre inválido";
        }
    });}
