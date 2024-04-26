const PeticionApi = () => {
  const url =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

  let ProfpriceEU;
  let ProfpriceGB;
  let PrempriceEU;
  let PrempriceGB;

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      console.log("Error");
    })
    .then((jsonUsd) => {
      eur = jsonUsd.usd.eur;
      gbp = jsonUsd.usd.gbp;

      let ProfpriceEUcon = 25 * eur;
      ProfpriceEU = ProfpriceEUcon.toFixed(2);

      let ProfpriceGBcon = 25 * gbp;
      ProfpriceGB = ProfpriceGBcon.toFixed(2);

      let PrempriceEUcon = 60 * eur;
      PrempriceEU = PrempriceEUcon.toFixed(2);

      let PrempriceGBcon = 60 * gbp;
      PrempriceGB = PrempriceGBcon.toFixed(2);

      const buttons = document.querySelectorAll("#coins button");

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          console.log(button.id);
          let basic = document.getElementById("basic");
          let profesional = document.getElementById("profesional");
          let premium = document.getElementById("premium");

          if (button.id.includes("usd")) {
            basic.innerText = "";
            basic.innerText = `$0`;

            profesional.innerText = "";
            profesional.innerText = `$25`;

            premium.innerText = "";
            premium.innerText = `$60`;
          }
          if (button.id.includes("eur")) {
            basic.innerText = "";
            basic.innerText = `€${0 * eur}`;

            profesional.innerText = "";
            profesional.innerText = `€${ProfpriceEU}`;

            premium.innerText = "";
            premium.innerText = `€${PrempriceEU}`;
          }

          if (button.id.includes("gbp")) {
            basic.innerText = "";
            basic.innerText = `£${0 * gbp}`;

            profesional.innerText = "";
            profesional.innerText = `£${ProfpriceGB}`;

            premium.innerText = "";
            premium.innerText = `£${PrempriceGB}`;
          }
        });
      });
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

PeticionApi();
