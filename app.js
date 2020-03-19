const Marca = require('./Marca');
const Producto = require('./Producto');
const Carrito = require('./Carrito');
const fs = require('fs');

let marca1 = new Marca('b', 'puma');

let p1 = new Producto('pan', 10, 'a', marca1);
let p2 = new Producto('fibron', 50, 'b');

let p3 = new Producto('celular', 50000, 'c', marca1);
let p4 = new Producto('Pollo', 300, 'd');

let cart = new Carrito();

cart.agregarProducto(p1);
cart.agregarProducto(p2);
//cart.quitarProducto(p1);

console.log(cart.aplicacionDescuento(10));
//console.log(cart.aplicarDescuento());
//console.log(cart.dameTotal());

