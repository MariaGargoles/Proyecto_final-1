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

const ValidarFormulario = () => {
const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,100}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};

const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const checkbox = document.getElementById("checkbox");


nameInput.addEventListener("input", () => {
    if (expressions.name.test(nameInput.value)) {
        nameInput.classList.remove("form__label__input--red");
        nameInput.classList.add("form__label__input--green");
        errorName.textContent = "";
    } else {
        nameInput.classList.remove("form__label__input--green");
        nameInput.classList.add("form__label__input--red");
        errorName.textContent = "Nombre inválido";
    }
});

emailInput.addEventListener("input", () => {
    if (expressions.email.test(emailInput.value)) {
        emailInput.classList.remove("form__label__input--red");
        emailInput.classList.add("form__label__input--green");
        errorEmail.textContent = "";
    } else {
        emailInput.classList.remove("form__label__input--green");
        emailInput.classList.add("form__label__input--red");
        errorEmail.textContent = "Correo electrónico inválido";
    }
});

form.addEventListener("submit", (event) => {
    if (!expressions.name.test(nameInput.value)) {
        event.preventDefault();
        nameInput.classList.remove("form__label__input--green");
        nameInput.classList.add("form__label__input--red");
        errorName.textContent = "Por favor, ingresa un nombre válido";
    }

    if (!expressions.email.test(emailInput.value)) {
        event.preventDefault();
        emailInput.classList.remove("form__label__input--green");
        emailInput.classList.add("form__label__input--red");
        errorEmail.textContent = "Por favor, ingresa un correo electrónico válido";
    }

    if (!checkbox.checked) {
        event.preventDefault();
        alert("Debes aceptar los términos y condiciones");
    }
});
}
ValidarFormulario();

//Mandar los datos a una API

