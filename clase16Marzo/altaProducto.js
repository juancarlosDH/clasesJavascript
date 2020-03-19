const fs = require('fs');
const Producto = require('./Producto');

let producto = new Producto('Zapatillas', 'A1', 1000, 10);

//leo el archivo
let productosJson = fs.readFileSync('productos.json', 'utf8');

//convertir a array de js ese json
let arrayProductos = JSON.parse(productosJson);

//antes de meter el producto en el array busco si esta alli con el mismo codigo
let encontrado = arrayProductos.find(function (unProducto){
    return unProducto.codigo == producto.codigo;
}); 

//si no esta el producto con ese codigo
if (!encontrado) {
    //meto el producto
    arrayProductos.push(producto);

    //convertir a json ese array con el producto nuevo
    productosJson = JSON.stringify(arrayProductos);

    //escribo
    fs.writeFileSync('productos.json', productosJson);
}


