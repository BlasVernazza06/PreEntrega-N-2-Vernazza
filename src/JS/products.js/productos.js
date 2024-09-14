const productosCompra = [
    {id: 1 , numProducto: "Product-1", imagen: "src/images/products/Maldivas-Foto1.jpg", nombre: "Paquete a las Maldivas", desde: "Mié 26 Jun", hasta: "Lun 01 Jul", precio: 880.912},
    {id: 2 , numPorducto: "Product-2", imagen: "src/images/products/LaCumbrecita-Foto2.jpg", nombre: "Paquete a Córdoba", desde: "Mié 25 Sep", hasta: "Mar 01 Oct", precio: 181.536},
    {id: 3 , numPorducto: "Product-3", imagen: "src/images/products/Salta.jpeg", nombre: "Paquete a Salta", desde: "Mié 22 Ene", hasta: "Lun 27 Ene", precio: 246.865},
    {id: 4 , numPorducto: "Product-4", imagen: "src/images/products/LosAngeles-Foto3.jpg", nombre: "Paquete a los Angeles", desde: "Dom 23 Jun", hasta: "Vie 28 Jun", precio: 538.321}
]

// 👇 console.log de Alias

const{
    id: id,
    numProducto: numProducto,
    imagen: imagen,
    nombre: nombre,
    desde: desde,
    hasta: hasta,
    precio: precio
} = productosCompra[0]

console.log("Los console de 👇 se realizan con 'Alias'");
console.log(id)
console.log(numProducto);
console.log(imagen);
console.log(nombre);
console.log(desde);
console.log(hasta);
console.log(precio)

// 👇 console.log para hacer espacio y que no queden pegadas.

console.log("");

// 👇 console.log del spread

console.log("Los de 👇 son del Spread")
console.log(...productosCompra)
console.log("");


let preciosVuelos = []

function spreadArray(){
    productosCompra.forEach((producto) => {
        preciosVuelos.push(producto.precio)
    });

    console.log("👇 este console, realiza un spread de numeros");
    console.log(Math.min(...preciosVuelos))
    console.log("");
};

spreadArray();

// 👇 funcion que realiza una suma con un spread de numero (Rest parameters)


function sumarSpread(numeros){
    return numeros.reduce((acc, n) => acc + n, )
};

console.log("👇 este console.log, realiza una suma, a traves de parametros, de un spread de numeros")
console.log(sumarSpread(preciosVuelos))
console.log("");