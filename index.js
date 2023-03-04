const menuMobileButtom = document.getElementById("menu__mobile");
const menuLista = document.getElementById("menu__lista");

function togglebutton(){
    menuLista.classList.toggle("show");
}

menuMobileButtom.addEventListener("click", togglebutton);