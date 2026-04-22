const fs = require('node:fs/promises')


.then(files=>{
    files.forEach(file => {
        const filePath= path.join(folder, file);

        fs.stat(filePath);
    })
})

.catch(err =>{
    if(err){
         console.log('hay un error: ', err);
        return; 

    }
    
} )