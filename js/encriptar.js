let textoIngresado = document.querySelector(".texto-entrada");
let textoSalida = document.querySelector(".texto-salida");

function encriptar(){
    textoIngresado = textoIngresado.value.replaceAll(/e/gi, "enter")
    .replaceAll(/i/gi, "imes")
    .replaceAll(/a/gi, "ai")
    .replaceAll(/o/gi, "ober")
    .replaceAll(/u/gi, "ufat");

    textoSalida.value = textoIngresado;
    
    return textoIngresado = "";
}

const boton = document.querySelector(".encriptar")
boton.addEventListener ("click", function() {    
    if(document.querySelector(".texto-entrada").value.match(/^[a-z ]*$/)) {
        encriptar();
    } else {
        alert("Solo se permiten letras minusculas, sin caracteres especiales.")
    }
});

