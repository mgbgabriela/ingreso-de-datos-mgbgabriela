let btnEnv = document.getElementById("btnEnviar");
let dato = document.forms[0].dato;
let rotulo = document.getElementById("rotulo");

btnEnv.addEventListener("click",() => {
    console.log("La altura de la persona",dato.value, "cm");
})rotulo.innerHTML = "La altura es:";
