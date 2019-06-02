var idade = 64
console.log(`Voce tem ${idade} ano.`)
if (idade > 18 && idade < 65) {
    console.log("Voto Obrigatorio")
} else if (idade > 16 || idade > 65) {
    console.log("Voto Opcional")
} else {
    console.log("Nao Vota")
}