//para leer el archivo
const contenido = fs.readFileSync('datos.json', 'utf8');
let marca1 = new Marca('b', 'puma');
//se guarde en la base que va a ser un archivo json
let json = JSON.stringify(marca1);
fs.writeFileSync('datos.json', json);
console.log(json);