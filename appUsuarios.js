const Usuario = require('./Usuario');
const fs = require('fs');

let usu1 = new Usuario('joseluis', 'joseluis@gmail.com');

//leo el archivo
const contenido = fs.readFileSync("usuarios.json", "utf8");

if (contenido.length == 0) {
    var usuarios = [];
    usuarios.push(usu1);
} else {
    //convertir a js
    var usuarios = JSON.parse(contenido);
    usuarios.push(usu1);
}

//convertir a json
let jsonUsus = JSON.stringify(usuarios);
//escribo en el archivo
fs.writeFileSync("usuarios.json", jsonUsus);