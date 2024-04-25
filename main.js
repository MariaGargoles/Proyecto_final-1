//Menu desplegable

function DisplayMenu() {
  const HamburguerButton = document.getElementById("FirstBottomMenu");
  const HamburguerMenu = document.getElementById("NavarHambuguerMenu");

  HamburguerButton.addEventListener("click", (event) => {
    console.log("Click done");
    HamburguerMenu.classList.toggle("ContainerNav__Section__2--active");
  });
}

DisplayMenu();

//Menu scroll
const scrollbar = document.getElementById("scroll__progress");

function update() {
  scrollbar.style.width = `${
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  }%`;
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
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const form = document.getElementById("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const checkbox = document.getElementById("checkbox");

  //switch o funcion pa clases

  nameInput.addEventListener("input", () => {
    if (expressions.name.test(nameInput.value)) {
      nameInput.classList.remove("form__label__input--red");
      nameInput.classList.add("form__label__input--green");
    } else {
      nameInput.classList.remove("form__label__input--green");
      nameInput.classList.add("form__label__input--red");
      alert("Enter name valid");
    }
  });

  emailInput.addEventListener("input", () => {
    if (expressions.email.test(emailInput.value)) {
      emailInput.classList.remove("form__label__input--red");
      emailInput.classList.add("form__label__input--green");
    } else {
      emailInput.classList.remove("form__label__input--green");
      emailInput.classList.add("form__label__input--red");
      alert("Enter email valid");
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
      errorEmail.textContent =
        "Por favor, ingresa un correo electrónico válido";
    }

    if (!checkbox.checked) {
      event.preventDefault();
      alert("Debes aceptar los términos y condiciones");
    }
  });
};
ValidarFormulario();

//Mandar los datos a una API

const MandarDatosApi = () => {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    const data = {};
    formData.forEach(function (value, key) {
      data[key] = value;
    });

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          console.log("Error al enviar los datos a la API");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Respuesta de la API:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
};

MandarDatosApi();

///POPUP
