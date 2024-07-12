/* function imc(peso, altura){
    return new Promise((resolve, reject) =>{
        const pesoToNumber = Number(peso)
        const alturaToNumber = Number(altura)
        if(isNaN(pesoToNumber)||isNaN(alturaToNumber)){
            reject(`Peso e Altura precisam ser números.`)
        }else{
            const resultImc = pesoToNumber / (alturaToNumber * alturaToNumber)
            resolve(resultImc.toFixed(1))
        }
    })
}*/

async function imc(peso, altura){
    if(typeof peso !== 'number' ||typeof altura !== 'number'){
        return Promise.reject('Peso e Altura precisam ser números.')
    }    
    const resultImc = peso / (altura * altura)
    return resultImc.toFixed(1)  
}
async function dois(peso,altura){
    try{
        console.log(`Calculando o IMC para peso ${peso} e altura ${altura}...`)
        const imcResult = await imc(peso, altura)
        console.log(`O resultado do IMC foi ${imcResult}`)
        switch (true) {
            case (imcResult < 18.5):
            console.log('Situação: Magreza')
            break;
            case (imcResult >=18.5 && imcResult <=24.9):
            console.log('Situação: Normal')
            break;
            case (imcResult >=25 && imcResult <=29.9):
            console.log('Situação: Sobrepeso')
            break;
            case (imcResult >=30 && imcResult <=39.9):
            console.log('Situação: Obesidade')
            break;
            case (imcResult >40):
            console.log('Situação: Obesidade grave')
            break
            }
    }catch(err){
        console.log(err)
    }
}

dois(71, 1.74)
dois(48, 1.60)
dois(71, 'texto')
dois(82, 1.72)
dois(120, 1.80)