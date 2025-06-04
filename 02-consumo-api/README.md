# 02 - Consumo de APIs REST

## ¿Qué vas a encontrar aquí?
Esta carpeta te enseña a consumir APIs REST desde el frontend usando JavaScript moderno. Trabajarás con los endpoints de productos de tu backend, usando tanto fetch como axios y métodos HTTP para obtener, crear y eliminar productos.

### Estructura de la carpeta
- `fetch/` y `axios/`:
  - `resuelto.js`: CRUD completo y funcional (ejemplo resuelto).
  - `ejercicio.js`: Solo GET resuelto, POST/DELETE/Detalles con comentarios guía para completar (ejercicio para resolver).
  - `index.html`: Interfaz para listar y agregar productos.
  - `ejercicios.md`: Guía paso a paso para que completes funcionalidades.

## ¿Cómo usarlo?
1. Asegúrate de que tu backend esté corriendo en `http://localhost:5000/api`.
2. Abre `fetch/index.html` o `axios/index.html` en tu navegador y cambia el script en el HTML para probar el ejemplo resuelto o el ejercicio.
3. Observa cómo se listan los productos y sigue los comentarios en el código para completar los ejercicios.

## Ejercicios propuestos
- Consulta el archivo `fetch/ejercicios.md` para instrucciones detalladas (aplican igual para ambos ejemplos).

---

## Recursos recomendados
- [Uso de fetch - MDN (español)](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)
- [Axios: Guía completa (en español) - Fazt](https://www.youtube.com/watch?v=6LyagkoRWYA)
- [Consumo de APIs REST con JavaScript (en español) - midu.dev](https://midu.dev/como-consumir-una-api-rest-desde-javascript/)
- [HTTP Methods Explained (en inglés) - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [REST API concepts and examples (en inglés) - YouTube](https://www.youtube.com/watch?v=7YcW25PHnAA)

## Conceptos clave
- fetch y axios
- Verbos HTTP (GET, POST, PUT, DELETE)
- Manejo de respuestas y errores

## Ejemplo inicial: Listar productos
- Usar fetch para obtener y mostrar productos desde `/products`.

## Ejercicios propuestos
1. Implementa la creación de un producto usando el formulario y el endpoint POST.
2. Agrega la funcionalidad para eliminar productos.
3. Muestra los detalles de un producto al hacer clic en él.

Lee el código en la carpeta `fetch/` y sigue los comentarios para completar los ejercicios. 