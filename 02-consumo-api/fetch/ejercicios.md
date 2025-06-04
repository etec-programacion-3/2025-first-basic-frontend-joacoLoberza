# Ejercicios: Consumo de API

A continuación tienes una guía paso a paso para implementar cada funcionalidad. Puedes trabajar en los archivos `fetch/main.js` o `axios/main.js` según el ejemplo que elijas.

---

## 1. Crear producto (POST)
- Completa la función `createProduct(name, price, description)`.
- Debe enviar una petición POST a la API (`/products`) con los datos del formulario.
- Sugerencia: usa `fetch` o `axios.post` según el archivo.
- Llama a esta función desde el evento submit del formulario.

## 2. Eliminar producto (DELETE)
- Completa la función `deleteProduct(id)`.
- Debe enviar una petición DELETE a la API (`/products/:id`).
- Agrega un botón "Eliminar" junto a cada producto en la lista y asígnale el evento para llamar a esta función.

## 3. Ver detalles de producto (GET)
- Completa la función `showDetails(id)`.
- Debe enviar una petición GET a la API (`/products/:id`) y mostrar los detalles (puede ser con `alert` o en el DOM).
- Asigna el evento de click sobre el nombre del producto para llamar a esta función.

## 4. Manejo de errores
- En cada función, usa `try/catch` para capturar errores y muestra un mensaje si ocurre un problema.

---

Lee los comentarios en el código para saber dónde implementar cada parte. ¡Suerte! 