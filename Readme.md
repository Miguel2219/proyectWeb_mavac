



Carrito.html

1. Abrir y cerrar el menú lateral (aside)
Elementos involucrados:
Botón para abrir el menú:
html
<button class="open-menu" id="open-menu">
Botón para cerrar el menú:
html
<button class="close-menu" id="close-menu">
Eventos: click en ambos botones.
Propósito:
Mostrar u ocultar el menú lateral para acceder a las opciones de navegación.
Mejorar la experiencia en dispositivos móviles con un menú adaptable.


2. Seguir comprando
Elemento involucrado:
html
<a class="boton-menu boton-volver" href="./index.html">
Evento: click en el enlace de navegación.
Propósito:
Redirigir al usuario a la página principal para explorar más productos.


3. Vaciar el carrito
Elemento involucrado:
html
<button id="carrito-acciones-vaciar" class="carrito-acciones-vaciar">Vaciar carrito</button>
Evento: click en el botón.
Propósito:
Elimina todos los productos del carrito, actualiza la vista y el almacenamiento local.
Muestra una confirmación usando SweetAlert.


4. Comprar productos del carrito
Elemento involucrado:
html
<button id="carrito-acciones-comprar" class="carrito-acciones-comprar">Comprar ahora</button>
Evento: click en el botón.
Propósito:
Finaliza la compra, vacía el carrito y muestra un mensaje de agradecimiento.


5. Carga dinámica del carrito
Elementos involucrados:
Contenedor del carrito vacío:
html
<p id="carrito-vacio" class="carrito-vacio">Tu carrito está vacío...</p>
Contenedor de productos del carrito:
html
<div id="carrito-productos" class="carrito-productos disabled">
Evento: Carga inicial de la página o actualización del carrito.
Propósito:
Mostrar los productos en el carrito o un mensaje si está vacío.
Habilitar o deshabilitar las secciones de acciones dependiendo del estado del carrito.


6. Interacción visual con el carrito
Elementos involucrados:
Contenedor de acciones:
html
<div id="carrito-acciones" class="carrito-acciones disabled">
Indicador del total:
html
<p id="total">$3000</p>
Eventos: Actualizaciones internas mediante los scripts de carrito.
Propósito:
Sincronizar visualmente el estado del carrito con las acciones del usuario.


Index.html
1. Abrir y cerrar el menú lateral (aside)
Elementos involucrados:
Botón para abrir el menú:
html
<button class="open-menu" id="open-menu">
Botón para cerrar el menú:
html
<button class="close-menu" id="close-menu">
Evento: click en ambos botones.
Propósito:
Mostrar u ocultar el menú lateral para facilitar la navegación, especialmente en dispositivos móviles.


2. Cambiar de categoría de productos
Elementos involucrados:
Botones de categorías:
html
<button id="todos" class="boton-menu boton-categoria active">Todos los productos</button>
<button id="hombre" class="boton-menu boton-categoria"><i class="bi bi-person-standing"></i> Hombre</button>
<button id="mujer" class="boton-menu boton-categoria"><i class="bi bi-person-standing-dress"></i> Mujer</button>
Evento: click en cada botón de categoría.
Propósito:
Filtrar los productos mostrados en el contenedor según la categoría seleccionada.
Actualizar el título principal (#titulo-principal) con el nombre de la categoría.


3. Abrir la página del carrito
Elemento involucrado:
html
<a class="boton-menu boton-carrito" href="./carrito.html">
  <i class="bi bi-cart-fill"></i> Carrito <span id="numerito" class="numerito">0</span>
</a>
Evento: click en el enlace del carrito.
Propósito:
Llevar al usuario a la página del carrito para ver los productos seleccionados y realizar compras.
4. Visualización dinámica de productos
Elemento involucrado:
html
<div id="contenedor-productos" class="contenedor-productos">
Evento: Generado dinámicamente mediante JavaScript para cargar productos dentro del contenedor en función de la categoría seleccionada.
Propósito:
Mostrar productos en la interfaz de acuerdo a la selección del usuario.
5. Actualizar el número del carrito (badge)
Elemento involucrado:
html
<span id="numerito" class="numerito">0</span>
Evento: Actualizado dinámicamente mediante JavaScript cuando se agrega un producto al carrito.
Propósito:
Mostrar la cantidad de productos en el carrito en tiempo real, mejorando la experiencia del usuario.


Styles.css
1. Mostrar/Ocultar el menú lateral (aside)
Clases involucradas:
css
.aside-visible {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
}
Eventos:
click en el botón "Abrir menú" (.open-menu) activa la clase .aside-visible, mostrando el menú lateral.
click en el botón "Cerrar menú" (.close-menu) elimina la clase .aside-visible, ocultando el menú.
Propósito: Facilitar la navegación en dispositivos móviles.
2. Cambiar la categoría seleccionada (resaltar botón activo)
Clases involucradas:
css
.boton-menu.active {
    background-color: var(--clr-white);
    color: var(--clr-main);
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
}
Eventos:
click en un botón de categoría cambia su estado visual al añadir la clase active.
Propósito: Indicar visualmente cuál es la categoría seleccionada.
3. Control de la cantidad de productos en el carrito
Clases involucradas:
css
.numerito {
    background-color: var(--clr-white);
    color: var(--clr-main);
    padding: .15rem .25rem;
    border-radius: .25rem;
}
Eventos:
Dinámicamente actualizada en JavaScript cuando se añade un producto al carrito.
Propósito: Mostrar la cantidad de productos en el carrito en tiempo real.

4. Cambiar estilo del botón de "Agregar al carrito" al pasar el cursor
Clases involucradas:
css
.producto-agregar:hover {
    background-color: var(--clr-main);
    color: var(--clr-white);
}
Eventos:
hover sobre el botón .producto-agregar.
Propósito: Mejorar la interacción visual al resaltar el botón cuando el usuario pasa el cursor.

5. Visualización de elementos del carrito (vacío o lleno)
Clases involucradas:
css
.disabled {
    display: none;
}
Eventos:
En JavaScript, la clase .disabled se añade o elimina dinámicamente para ocultar o mostrar:
Mensajes como "Tu carrito está vacío".
Los productos en el carrito (.carrito-productos).
Acciones del carrito (.carrito-acciones).
Propósito: Gestionar dinámicamente los elementos visibles del carrito según su estado.


6. Adaptación de la disposición para pantallas pequeñas (media queries)
Clases involucradas:
css
@media screen and (max-width: 600px) {
    .contenedor-productos {
        grid-template-columns: 1fr 1fr;
    }
    .header-mobile {
        display: flex;
    }
}

Carrito.js

1. Eliminar un producto del carrito
Evento: click en los botones con la clase .carrito-producto-eliminar.
Función asociada: eliminarDelCarrito(e).
Propósito: Elimina un producto del carrito al hacer clic en el botón correspondiente y actualiza el almacenamiento local (localStorage) y la interfaz de usuario.


2. Vaciar el carrito completamente
Evento: click en el botón con el ID #carrito-acciones-vaciar.
Función asociada: vaciarCarrito().
Propósito: Elimina todos los productos del carrito tras confirmar la acción mediante un cuadro de diálogo de SweetAlert.


3. Comprar los productos del carrito
Evento: click en el botón con el ID #carrito-acciones-comprar.
Función asociada: comprarCarrito().
Propósito: Simula la compra de los productos, vacía el carrito, actualiza el almacenamiento local y muestra un mensaje de éxito.




4. Cargar los productos al iniciar
Evento: Se ejecuta automáticamente al cargar el script.
Función asociada: cargarProductosCarrito().
Propósito: Renderiza los productos almacenados en localStorage en el carrito al cargar la página y muestra/oculta las secciones correspondientes dependiendo de si hay productos.



5. Actualizar total del carrito
Evento: Se llama internamente tras cada operación de cambio en el carrito.
Función asociada: actualizarTotal().
Propósito: Calcula y actualiza el total de los productos en el carrito en base a su precio y cantidad.


Main.js

1. Cargar productos desde un archivo JSON
Evento: then después del fetch para cargar los datos.
Función asociada:
javascript
fetch("./src/js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    });
Propósito: Obtiene la lista de productos desde un archivo externo y la muestra en la página.


2. Cambio de categoría en el menú
Evento: click en los botones de categoría (.boton-categoria).
Función asociada:
javascript
boton.addEventListener("click", (e) => { ... });
Propósito: Filtra los productos mostrados en base a la categoría seleccionada y actualiza el título principal.


3. Agregar un producto al carrito
Evento: click en los botones de agregar al carrito (.producto-agregar).
Función asociada:
javascript
boton.addEventListener("click", agregarAlCarrito);
Propósito: Añade el producto seleccionado al carrito, actualiza la cantidad en el almacenamiento local y notifica al usuario.


4. Actualizar el indicador del carrito
Evento: Interno, ejecutado después de agregar productos al carrito o de cargar productos existentes.
Función asociada:
javascript
actualizarNumerito();
Propósito: Calcula la cantidad total de productos en el carrito y la actualiza en la interfaz.


5. Manejo de productos guardados en el localStorage
Evento: Carga inicial del script.
Propósito: Verifica y carga productos del carrito desde localStorage al iniciar la página. Si los datos son inválidos, se elimina la entrada de localStorage.
Código relevante:
javascript
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
try {
    if (productosEnCarritoLS) {
        productosEnCarrito = JSON.parse(productosEnCarritoLS);
        if (!Array.isArray(productosEnCarrito)) {
            throw new Error("No es un array válido");
        }
    } else {
        productosEnCarrito = [];
    }
} catch (error) {
    console.error("Error al parsear productos en carrito:", error);
    productosEnCarrito = [];
    localStorage.removeItem("productos-en-carrito");
}
Eventos Principales:
- Cambios en el tamaño de la ventana (resize), activando las reglas dentro de las consultas de medios.
- Propósito: Ajustar el diseño para dispositivos móviles, como:
- Mostrar el encabezado móvil (.header-mobile).
- Reducir el número de columnas en la galería de productos.
