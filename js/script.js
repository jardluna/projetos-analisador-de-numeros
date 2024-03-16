let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
    //Método para dizer quantos números tem o Array
        let tot = valores.length

    //Método para dizer qual o menor e o maior número do Array
        let menor = Math.min.apply(null, valores)
        let maior = Math.max.apply(null, valores)

    //Método para somar todos os números do Array
        let soma = 0
        for (let pos in valores) {
            soma += valores[pos]
        }

    //Método para calcular a média da soma do Array
        let media = 0
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} <span style="color: dodgerblue;">números cadastrados</span></p>`
        res.innerHTML += `<p>O <span style="color: dodgerblue;">menor</span> valor informado foi: ${menor}</p>`
        res.innerHTML += `<p>O <span style="color: dodgerblue;">maior</span> valor informado foi: ${maior}</p>`
        res.innerHTML += `<p>A <span style="color: dodgerblue;">soma</span> de todos os valores é: ${soma}</p>`
        res.innerHTML += `<p>E a <span style="color: dodgerblue;">média</span> dos valores é: ${media}</p>`
        res.style.lineHeight = '2em'
        res.style.fontWeight = 'bold'
    }
}