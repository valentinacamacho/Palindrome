const input = document.querySelector(".inpusts input");
const btnValidation = document.querySelector(".inpusts button");
let stringEntrada;

btnValidation.addEventListener("click", () => {

   let reverseInput = stringEntrada.split("").reverse().join("");
   for (let i = 0; i <= reverseInput.length; i++) {
    if (stringEntrada[i]!=reverseInput[reverseInput.length-i- 1]) {
    return alert("No es una palabra palindrome");
  }
  return alert("Sí es una palabra palindrome");
}

});

input.addEventListener("keyup", () => {
  //validacion de letras numero y espacios.
   stringEntrada = input.value.toLowerCase().replace(/[A-Za-z0-9]+/ig, "");
  if (stringEntrada) {
    return btnValidation.classList.add("active");
  }
  btnValidation.classList.remove("active");
});