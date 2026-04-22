//globlaThis es una variable goblal de toda la aplicacion.
console.log(globalThis);


//CommonJS Required Module
const {suma}= require('./suma')
console.log(suma(1,2))