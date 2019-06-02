function hora() {

    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');

    var data = new Date()
    var hora = data.getHours()


    if (hora < 12) {
        msg.innerText = "Bom dia!"
        img.src = 'manha.png'
        document.body.style.background = "rgb(70, 142, 236)"

   } else if (hora < 18) {
        msg.innerText = "Boa tarde!"
        img.src = 'tarde.png'
        document.body.style.background = "rgb(228, 150, 77)"

    } else {
        msg.innerText = "Boa noite!"
        img.src = 'noite.png'
        document.body.style.background = "rgb(89, 3, 160)"
    }

}
