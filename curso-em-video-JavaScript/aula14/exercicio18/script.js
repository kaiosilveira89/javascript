function contar(){

    var inicio = window.document.getElementById("txtinicio")
    var fim = window.document.getElementById("txtfim")
    var intervalo = window.document.getElementById("txtintervalo")
    var res = window.document.getElementById("res")

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var inter = Number(intervalo.value)

    for (var c = i ; c <= f ; c += inter){
        res.innerHTML += `${c}, `  // obs
    }
}
    

/* 
OBS: (+=) esta tendo um papel de concatenar as respostas.
Se fosse apenas o (=), a variavel (c) sobrescreveria o RES
a cadalaco de repeticao.
*/