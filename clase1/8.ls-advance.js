const fs = require('node:fs/promises')
const path = require('node:path')
const picocolors = require('picocolors')
const pc =require('picocolors')


const folder = process.argv[2] ?? '.'

async function ls(directory){
let files
try{
    files= await fs.readdir(folder)
} catch{
    console.error(' no se ha podido leer :c')

    process.exit(1);
}

const  filePromises  = files.map(async file =>{
    const filePath = path.join(folder,file)
    let stats;
    try{
         stats = await fs.stat(filePath) // status es informacion del archivo.
    }catch{
        console.error(`No se pudo leer  ${filePath}`)
        process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileTypwe = isDirectory ? 'd': 'f'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleDateString()

    return `${pc.white(fileTypwe)}, ${pc.dim(file.padEnd(50))}, ${pc.cyan(fileSize.toString().padStart(20))},  ${pc.greenBright(fileModified)}`
})

const fileInfo = await Promise.all(filePromises)
fileInfo.forEach(fileInfo => console.log(fileInfo) )
}

ls(folder)
