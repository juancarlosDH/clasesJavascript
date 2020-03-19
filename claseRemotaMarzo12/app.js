const Usuario = require('./Usuario');
const fs = require('fs');

//ahora si instacio al usuario
let usuario = new Usuario('Nacho', 'nacho@digitalhouse.com', 'nacho');

//obtengo los usuarios de mi json
const listaUsuariosJson = fs.readFileSync('usuarios.json', 'utf8');

//por defecto voy a tener el array de usuario vacio
let usuariosArray = [];

let encontrado = null;

//si el archivo está vacio no lo convierto y genero un array de usuarios vacio
if (listaUsuariosJson.length != 0) {
    //convierto el json en JS.
    usuariosArray = JSON.parse(listaUsuariosJson);

    //debo verificar si el email ya está registrado.
    encontrado = usuariosArray.find(function (usuarioEnArray) {
        return usuarioEnArray.email == usuario.email;
    });
}


if (!encontrado) {
    //aqui si meto al nuevo usuario 
    usuariosArray.push(usuario);

    //convierto o transformo a json el array de usuarios
    const usuariosJsonAGuardar = JSON.stringify(usuariosArray, null, ' ');

    //escribo el archivo completo
    fs.writeFileSync('usuarios.json', usuariosJsonAGuardar);
    console.log('te has registrado en nuestra aplicacion');
} else{ 

    console.log('el email ya está registrado.');
}
