const IP = "eshorizonesmc.falix.gg";

const boton = document.getElementById("copiarIP");

if (boton) {
    boton.addEventListener("click", () => {
        navigator.clipboard.writeText(IP);

        boton.textContent = "✅ IP Copiada";

        setTimeout(() => {
            boton.textContent = "Copiar IP";
        }, 2000);
    });
}
