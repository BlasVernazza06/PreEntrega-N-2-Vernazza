class Aviones{
    constructor(nombre, modelo, marca, año, tamanio, kilometros){
        this.nombre = nombre;
        this.modelo = modelo;
        this.marca = marca;
        this.año = año;
        this.tamanio = tamanio;
        this.kilometros = kilometros;
    }

    esviejo() {
        return this.kilometros > 200000;
    }
}

class Viajes{
    constructor(fecha){
        this.ubicacion = String(prompt("A que pais deseas viajar?"));
        this.distancia = Number(prompt("De cuanto es la distancia del viaje?"));
        this.fecha = fecha;
        this.avion = String(prompt("Que tipo de avion deseas viajar?"));
        this.precio = Number(prompt("Cual es el precio del boleto?"));
    }
    
    sumarIVA() {
        return (this.precio * 0.21) + this.precio;
    }

    restarDescuento() {
        if (this.distancia > 1500) {
            return this.precio - (this.precio * 0.2);
        }
    }

}


let aviones = []

let avion1 = new Aviones("avion1" , "Boeing", "Samsung", 2009, "10km", 170000);
let avion2 = new Aviones("avion2" , "Avioneta", "Apple", 2012, "2km", 120000);
let avion3 = new Aviones("avion3" , "Airbus", "Sony", 2015, "12km", 200000);
let avion4 = new Aviones("avion4" , "Cessna", "LG", 2007, "3km", 90000);

aviones.push(avion1, avion2, avion3, avion4)

function VerificarEstadoAviones() {
    for (let i = aviones.length - 1; i >= 0; i--) {
        if (aviones[i].esviejo()) {
            aviones.splice(i, 1);
        }
    }
}

let Europa = ["España", "Alemania", "Francia", "Italia", "Paises Bajos", "Suiza", "Inglaterra"]
let Asia = ["China", "Japon", "Corea", "India", "Tailand"]
let America = ["Estados Unidos", "Canada", "Mexico", "Argentina", "Brasil"]
let Africa = ["Egipto", "Sudan", "Nigeria", "Etiopia"]

let viajes = []

/* let viaje1 = new Viajes(new Date("December 17, 2024"))
let viaje2 = new Viajes(new Date(2025, 1, 15, 13)) */



function guardarDatosLocalStorage(){
    for (let i = 0; i < viajes.length; i++) {
        const avionSeleccionado = true
        const randomNumber = Math.random() * 10000
        if(avionSeleccionado){
            console.log(avionSeleccionado)
            if (Europa.includes(viajes[i].ubicacion)) {
                const EuropaTaxes = (viajes[i].precio * 0.15) + viajes[i].precio;
                const idViaje = Math.ceil(randomNumber);
                const fecha = viajes[i].fecha
                const europaText = `<article class="cards">
                                        <p>ID: ${idViaje}</p>
                                        <div class="image_container">
                                            <img src="src/images/Maldivas-Foto1.jpg" alt="">
                                        </div>
                                        <div class="text_container">
                                            <strong><p>Viaje hacia ${viajes[i].ubicacion}</p></strong>
                                            <p>Fecha del viaje ${fecha.toLocaleString()}</p>
                                        </div>
                                        <div class="separator">
                                        </div>
                                        <div class="priceSec">
                                            <p class="price">Precio: $${EuropaTaxes}</p>
                                        </div>
                                    </article>`;
            
            };
            if (Africa.includes(viajes[i].ubicacion)) {
                    const AfricaDiscount = viajes[i].precio - (viajes[i].precio * 0.30);
                    const africaSection = document.getElementById("Africa");
                    const idViaje = Math.ceil(randomNumber);
                    const africaText = `<p>Su viaje va a realizarse hacia <strong>${viajes[i].ubicacion} el dia y hora ${viajes[i].fecha}</strong></p>
                                         <p>El precio luego de los impuestos es <strong>${AfricaDiscount}</strong></p>`;
                    africaSection.innerHTML += idViaje; 
                    africaSection.innerHTML += africaText; 
            };
            if (America.includes(viajes[i].ubicacion)) {
                    const AmericaTaxes = viajes[i].sumarIVA();
                    const americaSection = document.getElementById("America");
                    const idViaje = Math.ceil(randomNumber);
                    const americaText = `<p>Su viaje va a realizarse hacia <strong>${viajes[i].ubicacion} el dia y hora ${viajes[i].fecha}</strong></p>
                                         <p>El precio luego de los impuestos es <strong>${AmericaTaxes}</strong></p>`;
                    americaSection.innerHTML += idViaje;
                    americaSection.innerHTML += americaText;
            };
            if (Asia.includes(viajes[i].ubicacion)) {
                    const AsiaTaxes = viajes[i].sumarIVA();
                    const asiaSection = document.getElementById("Asia");
                    const idViaje = Math.ceil(randomNumber);
                    const asiaText = `<p>Su viaje va a realizarse hacia <strong>${viajes[i].ubicacion} el dia y hora ${viajes[i].fecha}</strong></p>
                                         <p>El precio luego de los impuestos es <strong>${AsiaTaxes}</strong></p>`;
                    asiaSection.innerHTML += idViaje; 
                    asiaSection.innerHTML += asiaText; 
            };
            
        } else {
            console.log("No se puede realizar el viaje")
        };
    };
};

function mostrarDatosLocalStorage(){
    const purchasesSection = document.getElementById("purchasesSec");

    for(let i = 0; i < localStorage.length; i++){
        const valor = localStorage.getItem(clave);

        purchasesSection.innerHTML += valor;



    }
}

function calcularPrecio() {
    let total = 0;
    const precios = document.querySelectorAll('.price p');

    precios.forEach(precio => {
        const texto = precio.textContent || precio.innerText;
        const valor = parseFloat(texto.replace(/[^0-9.-]+/g, ''));
        total += valor;
    });

    document.getElementById('total-price').textContent = total.toFixed(2);
}

function togglePurchaseDetails() {
    // Esta función debería ser llamada solo para mostrar el elemento
    document.getElementById("togglePurchase").style.display = "flex";
}

function destogglePurchaseDetails() {
    // Esta función debería ser llamada solo para ocultar el elemento
    document.getElementById("togglePurchase").style.display = "none";
}

// Configura el evento para el botón "Finalizar Compra"
document.querySelector(".finish").addEventListener("click", togglePurchaseDetails);

// Configura el evento para el botón de cerrar dentro del panel
document.querySelector("#togglePurchase button").addEventListener("click", destogglePurchaseDetails);