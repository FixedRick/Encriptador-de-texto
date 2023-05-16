function copiar() {
    navigator.clipboard.writeText(
        document.querySelector(".texto-salida").value
    );
}
document.querySelector(".copiar").addEventListener("click", copiar);