function Hobby(nombre){
    this.nombre = nombre;
}

function Persona (nombre){
    this.nombre = nombre;
    this.profesor = true;
    this.hobbies = []
    this.diHola = function () {
        return 'hola';
    }
    this.agregarHobbie = function (hobby) {
        this.hobbies.push(hobby);
    }
}

let hobby1 = new Hobby('tomar cerveza');
let persona = new Persona('Tato');
persona.agregarHobbie(hobby1);
console.log(persona);