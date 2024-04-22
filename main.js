//Menu desplegable



const DisplayMenu = () =>{
const HamburguerButton = document.getElementById("FirstBottomMenu");    
const HamburguerMenu = document.getElementById("NavarHambuguerMenu");
const listElements = document.getElementsByClassName("ContainerNav__List__item");

HamburguerButton.addEventListener("click", (event) => {
console.log("Click done")
event.classList.toggle("ContainerNav__List__item--active");

})

}
DisplayMenu();