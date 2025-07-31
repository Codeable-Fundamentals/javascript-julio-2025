// Cada archivo es un módulo, no necesitamos IIFEs
 
var counter = 0;
 
function count() {
  console.log(counter);
  counter++;
}
 
// Exportación explicita
// Todo lo que agregamos al objeto module.exports estará disponible para otros módulos
module.exports = {
  count: count,
};
