const fs = require('fs');
const Producto = require('./Producto');
const funcionesProductos = require('./funciones/productos');

let producto = new Producto('Remera', 'R1', 1600, 5);

//antes de meter el producto en el array busco si esta alli con el mismo codigo
let encontrado = funcionesProductos.buscarProductoPorCodigo(producto.codigo);

//si no esta el producto con ese codigo
if (!encontrado) {
    funcionesProductos.guardarProducto(producto);
}
