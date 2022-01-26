//Construir un muro
// 1 Construir
// 2 Aplanar
// 3 Pintar

const muro = {
    construido: false,
    aplanado: false,
    pintado: false
}



function construir(unMuro){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            unMuro.construido = true

            if (!unMuro.construido){
                reject(new Error('No se pudo construir'))
                return
            }
            resolve(unMuro)
        },2000)
    })
}



function aplanar(unMuro){
    return new Promise ((resolve, reject)=>{
        setTimeout(() =>{
            unMuro.aplanado = true

            if(!unMuro.aplanado){
                reject(new Error('No se pudo aplanar'))
                return
            }

            resolve(unMuro)
        },2000)

    })
}


function pintar(unMuro){
    return new Promise ((resolve, reject)=>{
        setTimeout(() =>{
            unMuro.pintado = true
            if(!unMuro.pintado){
                reject(new Error('No se pudo pintar'))
                return
            }
            resolve(unMuro)
        },2000)
    })
}



//Promesas
// new Promises((resolve, reject)=>{
//   resolve = es una función que se ejecuta cuando la promsa pasa de pendiente a resuleto
//   reject = función que se ejecuta cuando la promesa pasa de pendiente a rechazado
//})

//La promesa creada tendrá 2 metodos: then y catch
//Then la promesa se resuelve
//Catch la promesa es rechazada



//Escrito de manera extensa
// const promesaDeConstruccion = construir(muro)
// promesaDeConstruccion
//     .then((muroConstruido) =>{
//         console.log('Muro construido;', muroConstruido)
//         console.log('Promesa de construcción;', promesaDeConstruccion)
//     })
//     .catch((err) =>{
//         console.error('Error;', err)
//     })

//Promises hell : promesas dentro de promesas dentro de promesas
// construir(muro)
//     .then((muroConstruido) =>{
//         console.log('Muro construido;', muroConstruido)
//         aplanar(muroConstruido)
//             .then((muroAplanado)=>{
//                 console.log('Muro aplanado;', muroAplanado)
//                 pintar(muroAplanado)
//                     .then((muroPintado)=>{
//                         console.log('Muro pintado:', muroPintado)
//                     })
//                     .catch((err)=>{
//                         console.error('Error;', err)
//                     })
//             })
//             .catch((err)=>{
//                 console.error('Error;', err)
//             })
//     })
//     .catch((err) =>{
//         console.error('Error;', err)
//     })



//async  await 
//async : palabra reservada para marcar una función asyncrona (toda aquella que usa awair internamente)
//await: palabra reservada para esperar la resolución de una promesa

async function principal (){
    const muroConstruido = await construir(muro)
    const muroAplanado = await aplanar(muroConstruido)
    const muroPintado = await pintar(muroAplanado)

    console.log('Muro pintado:',muroPintado)
}

principal()
    .then(() =>{
        console.log('Fin')
    })
    .catch((err) =>{
        console.log('Error', err)
    })