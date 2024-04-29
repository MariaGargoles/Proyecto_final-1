const DisplayMenu = () => {
  const HamburguerButton = document.getElementById("FirstBottomMenu");
  const HamburguerMenu = document.getElementById("NavarHambuguerMenu");
  const CloseHamburguerMenu = document.getElementById("CloseBottomMenu");

  HamburguerButton.addEventListener("click", (event) => {
    console.log("Click done");
    HamburguerMenu.classList.toggle("ContainerNav__Section__2--active");
  });
};

DisplayMenu();
