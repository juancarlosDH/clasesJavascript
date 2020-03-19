const fs = require('fs');

fs.writeFileSync('archivo.txt', 'holaaaa');

const contenido = fs.readFileSync('archivo.txt', 'utf8');

console.log(contenido);

let objeto = { nombre: 'jc', 'email' : 'jc@jc.com'};
fs.writeFileSync('archivo.json', JSON.stringify(objeto));
