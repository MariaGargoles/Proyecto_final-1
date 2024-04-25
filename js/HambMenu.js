const DisplayMenu = () => {
    const HamburguerButton = document.getElementById("FirstBottomMenu");    
    const HamburguerMenu = document.getElementById("NavarHambuguerMenu");

    HamburguerButton.addEventListener("click", (event) => {
        console.log("Click done")
        HamburguerMenu.classList.toggle("ContainerNav__Section__2--active");
    });
}

DisplayMenu();