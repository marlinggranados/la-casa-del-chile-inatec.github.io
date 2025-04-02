document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("text-box").style.visibility = "visible";
    }, 2000);
});



// Mostrar y ocultar el carrito de compras
function toggleCart() {
    const carrito = document.getElementById('carrito');
    if (carrito.style.display === 'block') {
        carrito.style.display = 'none';
    } else {
        carrito.style.display = 'block';
    }
}

// Carrusel
let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = items.length - 1;
    if (currentIndex >= items.length) currentIndex = 0;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Carrito de compras
let carrito = [];

function addToCart(productName, price) {
    carrito.push({ productName, price });
    updateCart();
}

function addToFavorite(productName) {
    alert(`${productName} ha sido añadido a tus favoritos.`);
}

function updateCart() {
    const carritoItems = document.getElementById('carrito-items');
    carritoItems.innerHTML = '';
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - $${item.price}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => removeFromCart(item.productName);
        li.appendChild(deleteButton);
        carritoItems.appendChild(li);
    });
}

function removeFromCart(productName) {
    carrito = carrito.filter(item => item.productName !== productName);
    updateCart();
}

function checkout() {
    alert('¡Gracias por tu compra!');
    carrito = [];
    updateCart();
}

function cancelCart() {
    carrito = [];
    updateCart();
    alert('Carrito cancelado.');
}
