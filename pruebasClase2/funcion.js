const requerida = require('./requerida');

function saludar () {
    return "Hola " + requerida();
}

module.exports = saludar;