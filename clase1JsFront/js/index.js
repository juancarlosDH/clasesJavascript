let ache1 = document.querySelector('h1');

if (confirm('Quiere el tema Oscuro?')) {
    document.querySelector('#tema').href = 'css/oscuro.css';
}

let nombre = prompt('Dame tu nombre');
//ache1.innerText = 'Bievenido ' + nombre;
ache1.innerText = `Bienvenido ${nombre}`;

let descripcion = prompt('Dame una descripcion');
let parrafo = document.getElementById('parrafo');
parrafo.innerHTML = `<strong>${descripcion}</strong>`;


