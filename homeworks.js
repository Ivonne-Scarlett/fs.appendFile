/**
 * Usando funciones asicronas
 * 1. Crear un archivo hola.txt
 * 2. usar la funcion appendFile para agregar una segunda linea
 * 3. despues de 5 segundos eliminar el archivo (fs.unlink)
 */

const fs = require('fs')

fs.appendFile('hola.txt','\nNueva línea', (err) =>{
    if (err){
        console.log('Hubo un error')
    }
    console.log('El archivo fue escrito exitosamente agregando una nueva línea')
})

fs.unlink('hola.txt', function(err) {
    setTimeout(() =>{
        if(err) {
            console.log(err);
        } 
        console.log("El archivo fue eliminado")
    },5000)    
})


