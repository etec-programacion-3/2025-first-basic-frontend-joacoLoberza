// Referencia al contenedor principal de la SPA
const app = document.getElementById('app');

// Definición de rutas y sus vistas asociadas (solo básicas)
const routes = {
  '/': () => '<h1>Inicio</h1><p>Bienvenido a la SPA.</p>',
  '/productos': () => '<h1>Productos</h1><p>Lista de productos aquí:</p>',
  '/contacto': () => '<h1>Contacto</h1><p>Formulario de contacto aquí.</p>',
  '/productos/1': () => '<h1>Detalles del Producto 1</h1><p>Vista de detalles del producto 1.</p>'
};

// Renderiza la vista correspondiente a la ruta actual
const render = route => {
  console.log(route)
  console.log(routes[route])
  app.innerHTML = routes[route] ? routes[route]() : '<h1>404</h1><p>Página no encontrada.</p>';
};

// Cambia la ruta usando history.pushState y renderiza la nueva vista
const navigate = route => {
  window.history.pushState({}, '', route);
  render(route);
};

// Maneja los clics en la navegación para cambiar de vista sin recargar
// Usa delegación de eventos en el nav
// Actualiza la URL y la vista

document.querySelector('nav').addEventListener('click', e => {
  if (e.target.matches('button[data-route]')) {
    navigate(e.target.dataset.route);
  }
  if (e.target.matches('button[data-navigation]')) {
    if (e.target.dataset.navigation === 'back') {
      history.back();
      console.log("atras")
    }
    if (e.target.dataset.navigation === 'forward') {
      history.forward();
      console.log("adelante")
    }
    render(window.location.pathname)
  }
});

// Render inicial según la ruta actual
render(window.location.pathname); 