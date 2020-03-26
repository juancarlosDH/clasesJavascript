const fs = require('fs');

let codigoABuscar = 'puma';

//leo el archivo
let productosJson = fs.readFileSync('productos.json', 'utf8');

//convertir a array de js ese json
let arrayProductos = JSON.parse(productosJson);

//Buscar en el json al producto por codigo.
let productoAEliminar = arrayProductos.find( function (unProducto){
    return unProducto.codigo == codigoABuscar;
});

//si existe el codigo tengo que eliminarlo
if (productoAEliminar) {
    //generar un array sin ese producto
    let arrayNuevo = arrayProductos.filter( unProducto => unProducto.codigo != codigoABuscar );

    //y debo escribir en el archivo ese producto actualizado
    fs.writeFileSync('productos.json', JSON.stringify(arrayNuevo));
    
} else {
    //si no está le muestro algo en la pantalla
    console.log('no se encuentra el producto')
}



