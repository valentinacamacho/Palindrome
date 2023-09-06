const input = document.querySelector(".inpusts input");
const btnValidation = document.querySelector(".inpusts button");
let stringEntrada;

btnValidation.addEventListener("click", () => {
  let reverseInput = stringEntrada.split("").reverse().join();
    if (reverseInput != stringEntrada) {
      return alert("No es Palindrome")
    }
    alert("Es palindrome")
 
});

input.addEventListener("keyup", () => {
  //validacion de letras numero y espacios.
  stringEntrada = input.value.toLowerCase().replace(/[A-Za-z0-9]+/ig, "");
  if (stringEntrada) {
    return btnValidation.classList.add("active");
  }
  btnValidation.classList.remove("active");
});