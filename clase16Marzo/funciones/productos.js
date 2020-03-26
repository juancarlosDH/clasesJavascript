const fs = require('fs');

let funcionesProductos = {
    traerProductos : function () {
        //primero es verificar si el archivo existe
        if (!fs.existsSync('productos.json')) {
            fs.writeFileSync('productos.json', '');
        }
        //leo el archivo
        let productosJson = fs.readFileSync('productos.json', 'utf8');

        //convertir a array de js ese json, validando que tenga o no datos
        let arrayProductos = productosJson.length === 0 ? [] : JSON.parse(productosJson);
        return arrayProductos;
    },

    buscarProductoPorCodigo : function (codigo) {
        let arrayProductos = this.traerProductos();
        let encontrado = arrayProductos.find(function (unProducto){
            return unProducto.codigo == codigo;
        });
        return encontrado;
    },

    guardarProducto : function(producto) {
        let arrayProductos = this.traerProductos();
        //meto el producto
        arrayProductos.push(producto);
        //convertir a json ese array con el producto nuevo
        productosJson = JSON.stringify(arrayProductos, null, " ");
        //escribo
        fs.writeFileSync('productos.json', productosJson);
    }
};

module.exports = funcionesProductos;