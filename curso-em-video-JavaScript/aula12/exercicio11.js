
var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var diaSem = agora.getDay()

switch (diaSem) {
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda-feira")
        break
    case 2:
        console.log("Terca-feira")
        break
    case 3:
        console.log("Quarta-feira")
        break
    case 4:
        console.log("Quinta-feira")
        break
    case 5:
        console.log("Sexta-feira")
        break
    case 6:
        console.log("Sabado")
        break
    default:
        console.log("[ERRO] Dia invalido")
        break
}

console.log(`Agora sao ${hora}h${minuto} no horario oficial de Brasilia.`)

if (hora < 12) {
    console.log("Bom dia!")
} else if (hora < 18) {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}
