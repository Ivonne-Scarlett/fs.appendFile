//Construir un muro
// 1 Construir
// 2 Aplanar
// 3 Pintar

const muro = {
    construido: false,
    aplanado: false,
    pintado: false
}

function construir (unMuro){
    setTimeout(() =>{
        unMuro.construido = true        
    },2000)
}

function construir(unMuro){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            unMuro.construido = true

            if (!unMuro.construido){
                reject(new Error('No se pudo construir'))
                return
            }
            resolve(unmUro)
        },2000)
    })
}

const promesaDeConstruccion = construir(muro)
promesaDeConstruccion





// function aplanar(unMuroConstruido){
//     unMuroConstruido.aplanado = true
//     return unMuroConstruido
// }

// function pintar (unMuroAplanado){
//     unMuroAplanado.pintado = true
//     return unMuroAplanado
// }

// // const muroConstruido = construir(muro)
// // const muroAplanado = aplanar(muroConstruido)
// // const muroPintado = pintar(muroAplanado)
// // console.log('Muro Pintado es:', muroPintado)

// construir({ ... muro}, (error,muroConstruido) => {
//     console.log('muro construido:', muroConstruido)
//     console.log('error:', error)

//     pintar(muroConstruido)
// })

//Promesas
// new Promises((resolve, reject)=>{
//   resolve = es una función que se ejecuta cuando la promsa pasa de pendiente a resuleto
//   reject = función que se ejecuta cuando la promesa pasa de pendiente a rechazado
//})

//La promesa creada tendrá 2 metodos: then y catch