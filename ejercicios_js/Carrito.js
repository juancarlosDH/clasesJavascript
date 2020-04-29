function Carrito(){
    this.productos = [];
    this.agregarProducto = function (producto){
        this.productos.push(producto);
    }

    this.quitarProducto = function(producto) {
        this.productos = this.productos.filter(function (productoActual) {
            return productoActual.codigo != producto.codigo
        });
    }

    this.dameTotal = function (){
        return this.productos.reduce(function (cosa, producto){
            return cosa + producto.precio;
        }, 0);
    }

    this.aplicacionDescuento = function(descuento){
        let descuentos = this.productos.map(function(producto){
            return producto.precio - (descuento * producto.precio / 100);
        });

        return descuentos.reduce( (acum, precio) => acum + precio );
    } 

    this.aplicarDescuento = function(){
        return this.productos.map( function(producto){ 
            return producto.precio - (producto.precio * 0.1); 
        }); 
    }
}



module.exports = Carrito;