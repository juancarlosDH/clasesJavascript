const fs = require('fs');

let codigoABuscar = 'puma';

//leo el archivo
let productosJson = fs.readFileSync('productos.json', 'utf8');

//convertir a array de js ese json
let arrayProductos = JSON.parse(productosJson);

//Buscar en el json al producto por codigo.
let productoAEditar = arrayProductos.find( function (unProducto){
    return unProducto.codigo == codigoABuscar;
});

//si existe el codigo le modifico el precio, nombre y stock
if (productoAEditar) {
    //console.log('antes de cambiarlo', productoAEditar);

    productoAEditar.nombre = 'Short';
    productoAEditar.stock = 5;
    productoAEditar.precio = 758;

    //console.log('despues de cambiarlo', productoAEditar);

    //aqui iria el codigo de modificar en el array y guardar en en json
    let arrayNuevo = arrayProductos.filter( unProducto => unProducto.codigo != codigoABuscar );

    //meto en el array el producto editado
    arrayNuevo.push(productoAEditar);

    //y debo escribir en el archivo ese producto actualizado
    fs.writeFileSync('productos.json', JSON.stringify(arrayNuevo));
    
} else {
    //si no está le muestro algo en la pantalla
    console.log('no se encuentra el producto')
}



