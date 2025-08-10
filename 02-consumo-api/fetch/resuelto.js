// URL base de la API de productos
const BASE_URL = 'http://localhost:5000/api/products';

// Referencias a los elementos del DOM
const list = document.getElementById('product-list');
const form = document.getElementById('product-form');

// Obtiene y muestra la lista de productos desde la API
async function fetchProducts() {
  const res = await fetch(BASE_URL);
  const products = await res.json();
  list.innerHTML = '';
  products.forEach(prod => {
    const li = document.createElement('li');
    li.textContent = `${prod.name} - $${prod.price}`;
    li.onclick = () => showDetails(prod.id);
    const btn = document.createElement('button');
    btn.textContent = 'Eliminar';
    btn.onclick = e => {
      e.stopPropagation();
      deleteProduct(prod.id).then(fetchProducts);
    };
    li.appendChild(btn);
    list.appendChild(li);
  });
}

// Crea un producto usando fetch POST
async function createProduct(name, price, description) {
  try {
    await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price, description })
    });
    fetchProducts();
  } catch (err) {
    alert('Error al crear producto');
  }
}

// Elimina un producto usando fetch DELETE
async function deleteProduct(id) {
  try {
    await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
  } catch (err) {
    alert('Error al eliminar producto');
  }
}

// Muestra detalles de un producto usando fetch GET /products/:id
async function showDetails(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    const prod = await res.json();
    alert(`Nombre: ${prod.name}\nPrecio: $${prod.price}\nDescripción: ${prod.description}`);
  } catch (err) {
    alert('Error al obtener detalles');
  }
}

// Maneja el submit del formulario para crear un producto
form.onsubmit = async e => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const description = document.getElementById('description').value;
  await createProduct(name, price, description);
  form.reset();
};

// Render inicial
fetchProducts(); 