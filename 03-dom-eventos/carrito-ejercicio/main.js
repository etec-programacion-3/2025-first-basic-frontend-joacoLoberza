// Referencias a los elementos del DOM
const productList = document.getElementById('product-list');
const cartList = document.getElementById('cart-list');
const emptyCartBtn = document.getElementById('empty-cart');
const cartSummary = document.getElementById('cart-summary');
const clearCartBtn = document.getElementById('empty-cart');

// Estado del carrito (array de productos)
let cart = [];

// Renderiza el carrito en el DOM y muestra el resumen
const renderCart = () => {
  cartList.innerHTML = '';
  cart.forEach((item, idx) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    const button = document.createElement('button');
    button.classList.add('deleteProduct');
    button.textContent = 'Eliminar';
    li.appendChild(button);
    cartList.appendChild(li);
  });
  let total = 0;
  let products = [];
  let cartProdcuts = "";

  for (let prod of cart) {
    total += parseInt(prod.price);
    products.push(prod.name);
  }

  for (let name1 of products) {
    products.forEach((name2, idx) => {
      if (name1 === name2 && idx != products.indexOf(name1)) {
        products.splice(idx,1)
      }
    })
  }

  for (let name of products) {
    cartProdcuts += `${name}, `
  }
  
  cartSummary.textContent = `Total: $${total} | Productos: ${cartProdcuts.slice(0, -2)}`;
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

cartList.addEventListener('click', e => {
  if (e.target.classList.contains('deleteProduct')) {
    const product = e.target.textContent
    const productIdx = cart.indexOf(product)
    cart.splice(productIdx, 1)
    renderCart()
  }
})

clearCartBtn.onclick = e => {
  cart = []
  renderCart()
}

// Render inicial del carrito
renderCart(); 