let textoI = document.querySelector(".texto-entrada");
let textoS = document.querySelector(".texto-salida");

function desencriptar(){
    textoI = textoI.value.replaceAll(/enter/gi, "e")
    .replaceAll(/imes/gi, "i")
    .replaceAll(/ai/gi, "a")
    .replaceAll(/ober/gi, "o")
    .replaceAll(/ufat/gi, "u");

    textoS.value = textoI;
}

const botondesencriptar = document.querySelector(".desencriptar")
botondesencriptar.addEventListener ("click", function() {    
    if(document.querySelector(".texto-entrada").value.match(/^[a-z ]*$/)) {
        desencriptar();
    } else {
        alert("Solo se permiten letras minusculas, sin caracteres especiales.")
    }
});