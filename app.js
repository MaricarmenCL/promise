//const paises =['francia', 'españa', 'mexico', 'portugal', 'argentina']
//async
const paises=[]

function nuevoPais(pais,callback){
    paises.push(pais)
    console.log(`Agregado: ${pais}`)
    callback()
    
}

function mostrarPaises(){
    console.log(paises)
}

function iniciarCallbackHell(){
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises)
        setTimeout (() => {
            nuevoPais('Mexico', mostrarPaises)
            setTimeout (() => {
                nuevoPais('Francia', mostrarPaises)
            },3000)
        },3000)
    },3000)
}
iniciarCallbackHell()

//mostrarPaises()
//nuevoPais('Alemania', mostrarPaises)