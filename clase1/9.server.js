const http = require('node:http');

const server = http.createServer((req,res)=>{
    console.log("pedido recibido")
    res.end("Hola Mundo")
})

//server.listen(3000, ()=>{
//   console.log("el servidor escucha por el puerto 3000")
//})

server.listen(0, ()=>{
    console.log(`server en escucha por el puerto http://localhost:${server.address().port}`)
})
