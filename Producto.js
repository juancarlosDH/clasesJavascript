function Producto(nombre, precio, codigo, marca = null){
    this.nombre = nombre;
    this.precio = precio;
    this.codigo = codigo;
    this.marca = marca;
    //this.marca = (marca != undefined) ? marca : null; //sin en marca = null en los parametros de la funcion
    /*if (marca != undefined) {  //sin en marca = null en los parametros de la funcion
        this.marca = marca;
    } else {
        this.marca = null;
    }*/
}
module.exports = Producto;
