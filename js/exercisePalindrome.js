const input = document.querySelector(".inpusts input");
const btnValidation = document.querySelector(".inpusts button");
let stringEntrada;

btnValidation.addEventListener("click", () =>{

});

input.addEventListener("keyup", () => {
    //validacion de letras numero y espacios.
    stringEntrada = input.value.replace(/[A-Za-z0-9]+/ig, "");
});