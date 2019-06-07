function contar() {

    var inicio = window.document.getElementById("txtinicio")
    var fim = window.document.getElementById("txtfim")
    var intervalo = window.document.getElementById("txtintervalo")
    var res = window.document.getElementById("res")

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var inter = Number(intervalo.value)

    if (Number(inicio.value) == 0 || Number(fim.value) == 0 || Number(intervalo.value) == 0) {

        window.alert("ERRO: Por favor, digite novamente!")
        res.innerHTML = `Impossivel contar! `

    } else {
        res.innerHTML = `Contando: `
        for (var c = i; c <= f; c += inter) {
            res.innerHTML += ` ${c} \u{1F449} `  // obs
        }
    }
}


/*
OBS: (+=) esta tendo um papel de concatenar as respostas.
Se fosse apenas o (=), a variavel (c) sobrescreveria o RES
a cadalaco de repeticao.
*/