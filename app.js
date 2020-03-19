const Marca = require('./Marca');
const Producto = require('./Producto');
const Carrito = require('./Carrito');
const fs = require('fs');

let marca1 = new Marca('b', 'puma');
let marca2 = new Marca('e','Trumpeter');
let marca3 = new Marca('f', 'Sansunnggg');

let p1 = new Producto('pan', 10, 'a', marca1);
let p2 = new Producto('fibron', 50, 'b', marca3);

let p3 = new Producto('celular', 50000, 'c', marca1);
let p4 = new Producto('Pollo', 300, 'd');
let p5 = new Producto('Vino',200,marca2);

let cart = new Carrito();

cart.agregarProducto(p1);
cart.agregarProducto(p2);
cart.agregarProducto(p5);
//cart.quitarProducto(p1);

console.log(cart.aplicacionDescuento(10));
//console.log(cart.aplicarDescuento());
//console.log(cart.dameTotal());

