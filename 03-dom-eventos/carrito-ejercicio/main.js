// Referencias a los elementos del DOM
const productList = document.getElementById('product-list');
const cartList = document.getElementById('cart-list');
const emptyCartBtn = document.getElementById('empty-cart');
const cartSummary = document.getElementById('cart-summary');

// Estado del carrito (array de productos)
let cart = [];

// Renderiza el carrito en el DOM y muestra el resumen
const renderCart = () => {
  cartList.innerHTML = '';
  cart.forEach((item, idx) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    // TODO: Agrega aquí el botón y la lógica para eliminar el producto del carrito
    cartList.appendChild(li);
  });
  // TODO: Calcula y muestra el total y la cantidad de productos
  cartSummary.textContent = 'Total: $... | Productos: ...';
};

// Maneja el evento de agregar productos al carrito usando delegación de eventos
productList.addEventListener('click', e => {
  if (e.target.classList.contains('add')) {
    const li = e.target.closest('li');
    const { id, name, price } = li.dataset;
    cart.push({ id, name, price });
    renderCart();
  }
});

// TODO: Maneja el evento de eliminar productos del carrito usando delegación de eventos
// cartList.addEventListener(...)

// TODO: Maneja el evento de vaciar el carrito
// emptyCartBtn.addEventListener(...)

// Render inicial del carrito
renderCart(); 