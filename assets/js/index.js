const precio = 400000; 

// Seleccionamos los elementos del DOM
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector(".valor-total");

let cantidad = 0;

precioSpan.innerHTML = precio;

function actualizarTotal() {
    const total = cantidad * precio;
    valorTotalSpan.innerHTML = total;
}

// Evento para el botón de suma
document.getElementById("btn-sumar").onclick = function() {
    cantidad++;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
};

// Evento para el botón de resta
document.getElementById("btn-restar").onclick = function() {
    if (cantidad > 0) {
        cantidad--;
        cantidadSpan.innerHTML = cantidad;
        actualizarTotal();
    }
};
