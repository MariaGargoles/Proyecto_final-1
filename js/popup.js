const EventPopup = () => {
  const popup = document.getElementById("popup");
  const closepopup = document.getElementById("close");

  localStorage.setItem("NewsletterArcv", "true");

  setTimeout(function () {
    if (localStorage.getItem("NewsletterArcv") !== true) {
      popup.showModal();
    }
  }, 5000);

  window.addEventListener("scroll", () => {
    if (
      window.scrollY / document.documentElement.scrollHeight >= 0.25 &&
      localStorage.getItem("NewsletterArcv") !== "true"
    ) {
      popup.showModal();
    }
  });

  closepopup.addEventListener("click", (event) => {
    console.log(popup);
    popup.close();
  });

  /*document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      popup.close();
    }
  });*/
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
