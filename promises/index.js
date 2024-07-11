function imc(peso, altura){
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
}

function dois(peso,altura){
    const p = imc(peso, altura).then((result) =>{
        console.log(`O resultado do IMC foi ${result}`)
        switch (true) {
            case (result < 18.5):
                console.log('Situação: Magreza')
                break;
            case (result >=18.5 && result <=24.9):
                console.log('Situação: Normal')
                break;
            case (result >=25 && result <=29.9):
                console.log('Situação: Sobrepeso')
                break;
            case (result >=30 && result <=39.9):
                console.log('Situação: Obesidade')
                break;
            case (result >40):
                console.log('Situação: Obesidade grave')
                break
            default:
                break;
        }
    }).catch((err)=>{console.log(err)})
    console.log(`Calculando o IMC para peso ${peso} e altura ${altura}`)
}

dois(71, 1.74)
dois(48, 1.60)
dois(71, 'texto')
dois(82, 1.72)
dois(120, 1.80)