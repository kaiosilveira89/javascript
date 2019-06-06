function verificar() {


    var data = new Date()
    var ano = data.getFullYear()

    var fano = window.document.getElementById("txtano")
    var res = window.document.getElementById("res")
    var img = window.document.getElementById("imagem");

    if (fano.value.length == 0 || Number(fano.value) > ano) {

        window.alert("ERRO: Preencha corretamente os dados")

    } else {
        var sex = window.document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        if (sex[0].checked) {
            var genero = "Homem"
            if (idade > 0 && idade < 15) {
                res.innerHTML = `Voce tem ${idade} ano(s), por tanto voce ainda e um ${genero} <strong>MENOR DE IDADE</strong>!`
                img.src = "menino.png"
            } else if (idade > 15 && idade < 60) {
                res.innerHTML = `Voce tem ${idade} ano(s), por tanto voce e considerado um ${genero} <strong>ADULTO</strong>!`
                img.src = "homem.png"
            } else {
                res.innerHTML = `Voce tem ${idade} ano(s), por tanto voce ja um ${genero} <strong>IDOSO</strong>!`
                img.src = "idoso.png"
            }
        } else{
            genero = "Mulher"
            if (idade > 0 && idade < 15) {
                res.innerHTML = `Voce tem ${idade} ano(s), por tanto voce ainda e uma ${genero} <strong>MENOR DE IDADE</strong>!`
                img.src = "menina.png"
            } else if (idade > 15 && idade < 60) {
                res.innerHTML = `Voce tem ${idade} ano(s), por tanto voce e considerada uma ${genero} <strong>ADULTO</strong>!`
                img.src = "mulher.png"
            } else {
                res.innerHTML = `Voce tem ${idade} ano(s), por tanto voce ja e um ${genero} <strong>IDOSA</strong>!`
                img.src = "idosa.png"
            }
        }
    }

}