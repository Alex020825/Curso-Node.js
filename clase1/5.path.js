const path = require ('node:path')


//Barra separadora segun mi S.O
console.log(path.sep);


//unir rutas con path.join 
const filePaht = path.join("content", "secret", "text");


const base = path.basename("temp/xd/secret/si");
console.log(base)


const extension = path.extname("my.image.jpg")
console.log(extension)