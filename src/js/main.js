// PRODUCTOS
const productos = [
    //ABRIGOS
    {
        id:"camiseta-blanca",
        titulo: "camiseta blanca",
        imagen: "./src/images/camiseta-blanca.png",
        categoria:{
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 50.000
    },
    {
        id:"camiseta-beige",
        titulo: "camiseta beige",
        imagen: "./src/images/camiseta-beige.png",
        categoria:{
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 50.000
    },
    {
        id:"camiseta-negra",
        titulo: "camiseta negra",
        imagen: "./src/images/camiseta-negra.png",
        categoria:{
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 50.000
    },
    {
        id:"sudadera-blanca",
        titulo: "sudadera blanca",
        imagen: "./src/images/sudadera-blanca.png",
        categoria:{
            nombre: "Sudaderas",
            id: "sudaderas"
        },
        precio: 60.000
    },
    {
        id:"sudadera-gris",
        titulo: "sudadera gris",
        imagen: "./src/images/sudadera-gris.png",
        categoria:{
            nombre: "Sudaderas",
            id: "sudaderas"
        },
        precio: 60.000
    },
    {
        id:"sudadera-negra",
        titulo: "sudadera negra",
        imagen: "./src/images/sudadera-negra.png",
        categoria:{
            nombre: "Sudaderas",
            id: "sudaderas"
        },
        precio: 60.000
    },
];

const contenedorProductos = document.querySelector ("#contenedor-productos");
const botonesMenu = document.querySelectorAll(".boton-menu");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";
productosElegidos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">              
    <div class="producto-detalles">
    <h3 class="producto-titulo">${producto.titulo}</h3>
    <p class="producto-precio">${producto.precio}</p>
     <button class="producto-agregar"id="${producto.id}">Agregar al carrito</button>
                   
     </div>
    `;
    contenedorProductos.append(div);
})
actualizarBotonesAgregar();
}
cargarProductos(productos);

botonesMenu.forEach(boton => {
    boton.addEventListener("click",(e) => {
        botonesMenu.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos"){
            const productoCategoria =productos.find(producto => product.productoCategoria.id === e.currentTarget.id);
            tituloPrincipal.innerText =productoCategoria.categoria.nombre;

       const productosBoton = productos.filter(productos => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
        }else{
            tituloPrincipal.innerText ="todos los productos"
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
  botonesAgregar.forEach(boton => {
    boton.addEventListener("click",agregarAlCarrito);
  });
}
const productosEnCarrito =[];
function agregarAlCarrito (e) {
const idBoton =e.currentTarget.id;
const productoAgregado =productos.find(producto => producto.id === idBoton);
if(productosEnCarrito.some(producto => producto.id ===idBoton)){
const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
productosEnCarrito[index].cantidad++;
} else {
    productoAgregado.cantidad = 1;
productosEnCarrito.push(productoAgregado);
}
actualizarNumerito();
localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}
function actualizarNumerito() {
 let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad,0 );   
 numerito.innerText = nuevoNumerito;

}