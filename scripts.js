const form = document.getElementById("pedidoForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    // OBTENER DATOS

    const nombre = document.getElementById("nombre").value;

    const producto = document.getElementById("producto").value;

    const mensaje = document.getElementById("mensaje").value;


    // NUMERO WHATSAPP

    const numero = "573112258608";


    // MENSAJE

    const texto = `
Hola, soy ${nombre}

Quiero pedir:
${producto}

Detalles:
${mensaje}
    `;


    // URL

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;


    // ABRIR WHATSAPP

    window.open(url, "_blank");

});