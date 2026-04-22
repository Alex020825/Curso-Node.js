const os = require('node:os')

console.log("Informacion de mi computadora. ")
console.log("-------------------------------")

console.log("tu sistema operativo es: "+ os.platform())
console.log("Version del Sistema: "+ os.release())
console.log("Arquitectura de tu computador: "+ os.arch())
console.log("numero de CPU's: "+ os.cpus())
console.log(os.userInfo())
