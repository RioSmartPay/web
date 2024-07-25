// Variables globales
var saldoActual = 5.00;

function mostrarAgregarSaldo() {
    // Mostrar el modal para agregar saldo
    var modal = document.getElementById("modal-agregar-saldo");
    modal.style.display = "block";
}

function cerrarAgregarSaldo() {
    // Cerrar el modal para agregar saldo
    var modal = document.getElementById("modal-agregar-saldo");
    modal.style.display = "none";
}

function agregarSaldo(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var numeroTarjeta = document.getElementById("numero-tarjeta").value;
    var fechaCaducidad = document.getElementById("fecha-caducidad").value;
    var titular = document.getElementById("titular").value;
    var cvv = document.getElementById("cvv").value;
    var montoAgregar = parseFloat(document.getElementById("monto-agregar").value);

    // Aquí podrías implementar la lógica para validar la tarjeta, CVV, etc.
    // En este ejemplo simplemente aumentaremos el saldo simulado
    saldoActual += montoAgregar;

    // Actualizar el saldo mostrado
    document.getElementById("saldo-actual").innerText = "$" + saldoActual.toFixed(2);

    // Cerrar el modal
    cerrarAgregarSaldo();
}

function realizarPago() {
    // Obtener el monto del input
    var monto = parseFloat(document.getElementById("monto-pago").value);

    // Verificar si hay saldo suficiente para realizar el pago
    if (monto > saldoActual) {
        alert("Saldo insuficiente. Por favor recargar.");
        return;
    }

    // Simular la generación de un código QR (en este caso, una URL con el monto)
    var qrText = "https://miappdepagos.com/pagar?monto=" + monto;

    // Actualizar la imagen del código QR
    document.getElementById("qr-img").src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(qrText);

    // Actualizar el saldo (simulación de descuento)
    saldoActual -= monto;
    document.getElementById("saldo-actual").innerText = "$" + saldoActual.toFixed(2);

    // Verificar si el saldo es cero o menor para mostrar mensaje de recarga
    if (saldoActual <= 0) {
        alert("Saldo actual es cero. Por favor recargar.");
    }
}
