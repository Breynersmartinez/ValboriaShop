// script.js
function changeImage(element) {
    document.getElementById('main-image').src = element.src;
}

function showOrderForm() {
    document.getElementById('order-form').classList.remove('hidden');
}

function sendOrder() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;
    const neighborhood = document.getElementById('neighborhood').value;
    const confirmSize = document.getElementById('confirm-size').value;
    const confirmColor = document.getElementById('confirm-color').value;
    const color = document.getElementById('color').value;
    const size = document.getElementById('size').value;
    const price = "$20.00";

    const message = `Saludos, mi nombre es: ${name}.
Acabo de hacer un pedido del producto - ${color} / ${size} por un total de: ${price}.
Pago:
Celular del cliente: ${phone}.
Ciudad de destino: ${city}.
Dirección: ${address}.
Talla y color: ${confirmSize} / ${confirmColor}.`;

    const whatsappUrl = `https://wa.me/573127138737?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}