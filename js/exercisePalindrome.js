const input = document.querySelector(".inpusts input");
let stringEntrada;

input.addEventListener("keyup", () =>{
    //validacion de letras numero y espacios.
     stringEntrada = input.value.replace(/[A-Za-z0-9]+/ig, "");
    console.log(stringEntrada)
})