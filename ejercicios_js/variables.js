let nombre = "Juan";
let profesor = true;
const dni = '86364845';

let hobbies = [ "nadar en mar 'abierto' ", 'correr' ];

let persona = {
    nombre : 'Tato',
    dni : 234234234,
    profesor : true,
    hobbies : [],
    diHola : function () {
        return 'hola mi nombre es ' + this.nombre;
    }
};

// aqui le agrego algo a hobbies
persona.hobbies.push('tomar cerveza');
persona.hobbies.push('pintar');
persona.hobbies.push('guitarra');

persona.hobbies = ['caminar','correr'];
console.log(persona.hobbies);
//le voy a cambiar el nombre
persona.nombre = 'Gaston';

//console.log(persona.diHola());