const CoinConversion = () => {};

const PeticionApi = () => {
  const buttons = document.querySelectorAll("#coins button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Se hizo clic en el botón de la moneda", button.id);
    });
  });
};

CoinConversion();
PeticionApi();
