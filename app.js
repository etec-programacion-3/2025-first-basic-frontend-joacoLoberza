const baseUrl = 'http://localhost:3000/libros';
const tabla = document.querySelector('#book-table-container table tbody');
const mensageSalida = document.getElementById('mensage');
const buscar = document.querySelector(`#search`);
const filtro = document.getElementById('filter-mode');
const ordenFiltro = document.getElementById('order-checkbox');
const botonAdd = document.querySelector(`#form-libro button[type="submit"]`);
const campoNombre = document.getElementById('name');
const campoAutor = document.getElementById('author');
const campoCategoria = document.getElementById('category');
const campoIsbn = document.getElementById('isbn');
const addForm = document.getElementById('form-filtro')
let res;
let orden = 'asc';

window.mensage = function(mensage) {
    mensageSalida.innerHTML = `<p id="message">${mensage}</p>`;
    setTimeout(() => mensageSalida.innerHTML = '', 1000)
}

window.cargarLibros = function(booksList) {
    console.log('Cargando libros...')
    mensage('Cargando libros...')
    tabla.innerHTML = '';
    try {
        if (!Array.isArray(booksList)) {
            booksList = [booksList]
        }
        booksList.forEach(libro => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="book-data">${libro.id}</td>
                <td class="book-data">${libro.title}</td>
                <td class="book-data">${libro.author}</td>
                <td class="book-data">${libro.category}</td>
                <td class="book-data">${libro.isbn}</td>
                <td class="book-data">${libro.state}</td>
                <td><button class="edit-button">Editar</button></td>
                <td><button class="delete-book">X</button></td>
            `
            const deleteBtn = row.querySelector('.delete-book');
            const editBtn = row .querySelector('.edit-button');

            deleteBtn.addEventListener('click', async (e) => {
                e.preventDefault();
                const id = e.target.parentElement.parentElement.firstElementChild.textContent;
                try {
                    res = await fetch(`${baseUrl}/${id}`, {
                        method:'DELETE',
                    })
                    getLibros(orden)
                } catch(err) {
                    console.error("No se ha podido eliminar el libro.")
                    mensage('ERROR: No se pudo borrar el libro de la biblioteca.')
                }
            })

            editBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const tr = e.target.parentElement.parentElement;
                tr.classList.add('edition-tr')
                const id = tr.firstElementChild.textContent;
                const elements = [tr.children[1], tr.children[2], tr.children[3], tr.children[4]];
                elements.forEach(element => {
                    const input = document.createElement('input');
                    input.value = element.textContent;
                    input.placeholder = 'Valor...'
                    input.classList.add('edit-input')
                    element.innerHTML = '';
                    element.appendChild(input)
                })
                for (let x = 0; x < 2; x++) {
                    tr.lastElementChild.remove()
                }
                const okBtn = document.createElement('button');
                okBtn.textContent = 'OK';
                okBtn.classList.add('edition-button')
                okBtn.addEventListener('click', async (e) => {
                    e.preventDefault();
                    const title = elements[0].firstElementChild.value;
                    const author = elements[1].firstElementChild.value;
                    const isbn = elements[3].firstElementChild.value;
                    const category = elements[2].firstElementChild.value
                    const body = {
                        "title":title,
                        "author":author,
                        "isbn": isbn,
                        "category":category
                    }
                    res = await fetch(`${baseUrl}/${id}`, {
                        method:'PUT',
                        headers: {'Content-Type':'application/json'},
                        body: JSON.stringify(body)
                    })
                    getLibros(orden)
                })
                const td = document.createElement('td')
                td.appendChild(okBtn)
                tr.appendChild(td)
            })

            tabla.appendChild(row)
        })
        
    } catch(err) {
        mensage('¡Error al renderizar los libros!')
        console.error('No se pueden rederizar los libros.')
    }
}

window.getLibros = async function(orden) {
    res = await fetch(`${baseUrl}?order=${orden}`);
    const libros = await res.json();
    cargarLibros(libros)
}
getLibros('asc')

window.getLibrosId = async function(id) {
    res = await fetch(`${baseUrl}/${id}`)
    const libros = await res.json();
    cargarLibros(libros)
}

window.getLibrosParam = async function(orden,criterio, param) {
    res = await fetch(`${baseUrl}/buscar/${param}?order=${orden}&criteria=${criterio}`)
    const libros = await res.json();
    cargarLibros(libros)
}

botonAdd.onclick = async () => {
    const body = {
        "title":campoNombre.value,
        "author":campoAutor.value,
        "isbn":campoIsbn.value,
        "category":campoCategoria.value
    }
    try {
        res = await fetch(`${baseUrl}`, {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(body)
        })
        getLibros()
    } catch(err) {
        console.error("Algo salió mal al agregar el libro.")
        mensage('ERROR: No se ha podido añadir el libro a la biblioteca.')
    }
}

ordenFiltro.addEventListener('change', (e) => {
    e.preventDefault();
    if (!e.target.checked) {
        ordenFiltro.parentElement.lastElementChild.innerHTML = 'ASC';
        orden = 'asc';
    } else if (e.target.checked) {
        ordenFiltro.parentElement.lastElementChild.innerHTML = 'DESC';
        orden = 'dsc';
    }
})

filtro.addEventListener('change', (e) => {
    e.preventDefault();
    if (filtro.value === 'all') {
        criterioFiltro.remove()
    } else if (!filtro.parentElement.querySelector('#filter-criteria')) {
        const criteriaInput = document.createElement('input');
        criteriaInput.type = 'text';
        criteriaInput.id = 'filter-criteria';
        criteriaInput.placeholder = 'Criterio';
        criteriaInput.required = true;
        addForm.firstElementChild.insertAdjacentElement('beforeend', criteriaInput);
        globalThis.criterioFiltro = document.getElementById('filter-criteria');
    }
    if (filtro.value === 'id') {
        criterioFiltro.type = 'number';
    } else {
        criterioFiltro.type = 'text';
    }
})

buscar.addEventListener('click', (e) => {
    e.preventDefault();
    const modo = filtro.value;
    const criterio = criterioFiltro.value;
    if (modo === 'all') {
        getLibros(orden)
    } else if (modo === 'id') {
        getLibrosId(parseInt(criterio))
    } else {
        getLibrosParam(orden, criterio, modo)
    }
})