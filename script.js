// Verificar si ya existe una suma almacenada en el localStorage
let suma = localStorage.getItem('suma') ? parseInt(localStorage.getItem('suma')) : 0;

// Función para abrir el modal
function abrirModal() {
    document.getElementById('myModal').style.display = 'block';
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Función para confirmar el pago
function confirmarPago() {
    document.getElementById('botonPago').style.display = 'block'; // Mostrar el botón de pago
    cerrarModal(); // Cerrar el modal
}

// Función para sumar la cantidad seleccionada
// Función para sumar la cantidad seleccionada
function sumar() {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    if (cantidad !== 0) {
        suma += cantidad;
        localStorage.setItem('suma', suma);
        document.getElementById('mensaje').value = `Hola Camila, sumaste ${cantidad} para el alquiler del celu.\n\n`;

        if (suma >= 50) {
            if (suma === 50) {
                document.getElementById('mensaje').value += `¡Felicidades Cami! Pagaste la renta del celu por una semana más.`;
            } else {
                document.getElementById('mensaje').value += `Cami no llegaste, dale el celu a mamá o papá por una semana.`;
            }
            // Resetear la suma
            suma = 0;
            localStorage.setItem('suma', suma);
        } else {
            document.getElementById('mensaje').value += `Llevas ganado hasta ahora: ${suma}.`;
        }

       
    } else {
        alert('Por favor, selecciona una cantidad diferente de 0.');
    }
}

// Obtener el botón


// Obtener el botón
const botonPago = document.getElementById('botonPago');

// Asignar las funciones al evento onclick del botón
botonPago.onclick = function() {
    
    sumar();
};

// Mostrar el mensaje inicial
document.getElementById('mensaje').value = `Hola Camila, hasta ahora has sumado ${suma} para el alquiler del celu.`;

// Mostrar u ocultar el modal al cambiar la cantidad seleccionada
document.getElementById('cantidad').addEventListener('change', function() {
    if (this.value !== "0") {
        abrirModal();
    } else {
        cerrarModal();
    }
});
