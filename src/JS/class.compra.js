const botonFinalizarCompra = document.querySelector(".pay-button"); 
const purchasesSection = document.getElementById("purchasesSec");
const precios = document.getElementById('subtotal-price');
const productoCarrito = JSON.parse(localStorage.getItem('miCarrito')) || [];

productoCarrito.length > 0 ? renderizarProductos() : console.log("El carrito está vacío o no se encontraron productos en localStorage.")


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

function subtotal(){
    let total = 0
    productoCarrito.forEach((prod) => {
        total += prod.precio
    })
    const totalFormateado = total.toLocaleString('es-ES');
    precios.textContent = `$${totalFormateado}`;
};

subtotal();

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
    document.getElementById("togglePurchase").style.display = "flex";
}

function destogglePurchaseDetails() {
    document.getElementById("togglePurchase").style.display = "none";
}

document.querySelector(".finish").addEventListener("click", togglePurchaseDetails);

document.querySelector("#togglePurchase button").addEventListener("click", destogglePurchaseDetails);

function intereses(valor) {
    // Obtener el elemento con el id "intereses"
    const cardIntereses = document.getElementById("intereses");

    // Limpiar el contenido actual
    cardIntereses.innerHTML = "";

    // Añadir el valor recibido al contenido
    cardIntereses.innerHTML += valor;
}

const interElements = document.querySelectorAll(".inter");

interElements.forEach(element => {
    element.addEventListener("click", function() {
        const valor = element.textContent;
        intereses(valor);
    });
});

function total(){
    let total = 0
    const finalPrice = document.getElementById("final-price")
    const intereses = document.querySelectorAll("intereses")
    console.log(intereses)
    const subtotal = Number(document.querySelectorAll("subtotal-price").textContent)
    total = (subtotal / 100) * intereses
    finalPrice.innerHTML += total
};

total()
