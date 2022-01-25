
//Ejercicio para escribir y crear un nuevo archivo
// const fs = require('fs')

// function atTheEnd(error){
//     if (error) {
//         console.error('Hubo un error al crear el archivo')
//         return        
//     }
//     console.log('El archivo fueescrito exitosamente')
// }

// fs.writeFile('hola.txt','Hola a todos desde el nuevo archivo','utf-8', atTheEnd)



//Ejercicio appendfile
const fs = require('fs')

function newAppend(err){
    if (err){
        console.log('Hubo un error')
        return
    }
    console.log('El archivo fue escrito exitosamente')
}

fs.appendFile('text.txt','Contenido del archivo appendFile',newAppend)
