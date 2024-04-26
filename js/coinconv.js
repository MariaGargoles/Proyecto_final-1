const CoinConversion = () => {
  const buttons = document.querySelectorAll("#coins button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Se hizo clic en el botón de la moneda", button.id);
    });
  });
};

const PeticionApi = () => {
  const url =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

  fetch(url).then((response) => {
    if (response.ok) {
      response.json();
      console.log(response.json);
    }
  });
};

CoinConversion();
PeticionApi();
