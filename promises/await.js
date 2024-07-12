async function asyncSum(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject('Arguments for sum must be a Number')
    }
    return a+b
}
async function asyncSubtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('arguments must be of type number')
    }
    return a - b
}
//await pausa as execuções posteriores da função. Mas não do código como um todo
async function execute(){
//O tratamento de erro para o await pode ser feito com um try catch convencional
    try{
        const sumResult = await asyncSum(50,33)
        console.log(sumResult)
        console.log('teste na função')
        const subtractResult = await asyncSubtract(50, null)
        console.log(subtractResult)
    }catch(err){
        console.log(err)
    }
}
execute()

console.log('Teste')