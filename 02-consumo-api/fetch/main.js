// URL base de la API de productos
const BASE_URL = 'http://localhost:5000/api/products';

// Referencias a los elementos del DOM
const list = document.getElementById('product-list');
const form = document.getElementById('product-form');

// Obtiene y muestra la lista de productos desde la API
async function fetchProducts() {
  const res = await fetch(BASE_URL); // Realiza una petición GET
  const products = await res.json(); // Convierte la respuesta a JSON
  list.innerHTML = '';
  products.forEach(prod => {
    const li = document.createElement('li');
    li.textContent = `${prod.name} - $${prod.price}`;
    // Llama a showDetails al hacer clic en el nombre del producto
    li.onclick = () => showDetails(prod.id);
    // Crea el botón de eliminar y llama a deleteProduct
    const btn = document.createElement('button');
    btn.textContent = 'Eliminar';
    btn.onclick = e => {
      e.stopPropagation(); // Evita que se dispare el evento de detalles
      deleteProduct(prod.id).then(fetchProducts);
    };
    li.appendChild(btn);
    list.appendChild(li);
  });
}

// EJERCICIO 1: Crear producto
// Completa esta función para enviar los datos del formulario usando fetch POST
async function createProduct(name, price, description) {
  // Tu código aquí
}

// EJERCICIO 2: Eliminar producto
// Completa esta función para eliminar un producto usando fetch DELETE
async function deleteProduct(id) {
  // Tu código aquí
}

// EJERCICIO 3: Ver detalles de producto
// Completa esta función para mostrar detalles usando fetch GET /products/:id
async function showDetails(id) {
  // Tu código aquí
}

// Maneja el submit del formulario para crear un producto
form.onsubmit = async e => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const description = document.getElementById('description').value;
  // Llama a la función de crear producto
  await createProduct(name, price, description);
  form.reset();
  fetchProducts();
};

// Llama a la función para mostrar los productos al cargar la página
fetchProducts(); 