//Construir un muro
// 1 Construir
// 2 Aplanar
// 3 Pintar

const muro = {
    construido: false,
    aplanado: false,
    pintado: false
}

function construir (unMuro, unaFuncion){
    setTimeout(() =>{
        unMuro.construido = true
        unaFuncion(null,unMuro)
    },2000)
}

function aplanar(unMuroConstruido){
    unMuroConstruido.aplanado = true
    return unMuroConstruido
}

function pintar (unMuroAplanado){
    unMuroAplanado.pintado = true
    return unMuroAplanado
}

// const muroConstruido = construir(muro)
// const muroAplanado = aplanar(muroConstruido)
// const muroPintado = pintar(muroAplanado)
// console.log('Muro Pintado es:', muroPintado)

construir({ ... muro}, (error,muroConstruido) => {
    console.log('muro construido:', muroConstruido)
    console.log('error:', error)

    pintar(muroConstruido)
})