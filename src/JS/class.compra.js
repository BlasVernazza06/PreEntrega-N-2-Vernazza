const botonFinalizarCompra = document.querySelector(".pay-button"); 
const purchasesSection = document.getElementById("purchasesSec");
const precios = document.getElementById('subtotal-price');
const productoCarrito = JSON.parse(localStorage.getItem('miCarrito')) || [];

if (productoCarrito.length > 0) {
    renderizarProductos();
} else {
    console.log("El carrito está vacío o no se encontraron productos en localStorage.");
}
function renderizarProductos() {
    purchasesSection.innerHTML = ""; 
    productoCarrito.forEach((prod) => {
        const productCart = `
            <article class="cards">
                <p>ID: ${prod.id}</p>
                <div class="image_container">
                    <img src="${prod.imagen}" alt="">
                </div>
                <div class="text_container">
                    <strong><p>${prod.nombre}</p></strong>
                    <p>Sale el día ${prod.desde}. Regresa el ${prod.hasta}</p>
                </div>
                <div class="deleteProduct">
                    <button onclick="eliminarProducto(${prod.id})">Eliminar</button>
                </div>
                <div class="separator"></div>
                <div class="priceSec">
                    <p class="price">Precio: $${prod.precio}</p>
                </div>
            </article>`;

        purchasesSection.innerHTML += productCart;
    });
}

function eliminarProducto(id) {
    const productoEliminado = productoCarrito.find((producto) => producto.id == id);
    if (productoEliminado) {
        const indiceProducto = productoCarrito.indexOf(productoEliminado); 
        productoCarrito.splice(indiceProducto, 1);
        localStorage.setItem("miCarrito", JSON.stringify(productoCarrito)); 
        purchasesSection.innerHTML = ""; 
        renderizarProductos(); 
        Swal.fire({
            icon: "error",
            title: "Eliminado"
        });
    }
}

function total(){
    let total = 0
    productoCarrito.forEach((prod) => {
        total += prod.precio
    })
    const totalFormateado = total.toLocaleString('es-ES');
    precios.textContent = `$${totalFormateado}`;
};

total();

const activarBotonFinalizarCompra = () => {
    botonFinalizarCompra.addEventListener("click", () => {
        if(productoCarrito.length > 0 ) {
            purchasesSection.innerHTML += "";
            precios.innerHTML += "";
            destogglePurchaseDetails()
            mostrarMensaje("!Su compra ha sido realizada con exito¡")
            localStorage.clear();
            console.log(localStorage)
        } else {
            mostrarMensaje("Su carrito se encuentra vacio. Agregue producto para realizar una compra")
        }
    })
}

activarBotonFinalizarCompra();

const mostrarMensaje = (msg) => {
    purchasesSection.textContent = msg;
};

function togglePurchaseDetails() {
    // Esta función debería ser llamada solo para mostrar el elemento
    document.getElementById("togglePurchase").style.display = "flex";
}

function destogglePurchaseDetails() {
    // Esta función debería ser llamada solo para ocultar el elemento
    document.getElementById("togglePurchase").style.display = "none";
}

document.querySelector(".finish").addEventListener("click", togglePurchaseDetails);

document.querySelector("#togglePurchase button").addEventListener("click", destogglePurchaseDetails);