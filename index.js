class Aviones{
    constructor(modelo, marca, año, tamanio, kilometros){
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
    constructor(){
        this.ubicacion = String(prompt("A que pais deseas viajar?"));
        this.distancia = Number(prompt("De cuanto es la distancia del viaje?"));
        this.fecha = String(prompt("Cual es la fecha del viaje?"));
        this.hora = String(prompt("A que hora sale el viaje?"));
        this.avion = String(prompt("Que tipo de avion deseas viajar?"));
        this.precio = Number(prompt("Cual es el precio del boleto?"));
    }
    
    sumarIVA() {
        this.precio = (this.precio * 0.21) + this.precio;
    }

    restarDescuento() {
        if (this.distancia > 1500) {
            this.precio = this.precio - (this.precio * 0.2);
        }
    }

}

let avion1 = new Aviones("Boeing", "Samsung", 2009, "10km", 170000);
let avion2 = new Aviones("Avioneta", "Apple", 2012, "2km", 120000);
let avion3 = new Aviones("Hercules", "LG", 2015, "5km", 250000 );

let aviones = [avion1, avion2, avion3]

function verificarEstado() {
    for (let i = 0; i < aviones.length; i++) {
        while (aviones[i].esviejo()) {
            console.log("El avión en el que desea viajar es demasiado viejo y en el viaje pueden haber problemas.");
            aviones[i].kilometros += 10000;
        }

        if (!aviones[i].esviejo()) {
            console.log("El avión en el que desea viajar es nuevo y seguro para el viaje.");
        }
    }
}

let Europa = ["España", "Alemania", "Francia", "Italia", "Paises Bajos", "Suiza", "Inglaterra"]
let Asia = ["China", "Japon", "Corea", "India", "Tailand"]
let America = ["Estados Unidos", "Canada", "Mexico", "Argentina", "Brasil"]
let Africa = ["Egipto", "Sudan", "Nigeria", "Etiopia"]


let viaje1 = new Viajes()
let viaje2 = new Viajes()



let viajes = [viaje1, viaje2]

function Viaje(){
    for(let i = 0; i < viajes.length; i++){
        let avionApto = true;
        for (let j = 0; j < aviones.length; j++) {
            if (aviones[j].esviejo()) {
                avionApto = false;
            } else {
                console.log("El viaje no se puede realizar, porque el avión no es seguro.");
            }
            
        }

        if (avionApto) {
            if (Europa.includes(viajes[i].ubicacion)) {
                console.log(`El viaje es a Europa, más concretamente a ${viajes[i].ubicacion} y recibe un impuesto del 15%.`);
                viajes[i].precio = (viajes[i].precio * 0.15) + viajes[i].precio;
                console.log(`El precio actualizado del viaje sería ${viajes[i].precio}`);
            }
            if (Africa.includes(viajes[i].ubicacion)) {
                console.log(`El viaje es a África, más concretamente a ${viajes[i].ubicacion}`);
                console.log("Al ser un continente poco visitado, recibes un descuento del 30%");
                viajes[i].precio = viajes[i].precio - (viajes[i].precio * 0.30);
                console.log(`El precio actualizado del viaje sería ${viajes[i].precio}`);
            }
            if (America.includes(viajes[i].ubicacion)) {
                console.log(`El viaje es a América, más concretamente a ${viajes[i].ubicacion}`);
                console.log("Este continente debe pagar IVA");
                viajes[i].sumarIVA();
                console.log(`El precio actualizado del viaje sería ${viajes[i].precio}`);
            }
            if (Asia.includes(viajes[i].ubicacion)) {
                console.log(`El viaje es a Asia, más concretamente a ${viajes[i].ubicacion}`);
                console.log("Este continente debe pagar IVA");
                viajes[i].sumarIVA();
                console.log(`El precio actualizado del viaje sería ${viajes[i].precio}`);
            }
        } else {
            console.log("El viaje no se puede realizar, porque el avión no es seguro.");
        }
    }
}

verificarEstado();
Viaje();