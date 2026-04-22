const http = require('node:http');
const {encontrarPuerto} =require('./10.free-port')
const server = http.createServer((req,res)=>{
    console.log("pedido recibido")
    res.end("Hola Mundo")
})

encontrarPuerto((3000).then(puerto =>{
    server.listen(puerto, ()=>{
        console.log(`server en escucha por el puerto http://localhost:${puerto}`)
    })
}))

//server.listen(3000, ()=>{
//   console.log("el servidor escucha por el puerto 3000")
//})

