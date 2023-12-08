let strNotas = document.querySelector('.notas')
let lstNotas = document.querySelector('.visualizer')

let armazem = []

function validacao(){
    nbrNotas = Number(strNotas.value)
    armazem.push(nbrNotas) //Adicionar valor ao vetor

    lstNotas.innerHTML += `<option>Adicionado no vetor o valor ${nbrNotas}</option>` //Mensagem de confirmação

}

function media(){
    let soma = 0
    let media = 0

    for(let pos = 0; pos < armazem.length; pos++){
        soma += armazem[pos]
    }

    media = soma/armazem.length

    document.querySelector('.media').innerHTML = `A média das sua notas são: ${media}`


}