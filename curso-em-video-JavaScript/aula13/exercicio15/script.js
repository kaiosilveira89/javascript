function comer() {

    var fatia = window.document.getElementById("txtfatia")
    var res = window.document.getElementById("res")
    var img = window.document.getElementById("imagem");
    var fatias = 8

    if (Number(fatia.value) > fatias || Number(fatia.value) < 0) {

        window.alert("ERRO: A pizza tem apenas 8 fatias. Por favor, digite novamente!")

    } else {
        var sobras = fatias - Number(fatia.value)
        img.src = `${Number(fatia.value)}_slice.png`
        res.innerHTML = `Voce comeu ${Number(fatia.value)} fatias, sobraram ${sobras}!`
        console.log(fatia)
    }

}