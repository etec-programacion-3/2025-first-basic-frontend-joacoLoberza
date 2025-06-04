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
    // Botón para eliminar el producto del carrito
    const btn = document.createElement('button');
    btn.textContent = 'Eliminar';
    btn.className = 'remove';
    btn.dataset.idx = idx;
    li.appendChild(btn);
    cartList.appendChild(li);
  });
  // Calcula y muestra el total y la cantidad de productos
  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);
  cartSummary.textContent = `Total: $${total} | Productos: ${cart.length}`;
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

// Maneja el evento de eliminar productos del carrito usando delegación de eventos
cartList.addEventListener('click', e => {
  if (e.target.classList.contains('remove')) {
    cart.splice(e.target.dataset.idx, 1);
    renderCart();
  }
});

// Maneja el evento de vaciar el carrito
emptyCartBtn.addEventListener('click', () => {
  cart = [];
  renderCart();
});

// Render inicial del carrito
renderCart(); 