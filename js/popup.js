const EventPopup = () => {
  const popup = document.getElementById("popup");
  const closepopup = document.getElementById("close");
  const button = document.getElementById("button-up");

  button.addEventListener("click", () => {
    console.log("click done");
    popup.showModal();
  });

  setTimeout(function () {
    //popup.style.display = "initial";
    popup.showModal();
    console.log("modal up");
  }, 2000);

  window.addEventListener("scroll", function () {
    const scrollPercentage =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
      100;

    if (scrollPercentage >= 15) {
      popup.showModal();
      console.log("modal scroll");
      //popup.style.display = "initial";
    }
  });

  closepopup.addEventListener("click", (event) => {
    //popup.style.display = "none";
    popup.close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      //popup.style.display = "none";
      popup.close();
    }
  });
};
EventPopup();

//validacion

const ValidarFormularioModal = () => {
  const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,100}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const form = document.getElementById("formmodal");
  const nameInput = document.getElementById("namemodal");
  const emailInput = document.getElementById("emailmodal");
  const Button = document.getElementById("buttonmodal");

  nameInput.addEventListener("input", () => {
    if (expressions.name.test(nameInput.value)) {
      nameInput.classList.remove("popup__container__form__label__input--red");
      nameInput.classList.add("popup__container__form__label__input--green");
    } else {
      nameInput.classList.remove("popup__container__form__label__input--green");
      nameInput.classList.add("popup__container__form__label__input--red");
      alert("Enter a valid name");
    }
  });

  emailInput.addEventListener("input", () => {
    if (expressions.email.test(emailInput.value)) {
      emailInput.classList.remove("popup__container__form__label__input--red");
      emailInput.classList.add("popup__container__form__label__input--green");
    } else {
      emailInput.classList.remove(
        "popup__container__form__label__input--green"
      );
      emailInput.classList.add("popup__container__form__label__input--red");
      alert("Enter a valid email");
    }
  });

  form.addEventListener("submit", (event) => {
    if (!expressions.name.test(nameInput.value)) {
      event.preventDefault();
      nameInput.classList.remove("popup__container__form__label__input--green");
      nameInput.classList.add("form__label__input--red");
      alert("Please enter a valid name");
    }

    if (!expressions.email.test(emailInput.value)) {
      event.preventDefault();
      emailInput.classList.remove(
        "popup__container__form__label__input--green"
      );
      emailInput.classList.add("popup__container__form__label__input--red");
      alert("Please enter a valid email");
    }
  });
};
ValidarFormularioModal();

const MandarDatosApiModal = () => {
  const form = document.getElementById("formmodal");

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

MandarDatosApiModal();
