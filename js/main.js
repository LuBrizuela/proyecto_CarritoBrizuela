// variables

const carrito = document.querySelector('#carrito'),
    listaCursos = document.querySelector('#lista-cursos'),
    contenedorCarrito = document.querySelector('#lista-carrito tbody'),
    vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    //agrega un curso cuando presiona "agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // elimina cursos delc arrito

    carrito.addEventListener('click', eliminarCurso);

    // vaciar carrito

    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []
        
        contenedorCarrito.innerHTML = ''
    })
}

// funciones

function agregarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado);
    }

}
// elimina cursos

function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');
        
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId)

        carritoHTML();
    }
}


//lee el contenido y lo extrae

function leerDatosCurso(curso) {
    //console.log(curso);

    // crea un objeto con el contenido del curso

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h5').textContent,
        precio: curso.querySelector('.precio').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1


    }

    // revisa si un elemento ya existe en el carrito

    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id)
    if (existe) {
        //

        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        })
    } else {
            //agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    }



    console.log(articulosCarrito);

    carritoHTML();
}

//muestra el carrito en el html

function carritoHTML() {
    // limpia el html

    contenedorCarrito.innerHTML = ''

    // recorre el carrito y genera htmkl
    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src= "${curso.imagen}" width="100">
        </td>
        <td>
            ${curso.titulo}
        </td>
        <td>
            ${curso.precio}
        </td>
        <td>
            ${curso.cantidad}
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
        </td>

    `;


        // agrega el html 

        contenedorCarrito.appendChild(row);
    })
}

