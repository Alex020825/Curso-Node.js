const { ServerResponse } = require('node:http')
const net = require('node:net') //TRABAJA CON EL PROTOCOLO TCP 

function encontrarPuerto(puerto){
    return new Promise((resolve,reject)=>{
        const server = net.createServer()

        server.listen(puerto,()=>{
            const port = server.address().port
            server.close(()=>{
                resolve(port)
            })

        })

        //Node.js trabaja con eventos, solo eventos.

        server.on('error', (err)=>{
            if(err.code === 'EADDRINUSE'){
                encontrarPuerto(0).then(puerto =>resolve(puerto))
            }
            else{
                reject(err)
            }
        })
    })
}


module.exports = {encontrarPuerto}