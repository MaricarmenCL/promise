const aplicarDescuento= new Promise((resolve, reject)=>{
    const descuento = false

    if (descuento) {
        resolve('Descuento se ha Aplicado')
    } else{
        reject('No se pudo aplicar el descuento')
    }
})

aplicarDescuento
.then(resultado => {
    console.log(resultado)
}).catch(error => {
    console.log(error)
})

console.log(aplicarDescuento)

const paises=[]
const nuevoPais=pais=>new Promise(resolve =>{
    setTimeout(()=>{
        paises.push(pais)
        resolve(`Agregado: ${pais}`)
    }, 3000)
})

nuevoPais('Mexico').then(resultado=>{
    console.log(resultado)//se agrego el pais mexico
    console.log(paises)//enseñarme el arreglo con mexico y eua
    return nuevoPais('EUA')
})
.then(resultado=>{
    console.log(resultado)//se agrego eua
    console.log(paises)//mexico y eua
    return nuevoPais('Francia')
})
.then(resultado=> {
    console.log(resultado)//se agrego francia
    console.log(paises)//mexico, eua y francia
})