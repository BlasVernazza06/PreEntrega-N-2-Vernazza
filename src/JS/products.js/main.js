let carrito = JSON.parse(localStorage.getItem("miCarrito")) || [];

const gridContainer = document.querySelector(".grid-Products");

function cargarProductos() {
    gridContainer.innerHTML = ""; 
    productosCompra.forEach((producto) => {
        console.log(producto?.precio < 500.000  || "No existe un vuelo a ese precio")
        const desestructuracion = ( {precio, nombre}) => {
            if (precio > 500.000) {
                console.log(`El vuelo con un precio mayor a a 500.000 es ${nombre} y cuesta $${precio}`)
            }
        }
        desestructuracion(producto)
        const cardStructure = `
            <div class="Products ${producto.numProducto} animate__animated animate__zoomIn" >
                <img class="Product-Image" src="${producto.imagen}" alt="FotoMaldivas">

                <div class="Product-text">
                    <div class="title-card">
                        <p>${producto.nombre}</p>
                    </div>
                    <div class="subtitle-card">
                        <p>Desde <strong>${producto.desde}</strong> Hasta <strong>${producto.hasta}</strong></p>
                        <img src="src/images/products/Avion-Cards.svg" alt="AvionCard">
                        <span>Vuelo desde BUE <img src="src/images/products/Flechas-Cards.svg" alt="FlechasDeLasCards"> MAL</span>
                    </div>
                </div>
                <div class="footer-product">
                    <div class="footer-text">
                        <p class="first">Precio individual por persona</p>
                        <p class="second"> $ <span>${producto.precio}</span></p>
                        <p class="third"> Incluye impuestos, tasas y cargos</p>
                    </div>
                    
                    <div class="button-section"> 
                        <button onclick="agregarProductos(${producto.id})" class="Buy-Button">Comprar</button>
                    </div>
                </div>
            </div>`;

        gridContainer.innerHTML += cardStructure;
    });
};

cargarProductos();

function agregarProductos(idProducto) {
    const productoElegido = productosCompra.find((producto) => producto.id == idProducto);
    carrito.push(productoElegido);
    localStorage.setItem("miCarrito", JSON.stringify(carrito));
    
}
