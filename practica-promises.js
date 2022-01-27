/**
 * Usando funciones asincronas con promesas
 * 1. Crear un archivo hola.txt
 * 2. usar la funcion appendFile para agregar una segunda linea
 * 3. despues de 5 segundos eliminar el archivo (fs.unlink)
 */

 const fs = require('fs/promises')

// const file = 'texto.txt'

// fs.writeFile(file, 'Nueva línea del archivo', 'utf8')
//     .then( () => {
//         console.log('Archivo creado')
//         fs.appendFile(file, '\n Se agrega nueva linea','utf8')
//         .then(() => {
//             console.log('Se agrego una nueva línea')
//             setTimeout(() =>{
//                 fs.unlink(file)  
//                     .then(()=>{
//                         console.log("El archivo fue eliminado")
//                     })
//             },5000)                                             
//         })
//     })
//     .catch( err => {
//         console.error('Error:', err)
//     })


    
// async await
async function main(){
    await fs.writeFile('text-async-await.txt', 'primera línea','utf8')
    await fs.appendFile('text-async-await.txt', '\n Se agrega nueva linea','utf8')
    await setTimeout(() => {
        fs.unlink('text-async-await.txt')   
    }, 5000)    
}

main()
    .then(() =>{
        console.log('Archivo creado, añadir una lína y borrado con async await')
    })
    .catch((err) =>{
        console.error('Error:',err)
    })