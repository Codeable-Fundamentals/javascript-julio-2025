// Importación explicita
// Podemos importar el objeto module.exports desde otro archivo
const counter = require("./counter"); // si no colocas la extensión .js, Node asume que es .js
 
// ...y acceder a sus propiedades
counter.count();
counter.count();
counter.count();
counter.count();
counter.count();
counter.count();